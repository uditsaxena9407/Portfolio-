import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBriefcase, FaGraduationCap, FaTools, FaAward,
  FaLaptop, FaTrophy, FaUsers, FaBookOpen, FaCodeBranch,
} from 'react-icons/fa';
import { Section } from '../components/Section';

const timeline = [
  { year: '2024', title: 'Senior Frontend Engineer – TechCorp', desc: 'Led UI overhaul for 2M+ users.', icon: FaBriefcase },
  { year: '2022', title: 'Full-Stack Developer – StartupX', desc: 'Built MVP in 6 weeks using Next.js.', icon: FaBriefcase },
  { year: '2020', title: 'Frontend Intern – AgencyY', desc: 'Learned React & Tailwind fundamentals.', icon: FaBriefcase },
  { year: '2019', title: 'B.Sc. Computer Science – Stanford University', desc: 'Graduated with Honors, GPA: 3.9/4.0', icon: FaGraduationCap },
  { year: '2018', title: 'Hackathon Winner – TechCrunch Disrupt', desc: '1st Place: AI-Powered Resume Parser', icon: FaTrophy },
  { year: '2017', title: 'President – ACM Student Chapter', desc: 'Organized 12 tech workshops & 3 hackathons', icon: FaUsers },
];

const skills = [
  'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion',
  'Redux Toolkit', 'Zustand', 'Node.js', 'Express', 'MongoDB',
  'GraphQL', 'REST APIs', 'Git', 'CI/CD', 'Jest', 'Cypress',
  'Figma', 'Vercel', 'Docker', 'AWS', 'PostgreSQL',
];

const education = {
  degree: 'Bachelor of Science in Computer Science',
  institution: 'Stanford University',
  location: 'Stanford, CA',
  duration: '2015 – 2019',
  gpa: '3.9 / 4.0',
  honors: 'Summa Cum Laude',
  relevantCourses: [
    'Advanced Algorithms', 'Human-Computer Interaction', 'Web Development',
    'Machine Learning', 'Distributed Systems', 'Software Engineering',
  ],
};

const achievements = [
  { icon: FaTrophy, title: '1st Place – TechCrunch Disrupt Hackathon', desc: 'Built AI resume parser in 24 hours.' },
  { icon: FaLaptop, title: 'Google Summer of Code 2018', desc: 'Contributed to React Native core.' },
  { icon: FaCodeBranch, title: 'Open Source Contributor', desc: '120+ PRs merged across 15+ repositories.' },
  { icon: FaBookOpen, title: 'Published Research Paper', desc: 'UI Performance Optimization in SPAs – IEEE 2019.' },
];

const SkillPill = ({ children, delay = 0 }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay }}
    className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium shadow-sm hover:bg-indigo-200 dark:hover:bg-indigo-800 transition"
  >
    {children}
  </motion.span>
);

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-indigo-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Section className="px-4 sm:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-12"
        >
          About <span className="text-indigo-600 dark:text-indigo-400">John Doe</span>
        </motion.h1>

        {/* HERO BIO */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.img
            src="https://via.placeholder.com/500/6366F1/FFFFFF?text=John"
            alt="John Doe – Senior Frontend Engineer"
            className="rounded-2xl shadow-2xl w-full object-cover"
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 flex items-center">
              <FaBriefcase className="mr-2" /> My Journey
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I’m a <strong>Senior Frontend Engineer</strong> with <strong>5+ years</strong> of experience
              building scalable, accessible, and high-performance web applications. I specialize in
              transforming complex Figma designs into pixel-perfect, production-ready code using
              modern React ecosystems.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I thrive on mentoring junior developers, contributing to open-source, and pushing the
              boundaries of web performance and UX. Outside coding, I enjoy hiking, reading sci-fi,
              and experimenting with cutting-edge animation libraries like Framer Motion.
            </p>
          </motion.div>
        </div>

        {/* EDUCATION & ACHIEVEMENTS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 md:p-12 rounded-2xl shadow-xl mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
            <FaGraduationCap className="mr-3" /> Education & Academic Excellence
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">{education.degree}</h3>
              <p className="text-lg opacity-90">{education.institution}</p>
              <p className="text-sm opacity-80">{education.location} • {education.duration}</p>
              <p className="mt-3">
                <strong>GPA:</strong> {education.gpa} • <strong>{education.honors}</strong>
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Key Courses</h4>
              <ul className="space-y-1 text-sm opacity-90">
                {education.relevantCourses.map((c, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full mr-2"></span> {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-5 rounded-xl flex items-start"
              >
                <a.icon className="text-yellow-300 text-xl mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">{a.title}</h4>
                  <p className="text-sm opacity-90">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CAREER TIMELINE */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-8 flex items-center">
            <FaGraduationCap className="mr-2" /> Professional & Academic Timeline
          </h2>
          <div className="space-y-6 relative">
            <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-indigo-200 dark:bg-indigo-700 hidden md:block"></div>

            {timeline.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex items-start relative"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full flex items-center justify-center z-10 shadow-lg">
                  <e.icon className="text-lg" />
                </div>

                <div className="ml-6 bg-white dark:bg-slate-800 p-5 rounded-xl shadow-md flex-1 border-l-4 border-indigo-500 dark:border-indigo-400">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-gray-900 dark:text-white">{e.title}</h4>
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium text-sm">{e.year}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{e.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SKILLS */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl mb-12">
          <h2 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-6 flex items-center">
            <FaTools className="mr-2" /> Core Skills & Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <SkillPill key={s} delay={i * 0.03}>{s}</SkillPill>
            ))}
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/50 dark:to-cyan-900/50 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-teal-800 dark:text-teal-300 mb-6 flex items-center">
            <FaAward className="mr-2" /> Professional Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Meta Front-End Developer', issuer: 'Coursera', year: '2023' },
              { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', year: '2022' },
              { name: 'Google UX Design Professional Certificate', issuer: 'Coursera', year: '2021' },
              { name: 'Scrimba React Bootcamp Graduate', issuer: 'Scrimba', year: '2020' },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-md flex items-center justify-between"
              >
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{c.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{c.issuer}</p>
                </div>
                <span className="text-xs font-medium text-teal-600 dark:text-teal-400 bg-teal-100 dark:bg-teal-800 px-3 py-1 rounded-full">
                  {c.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;