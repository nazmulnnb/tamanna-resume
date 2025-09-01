'use client';

import { motion } from 'framer-motion';
import { Code, Database, Palette, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Palette,
    skills: [
      { name: "ReactJS", level: "Professional", color: "from-blue-500 to-blue-600" },
      { name: "NextJS", level: "Professional", color: "from-gray-700 to-gray-800" },
      { name: "Tailwind CSS", level: "Professional", color: "from-cyan-500 to-cyan-600" },
    ]
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: [
      { name: "PHP", level: "Professional", color: "from-purple-600 to-purple-700" },
      { name: "Laravel", level: "Professional", color: "from-red-500 to-red-600" },
      { name: "FastAPI", level: "Professional", color: "from-green-500 to-green-600" },
      { name: "Python", level: "Academic", color: "from-yellow-500 to-yellow-600" },
    ]
  },
  {
    title: "Database & Tools",
    icon: Code,
    skills: [
      { name: "PostgreSQL", level: "Professional", color: "from-blue-600 to-blue-700" },
      { name: "MySQL", level: "Professional", color: "from-orange-500 to-orange-600" },
      { name: "Git", level: "Professional", color: "from-gray-600 to-gray-700" },
    ]
  },
  {
    title: "AI & Modern Tech",
    icon: Brain,
    skills: [
      { name: "OpenAI API", level: "Professional", color: "from-emerald-500 to-emerald-600" },
      { name: "Langchain", level: "Professional", color: "from-indigo-500 to-indigo-600" },
      { name: "Vector DB", level: "Professional", color: "from-pink-500 to-pink-600" },
    ]
  }
];

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
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
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                      viewport={{ once: true }}
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
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.level === 'Professional' ? '90%' : '75%' }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) + 0.5 }}
                          viewport={{ once: true }}
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
