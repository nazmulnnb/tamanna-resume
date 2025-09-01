'use client';

import { motion } from 'framer-motion';
import { Heart, Mail, Github, MapPin } from 'lucide-react';

export default function Footer() {
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
              Tamanna Akter
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions 
              and contributing to technological advancement.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-emerald-300">Quick Links</h4>
            <div className="space-y-2">
              {['Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="block text-gray-400 hover:text-emerald-300 transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-emerald-300">Contact</h4>
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
                <span className="text-sm">Dhaka, Bangladesh</span>
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
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Tamanna Akter. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>using Next.js & Framer Motion</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
