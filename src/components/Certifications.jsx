import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-white dark:bg-[#030712] relative overflow-hidden transition-colors duration-300">
      {/* Background glow decorators */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-[90px] pointer-events-none" />

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
            Certifications
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-1 w-20 bg-teal-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Certificate Card container */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className="relative group"
          >
            {/* Outer gradient border glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl blur opacity-15 group-hover:opacity-25 transition duration-300" />
            
            {/* The Inner Card Content */}
            <div className="relative bg-white border border-slate-200 p-8 sm:p-10 rounded-2xl flex flex-col md:flex-row gap-8 items-start md:items-center justify-between shadow-sm dark:shadow-none dark:bg-slate-900 dark:border-slate-800 neon-glow-teal transition-all duration-300">
              
              {/* Left Side: Logo & Info */}
              <div className="flex gap-6 items-start">
                <div className="p-4 bg-teal-50 border border-teal-200 dark:bg-teal-950/40 dark:border-teal-500/20 rounded-xl text-teal-600 dark:text-teal-400 shrink-0 select-none">
                  <Award className="h-10 w-10" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <ShieldCheck className="h-3 w-3" />
                      Verified
                    </span>
                    <span className="text-xs text-slate-500">Issued: June 2026</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    Full Stack Development Certification
                  </h3>
                  
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    KodNest, Bengaluru
                  </p>
                  
                  <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed max-w-lg">
                    Six-month intensive training program covering Java programming, Python scripting, competitive programming strategies, modern web development pipelines, SQL database design, and testing methodologies.
                  </p>

                  {/* Skills tags covered in certification */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {['Java', 'Python', 'Web Dev', 'SQL', 'Testing', 'Competitive Coding'].map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: Verification Action */}
              <div className="w-full md:w-auto shrink-0 pt-4 md:pt-0 border-t border-slate-150 dark:border-slate-800/40 md:border-t-0 flex justify-end">
                <a
                  href="https://app.kodnest.com/certificate/7346964a-0a71-4c13-9fbb-f1553df942e6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-200 hover:border-teal-500/50 hover:bg-teal-50/50 text-slate-700 hover:text-teal-600 dark:bg-slate-950 dark:border-slate-800 dark:hover:border-teal-500/50 dark:hover:bg-teal-500/5 dark:text-slate-300 dark:hover:text-teal-400 font-medium px-5 py-3 rounded-xl transition-all w-full md:w-auto justify-center cursor-pointer"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
