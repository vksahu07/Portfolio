import React from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 dark:bg-slate-950 dark:border-slate-900 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left copyright */}
          <div className="text-center sm:text-left space-y-1">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              &copy; {currentYear} Vivek Sahu. All rights reserved.
            </p>
          </div>

          {/* Right social icons */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/vksahu07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-650 dark:text-slate-500 dark:hover:text-teal-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/vivek-sahu-15944a271/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-teal-650 dark:text-slate-500 dark:hover:text-teal-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:vksahu07939@gmail.com"
              className="text-slate-400 hover:text-teal-650 dark:text-slate-500 dark:hover:text-teal-400 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
