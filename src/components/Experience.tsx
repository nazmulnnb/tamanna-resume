'use client';

import { motion } from 'framer-motion';
import { Calendar, Building } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t('experience.fullStackDeveloper'),
      company: "Collective-AI LLC",
      period: "November 2024 - " + t('experience.present'),
      type: "current",
      description: t('experience.collectiveAI.description'),
      technologies: ["Next.js", "FastAPI", "Python", "AI/ML"]
    },
    {
      title: "Backend Development Intern",
      company: "Jackpt",
      period: "August 2023 - November 2023",
      type: "completed",
      description: t('experience.jackpt.description'),
      technologies: ["PHP", "Laravel", "MySQL", "API Development"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t('experience.title')}
          </h2>
          <p className="text-gray-600 text-lg">
            {t('experience.subtitle')}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-100 hover:shadow-2xl transition-all duration-300 relative group">
                    {/* Status indicator */}
                    <div className={`absolute -top-3 -right-3 px-4 py-2 rounded-full text-xs font-medium ${
                      exp.type === 'current' 
                        ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' 
                        : 'bg-gradient-to-r from-gray-500 to-gray-600 text-white'
                    }`}>
                      {exp.type === 'current' ? 'Current' : 'Completed'}
                    </div>

                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 rounded-2xl">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                        <p className="text-emerald-600 font-semibold">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-4 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:block w-6 h-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Spacer */}
                <div className="lg:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
