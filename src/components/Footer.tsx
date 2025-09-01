'use client';

import { motion } from 'framer-motion';
import { Mail, Github, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent">
              {t('header.name')}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {t('header.description')}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-emerald-300">{t('footer.quickLinks')}</h4>
            <div className="space-y-2">
              {[
                { name: t('nav.skills'), href: '#skills' },
                { name: t('nav.experience'), href: '#experience' },
                { name: t('nav.projects'), href: '#projects' },
                { name: t('nav.education'), href: '#education' },
                { name: t('nav.contact'), href: '#contact' },
                { name: t('nav.chatAI'), href: '/chat' }
              ].map((link, index) => {
                const LinkComponent = link.href.startsWith('/') ? Link : motion.a;
                
                return (
                  <LinkComponent
                    key={link.name}
                    href={link.href}
                    {...(link.href.startsWith('/') ? {} : { whileHover: { x: 5 } })}
                    className="block text-gray-400 hover:text-emerald-300 transition-colors"
                  >
                    {link.href.startsWith('/') ? (
                      <motion.span whileHover={{ x: 5 }}>
                        {link.name}
                      </motion.span>
                    ) : (
                      link.name
                    )}
                  </LinkComponent>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-emerald-300">{t('nav.contact')}</h4>
            <div className="space-y-3">
              <a 
                href="mailto:tamannasristy2@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-emerald-300 transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">tamannasristy2@gmail.com</span>
              </a>
              <a 
                href="https://github.com/tamanna104"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-emerald-300 transition-colors group"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">github.com/tamanna104</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{t('header.location')}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-emerald-800/50"
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 {t('header.name')}. {t('footer.rights')}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
