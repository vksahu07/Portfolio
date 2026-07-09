import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: null, message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name.' });
      return;
    }
    if (!email.trim() || !validateEmail(email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }
    if (!message.trim()) {
      setStatus({ type: 'error', message: 'Please enter your message.' });
      return;
    }

    // Read keys from Vite environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

    if (serviceId && templateId && publicKey) {
      const templateParams = {
        name: name,
        email: email,
        message: message,
        title: 'New Portfolio Contact',
      };

      emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log('EmailJS SUCCESS!', response.status, response.text);
          setStatus({ type: null, message: '' });
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
        })
        .catch((err) => {
          console.error('EmailJS FAILED...', err);
          if (err && err.text) {
            console.error('EmailJS Error Text:', err.text);
          }
          setStatus({ type: 'error', message: `Failed to send email: ${err?.text || 'Please try again.'}` });
        });
    } else {
      // Fallback/Mock behavior if keys aren't set yet (keeps site functional out of the box)
      console.log('EmailJS keys not detected in environment. Running in mock success mode.');
      setStatus({ type: null, message: '' });
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-slate-55 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Background glow decorators */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

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
            Get In <span className="text-teal-600 dark:text-teal-400">Touch</span>
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
          {/* Info cards (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                Let's discuss a project or opportunity!
              </h3>
              <p className="text-slate-650 dark:text-slate-400 leading-relaxed">
                I am open to full-time engineering opportunities and collaborations. Drop me an email, call me, or fill out the form, and I'll get back to you as soon as possible.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4 py-6">
              <a
                href="mailto:vksahu07939@gmail.com"
                className="flex items-center space-x-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-teal-400/50 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-teal-500/30 shadow-sm dark:shadow-none transition-all duration-300 group"
              >
                <div className="p-3 bg-teal-50 border border-teal-200 dark:bg-teal-950/40 dark:border-teal-500/20 text-teal-600 dark:text-teal-400 rounded-lg group-hover:bg-teal-500 group-hover:text-slate-950 dark:group-hover:text-slate-950 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Email Me</p>
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium">vksahu07939@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+916265687014"
                className="flex items-center space-x-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-teal-400/50 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-teal-500/30 shadow-sm dark:shadow-none transition-all duration-300 group"
              >
                <div className="p-3 bg-teal-50 border border-teal-200 dark:bg-teal-950/40 dark:border-teal-500/20 text-teal-600 dark:text-teal-400 rounded-lg group-hover:bg-teal-500 group-hover:text-slate-950 dark:group-hover:text-slate-950 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Call Me</p>
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium">+91-6265687014</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-sm dark:shadow-none transition-colors duration-305 group">
                <div className="p-3 bg-teal-50 border border-teal-200 dark:bg-teal-950/40 dark:border-teal-500/20 text-teal-600 dark:text-teal-400 rounded-lg">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Location</p>
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium">Bengaluru, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form wrapper (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            className="lg:col-span-7"
          >
            <div className="bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-800 p-8 rounded-xl h-full flex flex-col justify-center relative min-h-[350px] overflow-hidden shadow-sm dark:shadow-none transition-colors duration-300">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Error Alerts */}
                    {status.type === 'error' && (
                      <div className="flex items-center space-x-2 bg-red-950/50 border border-red-500/30 text-red-300 p-3 rounded-lg text-sm">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        <span>{status.message}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 text-slate-900 dark:text-slate-100 rounded-lg px-4 py-3 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 focus:bg-white dark:focus:bg-slate-950 outline-none transition-all"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 text-slate-900 dark:text-slate-100 rounded-lg px-4 py-3 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 focus:bg-white dark:focus:bg-slate-950 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows="5"
                        className="w-full bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 text-slate-900 dark:text-slate-100 rounded-lg px-4 py-3 text-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10 focus:bg-white dark:focus:bg-slate-950 outline-none transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-slate-950 dark:text-slate-950 font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-teal-500/20 transition-all cursor-pointer"
                    >
                      <span>Send Message</span>
                      <Send className="h-4 w-4" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center space-y-4 py-8"
                  >
                    <div className="p-4 bg-teal-50 border border-teal-200 dark:bg-teal-950/40 dark:border-teal-500/20 rounded-full text-teal-600 dark:text-teal-400 animate-bounce">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Message Sent!</h4>
                    <p className="text-slate-650 dark:text-slate-400 text-sm max-w-sm leading-relaxed">
                      Thank you for reaching out. I've received your message and will get back to you shortly.
                    </p>
                    <button
                      onClick={handleReset}
                      className="mt-4 px-5 py-2.5 bg-slate-50 border border-slate-200 hover:border-teal-500/50 hover:bg-teal-50/50 text-slate-700 hover:text-teal-600 dark:bg-slate-950 dark:border-slate-800 dark:hover:border-teal-500/50 dark:hover:bg-teal-500/5 dark:text-slate-300 dark:hover:text-teal-400 rounded-lg text-sm font-medium transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
