'use client';

import { motion } from 'framer-motion';
import { Target, Heart } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-2xl">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Career Objective</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              I aim to continually enhance my programming skills, stay current with the latest technologies, 
              and apply my knowledge to develop innovative solutions. My goal is to become a versatile programmer, 
              adapting to new challenges and contributing to project success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-purple-100 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-2xl">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Motivation for Japan</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              I am excited about pursuing a career in Japan, attracted by its reputation as one of the safest 
              places for women and its forefront adoption of high-end technologies. I am eager to contribute 
              to this technological advancement, and my appreciation for Japanese culture, especially anime, 
              adds an extra layer of enthusiasm for living and working in Japan.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
