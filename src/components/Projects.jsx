import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

const projects = [
  {
    title: 'Chatify',
    subtitle: 'Real-Time Chat Application',
    description: 'Engineered a production-deployed real-time chat application supporting live one-to-one messaging using Socket.io WebSockets, with online presence indicators and instant message delivery. Secured all API routes with JWT authentication and Bcryptjs password hashing, integrated Cloudinary for media uploads and Arcjet for rate limiting. Built a fully responsive UI with Tailwind CSS and DaisyUI using Zustand for state management.',
    tech: ['React.js', 'Zustand', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB'],
    live: 'https://chatify-ymg3.onrender.com',
    github: 'https://github.com/vksahu07/chatify',
    type: 'chat',
  },
  {
    title: 'SmartQueue',
    subtitle: 'Digital Token & Queue Management System',
    description: 'Built a role-based queue management system with dedicated Customer, Staff, and Admin dashboards, replacing physical token queues with online booking and live queue tracking. Designed a Spring Boot REST API for the full ticket lifecycle, automatically recalculating estimated wait times for all pending tickets whenever the queue advanced. Frontend built with React.js, Tailwind CSS, and Framer Motion, featuring live queue position tracking and QR-code based check-in.',
    tech: ['React.js', 'Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL'],
    live: 'https://smart-queue-theta-nine.vercel.app',
    github: 'https://github.com/vksahu07/SmartQueue',
    type: 'queue',
  },
  {
    title: 'ProShop',
    subtitle: 'Full-Stack eCommerce Platform',
    description: 'Built a full-featured eCommerce platform with product search and filtering, dynamic star ratings, cart management, PayPal payment integration, and a complete end-to-end checkout flow. Architected a role-based admin dashboard for product, user, and order management using Redux with Redux Thunk. Secured with JWT-based authentication and Bcryptjs password hashing, using MongoDB Atlas for cloud data persistence.',
    tech: ['React.js', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    live: 'https://proshop-1-d72k.onrender.com',
    github: 'https://github.com/vksahu07/proshop',
    type: 'shop',
  },
  {
    title: 'QuickStay',
    subtitle: 'Luxury Hotel & Room Booking Platform',
    description: 'Designed and built a complete hotel booking and property management system. Features secure user/owner authentication via Clerk, automated Mongoose schemas for hotels, rooms, and bookings, and a dynamic dashboard showcasing real-time booking analytics and revenue calculations. Leveraged Cloudinary for efficient property image hosting, Vercel for serverless deployment configurations, and Stripe APIs for secure booking transaction processing.',
    tech: ['React.js', 'Clerk Auth', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    live: 'https://hotel-booking-frontend-psi-bay.vercel.app/',
    github: 'https://github.com/vksahu07/hotel-booking',
    type: 'hotel',
  },
];

// Helper component for SVG Mockup Placeholders to give high-end look
function ProjectMockup({ type }) {
  if (type === 'chat') {
    return (
      <svg className="w-full h-full bg-slate-950/60 p-4" viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Chat window mockup */}
        <rect x="10" y="10" width="280" height="140" rx="8" fill="#0B0F19" stroke="#1E293B" strokeWidth="2" />
        <rect x="10" y="10" width="280" height="24" rx="8" fill="#1E293B" />
        <circle cx="25" cy="22" r="4" fill="#EF4444" />
        <circle cx="37" cy="22" r="4" fill="#F59E0B" />
        <circle cx="49" cy="22" r="4" fill="#10B981" />
        <text x="70" y="26" fill="#94A3B8" fontSize="10" fontFamily="monospace">Chatify App</text>
        
        {/* Messages */}
        <rect x="20" y="46" width="120" height="20" rx="6" fill="#1E293B" />
        <rect x="30" y="53" width="70" height="6" rx="3" fill="#64748B" />
        <circle cx="150" cy="56" r="3" fill="#10B981" /> {/* online indicator */}

        <rect x="140" y="76" width="140" height="24" rx="6" fill="#0D9488" />
        <rect x="150" y="83" width="110" height="6" rx="3" fill="#CCFBF1" />
        <rect x="150" y="91" width="60" height="4" rx="2" fill="#99F6E4" />

        <rect x="20" y="110" width="160" height="20" rx="6" fill="#1E293B" />
        <rect x="30" y="117" width="120" height="6" rx="3" fill="#64748B" />
      </svg>
    );
  }

  if (type === 'queue') {
    return (
      <svg className="w-full h-full bg-slate-950/60 p-4" viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Queue Dashboard Mockup */}
        <rect x="10" y="10" width="280" height="140" rx="8" fill="#0B0F19" stroke="#1E293B" strokeWidth="2" />
        <rect x="10" y="10" width="280" height="24" rx="8" fill="#1E293B" />
        <circle cx="25" cy="22" r="4" fill="#EF4444" />
        <circle cx="37" cy="22" r="4" fill="#F59E0B" />
        <circle cx="49" cy="22" r="4" fill="#10B981" />
        <text x="70" y="26" fill="#94A3B8" fontSize="10" fontFamily="monospace">SmartQueue Tracker</text>

        {/* Dashboard contents */}
        <rect x="20" y="44" width="70" height="40" rx="6" fill="#1E293B" />
        <text x="32" y="58" fill="#94A3B8" fontSize="8">Current Token</text>
        <text x="44" y="76" fill="#14B8A6" fontSize="16" fontWeight="bold">#42</text>

        <rect x="100" y="44" width="80" height="40" rx="6" fill="#1E293B" />
        <text x="110" y="58" fill="#94A3B8" fontSize="8">Estimated Wait</text>
        <text x="120" y="76" fill="#3B82F6" fontSize="14" fontWeight="bold">12 mins</text>

        <rect x="190" y="44" width="90" height="40" rx="6" fill="#1E293B" />
        <text x="202" y="58" fill="#94A3B8" fontSize="8">Your Position</text>
        <text x="234" y="76" fill="#10B981" fontSize="14" fontWeight="bold">4th</text>

        {/* QR Code element and mini button */}
        <rect x="20" y="96" width="260" height="42" rx="6" fill="#1E293B" />
        <rect x="30" y="104" width="26" height="26" rx="2" fill="#E2E8F0" /> {/* QR */}
        <rect x="34" y="108" width="6" height="6" fill="#0F172A" />
        <rect x="50" y="108" width="6" height="6" fill="#0F172A" />
        <rect x="34" y="120" width="6" height="6" fill="#0F172A" />
        
        <rect x="68" y="108" width="130" height="6" rx="3" fill="#64748B" />
        <rect x="68" y="118" width="80" height="4" rx="2" fill="#475569" />
        <rect x="210" y="104" width="60" height="26" rx="4" fill="#0D9488" />
        <rect x="222" y="115" width="36" height="4" rx="2" fill="#E2E8F0" />
      </svg>
    );
  }

  if (type === 'hotel') {
    return (
      <svg className="w-full h-full bg-slate-950/60 p-4" viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Hotel Booking Mockup */}
        <rect x="10" y="10" width="280" height="140" rx="8" fill="#0B0F19" stroke="#1E293B" strokeWidth="2" />
        <rect x="10" y="10" width="280" height="24" rx="8" fill="#1E293B" />
        <circle cx="25" cy="22" r="4" fill="#EF4444" />
        <circle cx="37" cy="22" r="4" fill="#F59E0B" />
        <circle cx="49" cy="22" r="4" fill="#10B981" />
        <text x="70" y="26" fill="#94A3B8" fontSize="10" fontFamily="monospace">QuickStay Booking</text>
        
        {/* Search header / hero */}
        <rect x="20" y="42" width="260" height="32" rx="4" fill="#1E293B" />
        <text x="30" y="54" fill="#E2E8F0" fontSize="8" fontWeight="bold">Find your perfect stay</text>
        <rect x="30" y="60" width="100" height="8" rx="2" fill="#0F172A" />
        <rect x="140" y="60" width="60" height="8" rx="2" fill="#0F172A" />
        <rect x="210" y="58" width="60" height="12" rx="3" fill="#0D9488" />
        <text x="224" y="66" fill="#CCFBF1" fontSize="6" fontWeight="bold">Search</text>

        {/* Featured Hotels */}
        <rect x="20" y="82" width="125" height="58" rx="4" fill="#1E293B" />
        <rect x="25" y="87" width="115" height="28" rx="2" fill="#0F172A" />
        <text x="25" y="123" fill="#E2E8F0" fontSize="7" fontWeight="bold">Urbanza Suites</text>
        <text x="25" y="132" fill="#10B981" fontSize="6">$399 / night</text>

        <rect x="155" y="82" width="125" height="58" rx="4" fill="#1E293B" />
        <rect x="160" y="87" width="115" height="28" rx="2" fill="#0F172A" />
        <text x="160" y="123" fill="#E2E8F0" fontSize="7" fontWeight="bold">Grand Hyatt</text>
        <text x="160" y="132" fill="#10B981" fontSize="6">$299 / night</text>
      </svg>
    );
  }

  // Shop
  return (
    <svg className="w-full h-full bg-slate-950/60 p-4" viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* eCommerce platform mockup */}
      <rect x="10" y="10" width="280" height="140" rx="8" fill="#0B0F19" stroke="#1E293B" strokeWidth="2" />
      <rect x="10" y="10" width="280" height="24" rx="8" fill="#1E293B" />
      <circle cx="25" cy="22" r="4" fill="#EF4444" />
      <circle cx="37" cy="22" r="4" fill="#F59E0B" />
      <circle cx="49" cy="22" r="4" fill="#10B981" />
      <text x="70" y="26" fill="#94A3B8" fontSize="10" fontFamily="monospace">ProShop Store</text>

      {/* Grid items */}
      <rect x="20" y="44" width="75" height="64" rx="4" fill="#1E293B" />
      <rect x="26" y="50" width="63" height="32" rx="2" fill="#0F172A" />
      <circle cx="57" cy="66" r="8" fill="#38BDF8" /> {/* Item representation */}
      <rect x="26" y="88" width="40" height="4" rx="2" fill="#64748B" />
      <rect x="26" y="96" width="24" height="4" rx="2" fill="#10B981" />

      <rect x="105" y="44" width="75" height="64" rx="4" fill="#1E293B" />
      <rect x="111" y="50" width="63" height="32" rx="2" fill="#0F172A" />
      <rect x="127" y="58" width="31" height="16" fill="#A855F7" /> {/* Item representation */}
      <rect x="111" y="88" width="50" height="4" rx="2" fill="#64748B" />
      <rect x="111" y="96" width="30" height="4" rx="2" fill="#10B981" />

      <rect x="190" y="44" width="90" height="64" rx="4" fill="#1E293B" />
      <rect x="196" y="50" width="78" height="32" rx="2" fill="#0F172A" />
      <polygon points="235,54 241,68 227,62" fill="#F59E0B" /> {/* Item representation */}
      <rect x="196" y="88" width="45" height="4" rx="2" fill="#64748B" />
      <rect x="196" y="96" width="20" height="4" rx="2" fill="#10B981" />

      {/* Cart Summary Header */}
      <rect x="20" y="118" width="260" height="20" rx="4" fill="#1E293B" />
      <rect x="30" y="125" width="100" height="6" rx="3" fill="#64748B" />
      <rect x="230" y="123" width="40" height="10" rx="3" fill="#0D9488" />
    </svg>
  );
}

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Background glow decorators */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

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
            My <span className="text-teal-600 dark:text-teal-400">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-1 w-20 bg-teal-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800/80 rounded-xl overflow-hidden flex flex-col h-full hover:border-teal-400/50 dark:hover:border-slate-700/80 neon-glow-teal-hover shadow-sm dark:shadow-none transition-all duration-300"
            >
              {/* Graphic Placeholder Mockup */}
              <div className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800/80 aspect-video select-none">
                <ProjectMockup type={project.type} />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-all duration-300" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                    {project.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-[10px] font-mono rounded bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800/60 text-slate-600 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800/40">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 transition-colors font-medium cursor-pointer"
                  >
                    <GithubIcon className="h-4 w-4" />
                    <span>Source Code</span>
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors font-semibold cursor-pointer"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
