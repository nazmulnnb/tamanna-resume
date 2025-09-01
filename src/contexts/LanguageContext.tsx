'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Load language from localStorage on client side
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ja')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  // Move translations inside the provider to trigger re-renders
  const translations: Record<Language, Record<string, string>> = {
    en: {
      // Header
      'header.name': 'Tamanna Akter',
      'header.title': 'Full Stack Developer',
      'header.description': 'A versatile and motivated Full Stack Developer with a strong foundation in computer science and professional experience in building modern web applications.',
      'header.location': 'Dhaka, Bangladesh',
      'header.chatWithAI': 'Chat with AI',
      'header.downloadResume': 'Download Resume',

      // Navigation
      'nav.skills': 'Skills',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.education': 'Education',
      'nav.contact': 'Contact',
      'nav.chatAI': 'Chat AI',

      // Skills
      'skills.title': 'Technical Skills',
      'skills.subtitle': 'Technologies I work with',
      'skills.frontendTitle': 'Frontend Development',
      'skills.backendTitle': 'Backend Development',
      'skills.toolsTitle': 'Tools & Technologies',
      'skills.aiTitle': 'AI & Modern Tech',

      // Experience
      'experience.title': 'Professional Experience',
      'experience.subtitle': 'My journey in software development',
      'experience.softwareEngineer': 'Software Engineer',
      'experience.fullStackDeveloper': 'Full-stack Developer',
      'experience.present': 'Present',
      'experience.collectiveAI.description': 'Working as a full-stack developer on cutting-edge AI applications and web platforms.',
      'experience.jackpt.description': 'Developed and integrated APIs using Laravel for a unique platform facilitating service and product exchanges.',

      // Projects
      'projects.title': 'Featured Projects',
      'projects.subtitle': 'Some things I\'ve built',
      'projects.viewProject': 'View Project',
      'projects.sourceCode': 'Source Code',
      'projects.keibaAI.description': 'A web application providing AI-driven predictions for horse racing. Users can ask questions about horses and predictions, which are answered by an LLM-based chatbot.',
      'projects.jackpt.description': 'A platform for service and product exchanges in Bangladesh without monetary transactions.',
      'projects.hospital.description': 'A comprehensive user management system with four distinct roles (admin, manager, staff, client).',
      'projects.tripPlanner.description': 'An application allowing users to plan trips, save routes, and adjust plans on the go.',
      'projects.petAdoption.description': 'A portal for a pet shop to manage pet adoptions, veterinarian information, and appointments.',

      // Education
      'education.title': 'Education',
      'education.subtitle': 'My academic background',
      'education.bscTitle': 'Bachelor of Science in Computer Science and Engineering',
      'education.university': 'American International University - Bangladesh',
      'education.cgpa': 'CGPA',
      'education.certifications': 'Certifications',
      'education.achievements': 'Achievements',
      'education.languages': 'Languages',
      'education.cert.jlpt': 'Japanese-Language Proficiency N4',
      'education.cert.cisco': 'IT Essentials: PC Hardware and Software',
      'education.achievement.icpc': 'ACM ICPC Dhaka Regional Preliminary',
      'education.achievement.icpc.desc': 'Participated in prestigious programming competition',
      'education.achievement.deans': 'Dean\'s Honor List',
      'education.achievement.deans.desc': 'Recognized for academic excellence with high GPA',

      // Footer
      'footer.quickLinks': 'Quick Links',

      // Contact
      'contact.title': 'Get In Touch',
      'contact.subtitle': 'Let\'s build something amazing together',
      'contact.description': 'I\'m always open to discussing new opportunities, interesting projects, or just having a chat about technology.',
      'contact.email': 'Email',
      'contact.github': 'GitHub',
      'contact.location': 'Location',

      // Footer
      'footer.text': 'Built with Next.js and Tailwind CSS',
      'footer.rights': 'All rights reserved.',

      // Language Switcher
      'language.english': 'English',
      'language.japanese': '日本語',
    },
    ja: {
      // Header
      'header.name': 'タマンナ・アクテール',
      'header.title': 'フルスタック開発者',
      'header.description': 'コンピュータサイエンスの堅固な基盤と、モダンなWebアプリケーション構築の実務経験を持つ、多才で意欲的なフルスタック開発者です。',
      'header.location': 'ダッカ、バングラデシュ',
      'header.chatWithAI': 'AIとチャット',
      'header.downloadResume': '履歴書をダウンロード',

      // Navigation
      'nav.skills': 'スキル',
      'nav.experience': '経験',
      'nav.projects': 'プロジェクト',
      'nav.education': '学歴',
      'nav.contact': 'お問い合わせ',
      'nav.chatAI': 'AI チャット',

      // Skills
      'skills.title': '技術スキル',
      'skills.subtitle': '私が使用する技術',
      'skills.frontendTitle': 'フロントエンド開発',
      'skills.backendTitle': 'バックエンド開発',
      'skills.toolsTitle': 'ツールと技術',
      'skills.aiTitle': 'AI & モダン技術',

      // Experience
      'experience.title': '職歴',
      'experience.subtitle': 'ソフトウェア開発での私の歩み',
      'experience.softwareEngineer': 'ソフトウェアエンジニア',
      'experience.fullStackDeveloper': 'フルスタック開発者',
      'experience.present': '現在',
      'experience.collectiveAI.description': '最先端のAIアプリケーションとWebプラットフォームのフルスタック開発者として働いています。',
      'experience.jackpt.description': 'サービスと商品の交換を促進するユニークなプラットフォームのためのLaravelを使用したAPIの開発と統合。',

      // Projects
      'projects.title': '注目プロジェクト',
      'projects.subtitle': '私が構築したもの',
      'projects.viewProject': 'プロジェクトを見る',
      'projects.sourceCode': 'ソースコード',
      'projects.keibaAI.description': '競馬のAI予測を提供するWebアプリケーション。ユーザーは馬や予測について質問でき、LLMベースのチャットボットが回答します。',
      'projects.jackpt.description': 'バングラデシュでの金銭取引なしでのサービスと商品交換のためのプラットフォーム。',
      'projects.hospital.description': '4つの異なる役割（管理者、マネージャー、スタッフ、クライアント）を持つ包括的なユーザー管理システム。',
      'projects.tripPlanner.description': 'ユーザーが旅行を計画し、ルートを保存し、外出先で計画を調整できるアプリケーション。',
      'projects.petAdoption.description': 'ペットショップがペットの養子縁組、獣医情報、予約を管理するためのポータル。',

      // Education
      'education.title': '学歴',
      'education.subtitle': '私の学術的背景',
      'education.bscTitle': 'コンピュータサイエンス・エンジニアリング学士',
      'education.university': 'アメリカン国際大学 - バングラデシュ',
      'education.cgpa': 'CGPA',
      'education.certifications': '資格',
      'education.achievements': '実績',
      'education.languages': '言語',
      'education.cert.jlpt': '日本語能力試験N4',
      'education.cert.cisco': 'IT エッセンシャルズ: PC ハードウェアとソフトウェア',
      'education.achievement.icpc': 'ACM ICPC ダッカ地域予選',
      'education.achievement.icpc.desc': '権威あるプログラミング競技に参加',
      'education.achievement.deans': '学部長表彰リスト',
      'education.achievement.deans.desc': '高いGPAで学術的優秀性が認められました',

      // Footer
      'footer.quickLinks': 'クイックリンク',

      // Contact
      'contact.title': 'お問い合わせ',
      'contact.subtitle': '一緒に素晴らしいものを作りましょう',
      'contact.description': '新しい機会、興味深いプロジェクト、または技術について話すことについて、いつでもお気軽にお声がけください。',
      'contact.email': 'メール',
      'contact.github': 'GitHub',
      'contact.location': '所在地',

      // Footer
      'footer.text': 'Next.jsとTailwind CSSで構築',
      'footer.rights': '全著作権所有。',

      // Language Switcher
      'language.english': 'English',
      'language.japanese': '日本語',
    }
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
