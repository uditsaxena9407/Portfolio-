import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub, FaExternalLinkAlt, FaReact, FaNode, FaDatabase,
  FaFilter, FaTimes, FaChartLine, FaUsers, FaClock, FaStar,
} from 'react-icons/fa';
import { Section } from '../components/Section';

const categories = ['All', 'Full-Stack', 'Frontend', 'AI', 'PWA'];

const projects = [
  {
    id: 1, title: 'E-Commerce Platform', desc: 'Full-stack marketplace with Stripe, admin panel, and real-time inventory.',
    tech: ['Next.js', 'Tailwind', 'Stripe', 'Prisma', 'PostgreSQL'], live: 'https://example.com', repo: 'https://github.com',
    img: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Full-Stack', metrics: { users: '50K+', revenue: '$2.1M', perf: '98' },
    challenges: 'Scalable search, concurrent cart updates, payment retry logic.',
    outcome: 'Increased conversion rate by 34% with optimized checkout flow.',
  },
  // ... (other projects remain the same)
];

const ProjectCard = ({ p, index, onOpen }) => (
  <motion.article
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
    onClick={() => onOpen(p)}
  >
    <div className="relative h-48 overflow-hidden">
      <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-xs font-medium bg-indigo-600 px-2 py-1 rounded">Click to view details</p>
      </div>
    </div>

    <div className="p-5">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{p.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">{p.desc}</p>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {p.tech.slice(0, 3).map(t => (
          <span key={t} className="px-2 py-0.5 text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full">
            {t}
          </span>
        ))}
        {p.tech.length > 3 && <span className="text-xs text-gray-500 dark:text-gray-400">+{p.tech.length - 3}</span>}
      </div>

      <div className="flex items-center gap-4 text-sm">
        <a href={p.live} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium">
          <FaExternalLinkAlt className="mr-1" /> Live
        </a>
        <a href={p.repo} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium">
          <FaGithub className="mr-1" /> Code
        </a>
      </div>
    </div>
  </motion.article>
);

const ProjectModal = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 20 }}
      className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      onClick={e => e.stopPropagation()}
    >
      <div className="sticky top-0 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 p-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-full transition">
          <FaTimes className="text-gray-600 dark:text-gray-400" />
        </button>
      </div>

      <div className="p-6 space-y-6">
        <img src={project.img} alt={project.title} className="w-full h-64 object-cover rounded-xl" />

        <div>
          <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400 mb-2">Overview</h3>
          <p className="text-gray-700 dark:text-gray-300">{project.desc}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400 mb-2">Key Metrics</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-indigo-50 dark:bg-indigo-900/50 p-4 rounded-lg text-center">
              <FaUsers className="text-indigo-600 dark:text-indigo-400 mx-auto mb-1" />
              <p className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">{project.metrics.users}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Users</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/50 p-4 rounded-lg text-center">
              <FaChartLine className="text-green-600 dark:text-green-400 mx-auto mb-1" />
              <p className="text-2xl font-bold text-green-700 dark:text-green-300">{project.metrics.revenue || project.metrics.savings}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Impact</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/50 p-4 rounded-lg text-center">
              <FaStar className="text-yellow-600 dark:text-yellow-400 mx-auto mb-1" />
              <p className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">{project.metrics.perf}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Lighthouse</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400 mb-2">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span key={t} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400 mb-2">Challenges & Solutions</h3>
          <p className="text-gray-700 dark:text-gray-300">{project.challenges}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400 mb-2">Outcome</h3>
          <p className="text-gray-700 dark:text-gray-300 font-medium text-green-700 dark:text-green-400">{project.outcome}</p>
        </div>

        <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-slate-700">
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center gap-2 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition">
            <FaExternalLinkAlt /> View Live Demo
          </a>
          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center gap-2 py-3 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition">
            <FaGithub /> Source Code
          </a>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filteredProjects = useMemo(() => {
    return filter === 'All' ? projects : projects.filter(p => p.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-indigo-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Section className="px-4 sm:px-8">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
            Featured <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real-world applications built with modern tech stacks, shipped to production, and loved by users.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition ${
                filter === cat
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-slate-600 hover:border-indigo-400 dark:hover:border-indigo-500'
              }`}
            >
              <FaFilter className="inline mr-1" /> {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, i) => (
              <ProjectCard key={p.id} p={p} index={i} onOpen={setSelected} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">Want to explore the full codebase or collaborate?</p>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition">
            <FaGithub /> Visit GitHub Profile
          </a>
        </div>
      </Section>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
};

export default Projects;