'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const typeColors = {
  Professional: "from-emerald-500 to-emerald-600",
  Academic: "from-blue-500 to-blue-600",
  Personal: "from-green-500 to-green-600"
};

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Keiba Ai GPT",
      period: "December 2024 - Ongoing",
      type: "Professional",
      description: t('projects.keibaAI.description'),
      technologies: ["Next.js", "FastAPI", "PostgreSQL", "Docker"],
      teamSize: "4",
      status: "ongoing",
      category: "AI/ML"
    },
    {
      title: "Jackpt",
      period: "August 2023 - November 2023",
      type: "Professional",
      description: t('projects.jackpt.description'),
      technologies: ["PHP", "Laravel", "ReactJS", "MySQL"],
      teamSize: "4",
      status: "completed",
      category: "E-commerce",
      link: "http://jackptbd.com"
    },
    {
      title: "Hospital Management System",
      period: "Academic Project",
      type: "Academic",
      description: t('projects.hospital.description'),
      technologies: ["TypeScript", "NextJS", "NestJS", "ReactJS", "Tailwind CSS"],
      teamSize: "1",
      status: "completed",
      category: "Healthcare"
    },
    {
      title: "Trip Planner",
      period: "Personal Project",
      type: "Personal",
      description: t('projects.tripPlanner.description'),
      technologies: ["PHP", "JavaScript", "CSS", "MySQL"],
      teamSize: "3",
      status: "completed",
      category: "Travel"
    },
    {
      title: "Pet Adoption Portal",
      period: "Academic Project",
      type: "Academic",
      description: t('projects.petAdoption.description'),
      technologies: ["C#", ".NET Framework", "MySQL"],
      teamSize: "1",
      status: "completed",
      category: "Management"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-gray-300 text-lg">
            {t('projects.subtitle')}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${typeColors[project.type as keyof typeof typeColors]}`}>
                      {project.type}
                    </span>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${
                    project.status === 'ongoing' ? 'bg-green-400' : 'bg-gray-400'
                  } animate-pulse`}></div>
                </div>

                {/* Meta info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>Team of {project.teamSize}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/20 text-white rounded-full text-xs font-medium backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t('projects.viewProject')}
                    </motion.a>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all backdrop-blur-sm"
                  >
                    <Github className="w-4 h-4" />
                    {t('projects.sourceCode')}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
