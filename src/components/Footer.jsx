import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaCode } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: FaGithub, href: 'https://github.com/johndoe', label: 'GitHub' },
    { Icon: FaLinkedin, href: 'https://linkedin.com/in/johndoe', label: 'LinkedIn' },
    { Icon: FaTwitter, href: 'https://twitter.com/johndoe', label: 'Twitter' },
  ];

  return (
    <footer className="w-full mt-16 py-10 bg-gradient-to-t from-gray-50 via-white to-gray-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-t border-gray-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">JohnDoe.dev</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Crafting pixel-perfect, high-performance web experiences.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col items-center md:items-start">
            <h4 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`/${item === 'Home' ? '' : item.toLowerCase().replace(' ', '')}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col items-center md:items-end">
            <h4 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3">Let’s Connect</h4>
            <div className="flex space-x-5">
              {socialLinks.map(({ Icon, href, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-200 dark:border-slate-700 pt-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-1">
            © {currentYear} <span className="font-medium text-gray-900 dark:text-white"><a href="https://portfolio-ljss.vercel.app/" target='_blank'>Udit Narayan Saxena</a></span>. All rights reserved.
            <span className="hidden md:inline mx-2">•</span>
            <span className="flex items-center gap-1">
              Built with <FaHeart className="text-red-500" /> and <FaCode className="text-indigo-600 dark:text-indigo-400" />
            </span>
          </motion.p>
          <p className="mt-2 md:mt-0 text-xs">Powered by React, Tailwind CSS & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;