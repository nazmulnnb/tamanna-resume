'use client';

import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface LanguageSwitcherProps {
  scrolled?: boolean;
}

export default function LanguageSwitcher({ scrolled = false }: LanguageSwitcherProps) {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ja' : 'en';
    setLanguage(newLang);
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-sm border transition-all duration-300 shadow-lg cursor-pointer ${scrolled
          ? 'bg-emerald-50/80 border-emerald-200 text-emerald-700 hover:bg-emerald-100/80'
          : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
        }`}
    >
      <Languages className="w-4 h-4" />
      <span className="text-sm font-medium">
        {language === 'en' ? t('language.japanese') : t('language.english')}
      </span>
    </motion.button>
  );
}
