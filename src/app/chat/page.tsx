'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, ArrowLeft, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm here to answer any questions you have about Tamanna Akter. Feel free to ask about her background, skills, experience, projects, or anything else you'd like to know about her professional profile!",
      role: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input.trim() }),
      });

      if (!response.body) {
        throw new Error('No response body');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: '',
        role: 'assistant',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') {
              setIsLoading(false);
              return;
            }

            try {
              const parsed = JSON.parse(data);
              if (parsed.content) {
                setMessages(prev =>
                  prev.map(msg =>
                    msg.id === assistantMessage.id
                      ? { ...msg, content: msg.content + parsed.content }
                      : msg
                  )
                );
              }
            } catch (e) {
              // Ignore parsing errors for partial chunks
            }
          }
        }
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          content: 'Sorry, I encountered an error. Please try again.',
          role: 'assistant',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium hidden sm:inline">Back to Portfolio</span>
              <span className="font-medium sm:hidden">Back</span>
            </Link>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-1.5 rounded-lg">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-gray-900">Chat with Tamanna's AI</h1>
                  <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Ask me anything about Tamanna Akter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-emerald-100 h-[calc(100vh-150px)] flex flex-col">
          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-4 sm:space-y-6">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-2 sm:gap-4 ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.role === 'assistant' && (
                    <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-1.5 sm:p-2 rounded-lg sm:rounded-xl h-fit flex-shrink-0">
                      <Bot className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                    </div>
                  )}
                  
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] rounded-xl sm:rounded-2xl p-3 sm:p-4 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="whitespace-pre-wrap leading-relaxed text-sm sm:text-base">{message.content}</p>
                    <p
                      className={`text-xs mt-2 ${
                        message.role === 'user' ? 'text-emerald-100' : 'text-gray-500'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>

                  {message.role === 'user' && (
                    <div className="bg-gradient-to-br from-gray-600 to-gray-700 p-1.5 sm:p-2 rounded-lg sm:rounded-xl h-fit flex-shrink-0">
                      <User className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-2 sm:gap-4 justify-start"
              >
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-1.5 sm:p-2 rounded-lg sm:rounded-xl h-fit flex-shrink-0">
                  <Bot className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="bg-gray-100 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 sm:p-6 border-t border-gray-100">
            <div className="flex gap-2 sm:gap-4">
              <div className="flex-1 relative">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about Tamanna's experience, skills, projects..."
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none text-sm sm:text-base text-gray-900 placeholder-gray-500 bg-white"
                  rows={1}
                  disabled={isLoading}
                />
              </div>
              <motion.button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 text-white p-2.5 sm:p-3 rounded-lg sm:rounded-xl transition-all disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
