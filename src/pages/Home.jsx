import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaReact, FaBolt, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter, FaStar, FaArrowRight, FaCalendarAlt, FaBriefcase } from 'react-icons/fa';
import { Section } from '../components/Section';

const stats = [
  { label: 'Years of Experience', value: '5+' },
  { label: 'Projects Delivered', value: '40+' },
  { label: 'Happy Clients', value: '30+' },
  { label: 'Open-Source Contribs', value: '120+' },
];

const featuredProjects = [
  { title: 'E-Commerce Platform', desc: 'Next.js + Stripe + Tailwind marketplace with admin dashboard.', img: 'https://via.placeholder.com/600x400/10B981/FFFFFF?text=E-Commerce', link: '/projects', tech: ['Next.js', 'Tailwind', 'Stripe'] },
  { title: 'Real-Time Collab Tool', desc: 'Google-Docs-like editor using Socket.io & React.', img: 'https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Collab', link: '/projects', tech: ['React', 'Socket.io', 'Node'] },
  { title: 'Analytics Dashboard', desc: 'Interactive charts with D3 & Recharts, SSR.', img: 'https://via.placeholder.com/600x400/EF4444/FFFFFF?text=Dashboard', link: '/projects', tech: ['React', 'Recharts', 'Express'] },
];

const timeline = [
  { year: '2024', title: 'Senior Frontend Engineer – TechCorp', icon: FaBriefcase },
  { year: '2022', title: 'Full-Stack Developer – StartupX', icon: FaBriefcase },
  { year: '2020', title: 'Frontend Intern – AgencyY', icon: FaBriefcase },
  { year: '2019', title: 'B.Sc. Computer Science', icon: FaCalendarAlt },
];

const Home = () => {
  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const item = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <motion.div variants={container} initial="hidden" animate="visible" className="min-h-[calc(100vh-64px)]">
      <Section className="px-4 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-8 md:p-16 border-t-8 border-indigo-600 dark:border-indigo-500">
          <motion.div initial={{ scale: 0.85 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex justify-center">
            <img src="https://via.placeholder.com/400/4F46E5/FFFFFF?text=John+Doe" alt="John Doe" className="w-72 h-72 object-cover rounded-full border-8 border-indigo-500 shadow-2xl" />
          </motion.div>
          <motion.div variants={item} className="text-center md:text-left">
            <p className="text-xl text-indigo-600 dark:text-indigo-400 font-semibold">Hello, I’m</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mt-2">John Doe</h1>
            <h2 className="mt-3 text-2xl md:text-3xl text-gray-700 dark:text-gray-300">
              Senior <span className="text-indigo-600 dark:text-indigo-400">Frontend Engineer</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              I craft pixel-perfect, blazing-fast web applications with React, Next.js, Tailwind CSS, and modern tooling.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/projects" className="inline-flex items-center px-8 py-3 rounded-full bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transform hover:scale-105 transition">
                View Projects <FaLaptopCode className="ml-2" />
              </Link>
              <Link to="/contact" className="inline-flex items-center px-8 py-3 rounded-full border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-800 font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transform hover:scale-105 transition">
                Hire Me <FaPaperPlane className="ml-2" />
              </Link>
            </div>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"><FaGithub size={28} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"><FaLinkedin size={28} /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"><FaTwitter size={28} /></a>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-indigo-50 dark:bg-slate-800 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div key={i} variants={item} className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md">
              <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">{s.value}</p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="px-4 sm:px-8">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">Core Expertise</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { Icon: FaReact, title: 'React Ecosystem', color: 'teal' },
            { Icon: FaCode, title: 'Modern CSS & Tailwind', color: 'pink' },
            { Icon: FaBolt, title: 'Performance & UX', color: 'yellow' },
          ].map((c, i) => (
            <motion.div key={i} variants={item} className={`p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition border-b-4 border-${c.color}-400 dark:border-${c.color}-500`}>
              <c.Icon className={`w-12 h-12 text-${c.color}-500 dark:text-${c.color}-400 mx-auto mb-4`} />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{c.title}</h4>
              <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                {i === 0 && 'Hooks, Context, Redux Toolkit, Server Components, Suspense.'}
                {i === 1 && 'Utility-first styling, dark mode, responsive breakpoints, custom plugins.'}
                {i === 2 && 'Code-splitting, lazy loading, memoization, Framer Motion, Lighthouse 100.'}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-gray-50 dark:bg-slate-800 py-16">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Featured Projects</h3>
          <Link to="/projects" className="hidden md:flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium">
            View All <FaArrowRight className="ml-2" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((p, i) => (
            <motion.article key={i} variants={item} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{p.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map(t => (
                    <span key={t} className="px-3 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full">{t}</span>
                  ))}
                </div>
                <Link to={p.link} className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium flex items-center">
                  See Details <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link to="/projects" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium">
            View All Projects <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </Section>

      <Section className="bg-white dark:bg-slate-900 py-16">
        <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">A Quick Look at My Journey</h3>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div variants={item} className="space-y-4">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I’m a Senior Frontend Engineer with a passion for building scalable, accessible, and lightning-fast web experiences.
            </p>
            <Link to="/about" className="inline-flex items-center mt-6 px-6 py-2 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition">
              Full Story <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
          <motion.div variants={item} className="space-y-4">
            {timeline.map((t, i) => (
              <div key={i} className="flex items-start">
                <t.icon className="text-indigo-600 dark:text-indigo-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{t.title}</p>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400">{t.year}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section className="bg-gray-100 dark:bg-slate-800 py-16">
        <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">What Clients Say</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { name: 'Sarah L.', role: 'Product Manager', text: 'Delivered a complex dashboard 2 weeks early – flawless!' },
            { name: 'Mike R.', role: 'CTO, Startup', text: 'John’s code is clean, fast, and a pleasure to maintain.' },
          ].map((t, i) => (
            <motion.div key={i} variants={item} className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md flex items-start">
              <FaStar className="text-yellow-500 dark:text-yellow-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="italic text-gray-700 dark:text-gray-300">“{t.text}”</p>
                <p className="mt-2 text-sm font-medium text-indigo-600 dark:text-indigo-400">{t.name} – {t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </motion.div>
  );
};

export default Home;