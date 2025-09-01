'use client';

import { motion } from 'framer-motion';
import { Mail, Github, MapPin, Download } from 'lucide-react';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white py-20 px-6 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-emerald-200 to-emerald-300 bg-clip-text text-transparent">
              Tamanna Akter
            </h1>
            <h2 className="text-2xl lg:text-3xl font-light text-emerald-200 mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              A versatile and motivated Full Stack Developer with a strong foundation in computer science 
              and professional experience in building modern web applications.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col gap-3">
                <a 
                  href="mailto:tamannasristy2@gmail.com" 
                  className="flex items-center gap-3 text-white hover:text-emerald-300 transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">tamannasristy2@gmail.com</span>
                </a>
                <a 
                  href="https://github.com/tamanna104" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-emerald-300 transition-colors group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm">github.com/tamanna104</span>
                </a>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 justify-center transition-all shadow-lg hover:shadow-emerald-500/25"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
