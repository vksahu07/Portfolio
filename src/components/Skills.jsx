import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Monitor, Server, Database, Cloud, Brain } from 'lucide-react';

const skillsData = [
  {
    category: 'Languages',
    icon: Code2,
    skills: ['JavaScript', 'Java'],
  },
  {
    category: 'Frontend',
    icon: Monitor,
    skills: [
      'React.js',
      'Zustand',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Axios',
      'React Router DOM',
      'Framer Motion',
    ],
  },
  {
    category: 'Backend',
    icon: Server,
    skills: [
      'Node.js',
      'Spring Boot',
      'Spring Data JPA',
      'RESTful API Design',
      'Socket.io',
      'JWT Authentication',
    ],
  },
  {
    category: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'Mongoose', 'PostgreSQL', 'SQL'],
  },
  {
    category: 'Tools & Cloud',
    icon: Cloud,
    skills: [
      'MongoDB Atlas',
      'Cloudinary',
      'Render.com',
      'Vercel',
      'Git',
      'GitHub',
      'Postman',
      'VS Code',
    ],
  },
  {
    category: 'Core Concepts',
    icon: Brain,
    skills: [
      'Object-Oriented Programming (OOP)',
      'Data Structures',
      'Agile Development',
      'Version Control',
    ],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="skills" className="py-24 bg-white dark:bg-[#030712] relative overflow-hidden transition-colors duration-300">
      {/* Background glow decorator */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100"
          >
            My <span className="text-teal-600 dark:text-teal-400">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-1 w-20 bg-teal-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((categoryData, idx) => {
            const Icon = categoryData.icon;
            return (
              <motion.div
                key={categoryData.category}
                variants={cardVariants}
                className="group relative"
              >
                {/* Background glow overlay */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />
                
                <div className="relative bg-white border border-slate-200/80 dark:bg-slate-900 dark:border-slate-800/80 p-6 rounded-xl shadow-sm dark:shadow-none hover:border-teal-400/50 dark:hover:border-teal-500/30 transition-all duration-300 h-full flex flex-col">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-5">
                    <div className="p-2.5 bg-teal-55 border border-teal-200 dark:bg-teal-950/40 dark:border-teal-500/20 text-teal-600 dark:text-teal-400 rounded-lg group-hover:bg-teal-500 group-hover:text-slate-950 dark:group-hover:text-slate-950 transition-colors duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 transition-colors">
                      {categoryData.category}
                    </h3>
                  </div>

                  {/* Skills Badges Wrapper */}
                  <div className="flex flex-wrap gap-2.5 mt-auto">
                    {categoryData.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-mono rounded-lg bg-slate-50 border border-slate-200 text-slate-700 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-300 hover:border-teal-500/60 hover:text-teal-600 dark:hover:border-teal-500/40 dark:hover:text-teal-400 hover:scale-105 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
