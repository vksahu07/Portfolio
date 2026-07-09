import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen, Award } from 'lucide-react';

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration elements */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-teal-500/5 rounded-full blur-[80px] pointer-events-none" />

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
            About <span className="text-teal-600 dark:text-teal-400">Me</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-1 w-20 bg-teal-500 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                A Developer who loves bringing ideas to life.
              </h3>
              <p className="text-slate-650 dark:text-slate-400 leading-relaxed">
                I'm a Full Stack Developer who enjoys taking a feature from idea to a fully deployed, working product. 
                I've built and deployed real applications across both the MERN Stack and Java Spring Boot, with a focus on clean code, RESTful API design, and solving real backend logic problems.
              </p>
              <p className="text-slate-650 dark:text-slate-400 leading-relaxed">
                My workflow is focused on building robust and scalable backends coupled with smooth, user-centric frontends. I'm highly interested in performance optimization, caching, and setting up reliable APIs.
              </p>
            </div>

            {/* Quick Details List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-200 dark:border-slate-900">
              <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                <MapPin className="h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0" />
                <span className="text-sm">Bengaluru, India (Open to Relocate)</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                <Calendar className="h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0" />
                <span className="text-sm">B.Tech CS Graduate (2025)</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                <BookOpen className="h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0" />
                <span className="text-sm">MERN Stack & Java Spring Boot</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-700 dark:text-slate-300">
                <Award className="h-5 w-5 text-teal-600 dark:text-teal-400 shrink-0" />
                <span className="text-sm">KodNest Full Stack Certified</span>
              </div>
            </div>
          </motion.div>

          {/* Education Column */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="relative group h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
              <div className="relative h-full bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800/80 p-8 rounded-xl flex flex-col justify-between shadow-sm dark:shadow-none neon-glow-teal transition-all duration-300">
                
                {/* Cap and Education Header */}
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full">
                      Education
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 pt-2">
                      Bachelor of Technology
                    </h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-semibold">
                      Computer Science and Engineering
                    </p>
                  </div>
                  <div className="p-3 bg-teal-55 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-500/30 rounded-lg text-teal-600 dark:text-teal-400">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                </div>

                {/* College Info & Graduation Year */}
                <div className="mt-8 space-y-4">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                      Institution
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 text-sm font-medium">
                      Rungta College of Engineering and Technology (RCET)
                    </p>
                    <p className="text-slate-550 dark:text-slate-400 text-xs mt-0.5">
                      Bhilai, Chhattisgarh
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                        Graduation
                      </p>
                      <p className="text-slate-700 dark:text-slate-300 text-sm font-medium">2025</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                        Performance
                      </p>
                      <p className="text-teal-600 dark:text-teal-400 text-sm font-bold">7.3 / 10 CGPA</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
