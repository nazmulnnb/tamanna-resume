'use client';

import { motion } from 'framer-motion';
import { Code, Database, Palette, Brain } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Skills() {
  const { t, language } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.frontendTitle'),
      icon: Palette,
      skills: [
        { name: "Next.js", level: "Professional", color: "from-gray-700 to-gray-800" },
        { name: "React.js", level: "Professional", color: "from-blue-500 to-blue-600" },
        { name: "Tailwind CSS", level: "Professional", color: "from-cyan-500 to-cyan-600" },
        { name: "Streamlit", level: "Professional", color: "from-red-500 to-red-600" },
      ]
    },
    {
      title: t('skills.backendTitle'),
      icon: Database,
      skills: [
        { name: "Python", level: "Professional", color: "from-yellow-500 to-yellow-600" },
        { name: "FastAPI", level: "Professional", color: "from-green-500 to-green-600" },
        { name: "NestJS", level: "Professional", color: "from-red-600 to-red-700" },
        { name: "Laravel", level: "Professional", color: "from-orange-500 to-orange-600" },
      ]
    },
    {
      title: t('skills.toolsTitle'),
      icon: Code,
      skills: [
        { name: "PostgreSQL", level: "Professional", color: "from-blue-600 to-blue-700" },
        { name: "MySQL", level: "Professional", color: "from-blue-500 to-blue-600" },
        { name: "Git", level: "Professional", color: "from-gray-600 to-gray-700" },
        { name: "Docker", level: "Professional", color: "from-blue-400 to-blue-500" },
      ]
    },
    {
      title: t('skills.aiTitle'),
      icon: Brain,
      skills: [
        { name: "OpenAI API", level: "Professional", color: "from-emerald-500 to-emerald-600" },
        { name: "Langchain", level: "Professional", color: "from-indigo-500 to-indigo-600" },
        { name: "Vector DB", level: "Professional", color: "from-pink-500 to-pink-600" },
        { name: "RAG", level: "Professional", color: "from-purple-500 to-purple-600" },
      ]
    }
  ];

  return (
    <section key={language} className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          key={`title-${language}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-gray-600 text-lg">
            {t('skills.subtitle')}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={`${category.title}-${language}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="bg-gradient-to-br from-white to-emerald-50 rounded-3xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 rounded-2xl">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={`${skill.name}-${language}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-800">{skill.name}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          skill.level === 'Professional' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                          key={`${skill.name}-bar-${language}`}
                          initial={{ width: 0 }}
                          animate={{ width: skill.level === 'Professional' ? '90%' : '75%' }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) + 0.5 }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
