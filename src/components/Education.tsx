'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Trophy, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const languages = [
  { name: "English", level: "Excellent", proficiency: 95 },
  { name: "Japanese", level: "Average", proficiency: 60 },
  { name: "Bengali", level: "Excellent", proficiency: 100 },
  { name: "Hindi", level: "Good (Listening/Speaking)", proficiency: 70 }
];

export default function Education() {
  const { t } = useLanguage();

  const education = {
    degree: t('education.bscTitle'),
    university: t('education.university'),
    period: "January 2020 - January 2024",
    cgpa: "3.89"
  };

  const certifications = [
    {
      name: t('education.cert.jlpt'),
      issuer: "JLPT",
      type: "Language"
    },
    {
      name: t('education.cert.cisco'),
      issuer: "Cisco",
      type: "Technical"
    }
  ];

  const achievements = [
    {
      title: t('education.achievement.icpc'),
      years: "2022 & 2023",
      description: t('education.achievement.icpc.desc')
    },
    {
      title: t('education.achievement.deans'),
      years: "Multiple Semesters",
      description: t('education.achievement.deans.desc'),
      details: [
        "Spring 2022-2023: GPA 3.95",
        "Spring 2020-2021: GPA 3.85", 
        "Fall 2020-2021: GPA 3.89"
      ]
    }
  ];

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
            {t('education.title')}
          </h2>
          <p className="text-gray-600 text-lg">
            {t('education.subtitle')}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 shadow-xl border border-emerald-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 rounded-2xl">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Education</h3>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-800">{education.degree}</h4>
                <p className="text-emerald-600 font-medium">{education.university}</p>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{education.period}</span>
                </div>
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-4 py-2 rounded-xl inline-block">
                  <span className="font-bold">CGPA: {education.cgpa}</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-8 bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-xl border border-blue-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-2xl">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t('education.certifications')}</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-blue-500 pl-4"
                  >
                    <h4 className="font-semibold text-gray-800">{cert.name}</h4>
                    <p className="text-blue-600 text-sm">{cert.issuer}</p>
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs mt-1">
                      {cert.type}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements & Languages */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Achievements */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-8 shadow-xl border border-amber-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-3 rounded-2xl">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t('education.achievements')}</h3>
              </div>

              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-amber-500 pl-4"
                  >
                    <h4 className="font-semibold text-gray-800">{achievement.title}</h4>
                    <p className="text-amber-600 text-sm font-medium">{achievement.years}</p>
                    <p className="text-gray-600 text-sm mt-1">{achievement.description}</p>
                    {achievement.details && (
                      <ul className="mt-2 space-y-1">
                        {achievement.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-xs text-gray-500 ml-4">
                            • {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-8 shadow-xl border border-emerald-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 rounded-2xl">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t('education.languages')}</h3>
              </div>

              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">{lang.name}</span>
                      <span className="text-sm text-emerald-600 font-medium">{lang.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.proficiency}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
