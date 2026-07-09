import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download, Send, Layout, Cpu, Database } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden grid-pattern bg-white dark:bg-[#030712] transition-colors duration-300"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-teal-50/60 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-500/30 rounded-full px-4 py-1.5 w-fit">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span className="font-mono text-xs font-medium text-teal-700 dark:text-teal-300 uppercase tracking-wider">
                Available for Roles
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-emerald-500 to-blue-500 dark:from-teal-400 dark:via-emerald-400 dark:to-blue-400">Vivek Sahu</span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300"
            >
              Full Stack Developer
              <span className="text-teal-600 dark:text-teal-400 font-mono text-sm block sm:inline sm:ml-2">
                (MERN Stack & Java Spring Boot)
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-650 dark:text-slate-400 max-w-xl leading-relaxed"
            >
              Full Stack Developer skilled in building and deploying production-ready applications across the MERN Stack and Java Spring Boot. Passionate about clean code, robust backend engineering, and responsive user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-slate-950 dark:text-slate-950 font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-teal-500/20 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="/Vivek_Sahu_Resume.pdf"
                download="Vivek_Sahu_Resume.pdf"
                className="inline-flex items-center space-x-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-slate-100 px-6 py-3 rounded-lg shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="inline-flex items-center space-x-2 bg-transparent border border-slate-300 dark:border-slate-700 hover:border-teal-500/50 hover:bg-teal-500/5 text-slate-600 dark:text-slate-300 hover:text-teal-650 dark:hover:text-teal-400 px-6 py-3 rounded-lg hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <Send className="h-4 w-4" />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center space-x-5 pt-4">
              <a
                href="https://github.com/vksahu07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors p-2 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900/60 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-lg"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/vivek-sahu-15944a271/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors p-2 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900/60 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-lg"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href="mailto:vksahu07939@gmail.com"
                className="text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors p-2 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900/60 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-lg"
                aria-label="Send Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Right Visual: Specialty Floating Cards */}
          <div className="lg:col-span-5 hidden lg:flex flex-col space-y-6 relative select-none">
            {/* Frontend Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
              transition={{
                x: { duration: 0.6, delay: 0.3 },
                y: { repeat: Infinity, duration: 5, ease: "easeInOut" }
              }}
              className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 p-5 rounded-xl shadow-sm dark:shadow-none neon-glow-teal self-start w-11/12 transition-colors duration-300"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-500/20 text-teal-600 dark:text-teal-400 rounded-lg">
                  <Layout className="h-4 w-4" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Frontend Specialist</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Building responsive, interactive UIs with React.js, Zustand, Tailwind CSS, and Framer Motion.
              </p>
            </motion.div>

            {/* Backend Card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
              transition={{
                x: { duration: 0.6, delay: 0.45 },
                y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
              }}
              className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 p-5 rounded-xl shadow-sm dark:shadow-none neon-glow-teal self-end w-11/12 relative z-10 transition-colors duration-300"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-500/20 text-teal-600 dark:text-teal-400 rounded-lg">
                  <Cpu className="h-4 w-4" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Backend Engineering</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Designing RESTful APIs and socket pipelines using Java Spring Boot and Node.js.
              </p>
            </motion.div>

            {/* Database & Cloud Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
              transition={{
                x: { duration: 0.6, delay: 0.6 },
                y: { repeat: Infinity, duration: 5.5, ease: "easeInOut" }
              }}
              className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 p-5 rounded-xl shadow-sm dark:shadow-none neon-glow-teal w-11/12 self-start transition-colors duration-300"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-500/20 text-teal-600 dark:text-teal-400 rounded-lg">
                  <Database className="h-4 w-4" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Databases & Cloud</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Managing reliable data layers using PostgreSQL and MongoDB, deployed on Vercel and Render.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
