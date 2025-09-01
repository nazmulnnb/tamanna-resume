import { OpenAI } from 'openai';
import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

const openai = new OpenAI({
  apiKey: process.env.AZURE_OPENAI_API_KEY,
  baseURL: `${process.env.AZURE_OPENAI_ENDPOINT}/openai/deployments/${process.env.AZURE_OPENAI_DEPLOYMENT_NAME}`,
  defaultQuery: { 'api-version': process.env.AZURE_OPENAI_API_VERSION },
  defaultHeaders: {
    'api-key': process.env.AZURE_OPENAI_API_KEY,
  },
});

async function getSystemPrompt(language?: string): Promise<string> {
  try {
    const filePath = join(process.cwd(), 'tamanna.MD');
    const tamannaInfo = await readFile(filePath, 'utf-8');
    
    const isJapanese = language === 'ja';
    
    return `You are an AI assistant that provides information about Tamanna Akter based on her resume and profile. 

Here is Tamanna's complete profile information:

${tamannaInfo}

IMPORTANT INSTRUCTIONS:
- You can ONLY answer questions about Tamanna Akter based on the information provided above.
- The user's preferred language is ${isJapanese ? 'Japanese (ja)' : 'English (en)'}.
- ALWAYS respond in ${isJapanese ? 'Japanese' : 'English'} unless the user explicitly asks you to use a different language.
- If someone asks about anything else (other people, general topics, unrelated questions), politely decline and redirect them to ask about Tamanna.
- Be helpful, professional, and enthusiastic when discussing Tamanna's background, skills, experience, and achievements.
- If you don't have specific information about something related to Tamanna, say so honestly.
- Keep responses concise but informative.
- Always maintain a professional and positive tone.

Example responses for off-topic questions:

${isJapanese ? 
`Japanese:
- "私はタマンナ・アクテールについてのみ情報を提供できます。彼女の経歴、スキル、経験、または職業プロフィールの他の側面について、お気軽にお尋ねください。"
- "私はタマンナ・アクテールについて学んでいただくためにここにいます。彼女の経験や資格について何を知りたいですか？"` :
`English:
- "I can only provide information about Tamanna Akter. Please feel free to ask me about her background, skills, experience, or any other aspect of her professional profile."
- "I'm here to help you learn about Tamanna Akter. What would you like to know about her experience or qualifications?"`
}`;
  } catch (error) {
    console.error('Error reading tamanna.MD:', error);
    return `You are an AI assistant that provides information about Tamanna Akter, a Full Stack Developer. You can only answer questions about Tamanna based on her professional background. Please ask questions about her skills, experience, or background.`;
  }
}

export async function POST(req: NextRequest) {
  try {
    const { message, language } = await req.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const systemPrompt = await getSystemPrompt(language);

    const stream = await openai.chat.completions.create({
      model: process.env.AZURE_OPENAI_DEPLOYMENT_NAME || 'gpt-4',
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        {
          role: 'user',
          content: message,
        },
      ],
      stream: true,
      temperature: 0.7,
      max_tokens: 1000,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content || '';
            if (content) {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
            }
          }
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        } catch (error) {
          console.error('Stream error:', error);
          controller.error(error);
        }
      },
    });

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
