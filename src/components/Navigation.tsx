'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.education'), href: '#education' },
    { name: t('nav.contact'), href: '#contact' },
    { name: t('nav.chatAI'), href: '/chat' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      // Wait a bit for mobile menu to close
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          const navHeight = 80; // Height of the fixed navigation
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Close mobile menu on escape key
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-emerald-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className={`text-xl font-bold transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            Tamanna
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              item.href.startsWith('/') ? (
                <Link key={item.name} href={item.href}>
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`font-medium transition-colors hover:scale-105 transform cursor-pointer ${
                      scrolled 
                        ? 'text-gray-700 hover:text-emerald-600' 
                        : 'text-white hover:text-emerald-300'
                    }`}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              ) : (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-medium transition-colors hover:scale-105 transform cursor-pointer ${
                    scrolled 
                      ? 'text-gray-700 hover:text-emerald-600' 
                      : 'text-white hover:text-emerald-300'
                  }`}
                >
                  {item.name}
                </motion.button>
              )
            ))}
            
            {/* Language Switcher for Desktop */}
            <div className="ml-4">
              <LanguageSwitcher scrolled={scrolled} />
            </div>
          </div>

          {/* Mobile Language Switcher and Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <div className="scale-75">
              <LanguageSwitcher scrolled={scrolled} />
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-colors z-50 ${
                scrolled 
                  ? 'text-gray-900 hover:bg-emerald-100' 
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle mobile menu"
              type="button"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={mobileMenuRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 right-0 z-50"
            >
              <div className="mx-6 mt-2 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-emerald-100 p-4">
                {navItems.map((item, index) => (
                  item.href.startsWith('/') ? (
                    <Link key={item.name} href={item.href}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        onClick={() => setIsOpen(false)}
                        className="block py-3 px-4 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors font-medium cursor-pointer"
                      >
                        {item.name}
                      </motion.div>
                    </Link>
                  ) : (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      onClick={() => {
                        scrollToSection(item.href);
                        setIsOpen(false);
                      }}
                      className="block w-full text-left py-3 px-4 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors font-medium cursor-pointer"
                    >
                      {item.name}
                    </motion.button>
                  )
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
