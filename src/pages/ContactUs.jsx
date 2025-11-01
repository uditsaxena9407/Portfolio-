import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaLinkedin, FaGithub, FaWhatsapp, FaCalendarAlt, FaCopy,
  FaCheck, FaExclamationCircle, FaSpinner, FaChevronDown,
} from 'react-icons/fa';
import { Section } from '../components/Section';

const ContactUs = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [copied, setCopied] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: "What's the best way to reach you?", a: "Email or LinkedIn – I reply within 24 hours. Use the form for project inquiries." },
    { q: 'Do you offer freelance services?', a: 'Yes! I’m open to short-term contracts, consulting, and full-time remote roles.' },
    { q: 'Can I schedule a quick call?', a: 'Absolutely! Use the Calendly link below to book a 15–30 min intro call.' },
    { q: 'What’s your timezone?', a: 'Pacific Time (PT) – UTC-8 / UTC-7 (DST).' },
  ];

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    try {
      // await emailjs.sendForm(...);
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus(''), 4000);
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus(''), 4000);
    }
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(''), 2000);
  };

  const Input = ({ label, name, type = 'text', icon: Icon, required = true }) => (
    <div className="relative">
      {Icon && <Icon className="absolute left-3 top-4 text-gray-400 dark:text-gray-500" />}
      <input
        type={type}
        name={name}
        placeholder={label}
        value={form[name]}
        onChange={handleChange}
        required={required}
        className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition text-sm bg-white dark:bg-slate-800 text-gray-900 dark:text-white border-gray-300 dark:border-slate-600 ${errors[name] ? 'border-red-500' : ''}`}
      />
      {errors[name] && (
        <p className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center">
          <FaExclamationCircle className="mr-1" /> {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12">
      <Section className="px-4 sm:px-8">
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
            Let’s <span className="text-indigo-600 dark:text-indigo-400">Build Together</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? Need a technical co-founder? Or just want to chat tech? I’m all ears — and I reply fast.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-2xl flex flex-col">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
              <Input label="Full Name" name="name" icon={FaUser} />
              <Input label="Email Address" name="email" type="email" icon={FaEnvelope} />
              <Input label="Phone (optional)" name="phone" type="tel" icon={FaPhone} required={false} />

              <div className="flex-1">
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell me about your project, timeline, budget, or just say hi!"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition text-sm resize-none h-full bg-white dark:bg-slate-800 text-gray-900 dark:text-white border-gray-300 dark:border-slate-600 ${errors.message ? 'border-red-500' : ''}`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-600 dark:text-red-400 flex items-center">
                    <FaExclamationCircle className="mr-1" /> {errors.message}
                  </p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex justify-center items-center py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition disabled:opacity-70 text-sm"
              >
                {status === 'sending' ? (
                  <> <FaSpinner className="animate-spin mr-2" /> Sending...</>
                ) : (
                  <> <FaPaperPlane className="mr-2" /> Send Message</>
                )}
              </motion.button>
            </form>

            <div className="mt-4 h-6">
              <AnimatePresence>
                {status === 'success' && (
                  <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-center text-green-600 dark:text-green-400 font-medium text-sm flex items-center justify-center">
                    <FaCheck className="mr-1" /> Message sent! I’ll reply within 24 hours.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-center text-red-600 dark:text-red-400 font-medium text-sm">
                    Oops! Try again or email me directly.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400 mb-3">Reach Me Directly</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaEnvelope className="mr-2 text-indigo-600 dark:text-indigo-400" /> john.doe@example.com
                  </div>
                  <button onClick={() => copyToClipboard('john.doe@example.com', 'email')} className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center">
                    {copied === 'email' ? <FaCheck /> : <FaCopy />} {copied === 'email' ? 'Copied!' : 'Copy'}
                  </button>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaPhone className="mr-2 text-indigo-600 dark:text-indigo-400" /> +1 (555) 123-4567
                  </div>
                  <button onClick={() => copyToClipboard('+15551234567', 'phone')} className="text-xs text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center">
                    {copied === 'phone' ? <FaCheck /> : <FaCopy />} {copied === 'phone' ? 'Copied!' : 'Copy'}
                  </button>
                </li>
                <li className="flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-indigo-600 dark:text-indigo-400" /> San Francisco, CA
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a href="https://calendly.com/your-link" target="_blank" rel="noreferrer" className="flex flex-col items-center p-4 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl shadow-md hover:shadow-lg transition text-sm">
                <FaCalendarAlt size={24} />
                <span className="mt-1 font-medium">Book a Call</span>
              </a>
              <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="flex flex-col items-center p-4 bg-gradient-to-br from-green-500 to-teal-600 text-white rounded-xl shadow-md hover:shadow-lg transition text-sm">
                <FaWhatsapp size={24} />
                <span className="mt-1 font-medium">WhatsApp</span>
              </a>
            </div>

            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-lg text-center">
              <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400 mb-3">Connect Online</h3>
              <div className="flex gap-5 justify-center">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transform hover:scale-110 transition">
                  <FaLinkedin size={32} />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white transform hover:scale-110 transition">
                  <FaGithub size={32} />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-5 rounded-xl text-white text-sm">
              <h3 className="text-lg font-semibold mb-2">Availability</h3>
              <p className="mb-1">Open for:</p>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li>Full-time remote roles</li>
                <li>Freelance projects (10+ hrs/week)</li>
                <li>Technical consulting & code reviews</li>
              </ul>
              <p className="mt-2 text-xs">Response time: <strong>less than 24 hours</strong></p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-400 mb-3">Quick FAQs</h3>
              <div className="space-y-2 text-sm">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-gray-200 dark:border-slate-700 pb-2">
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left flex justify-between items-center text-gray-800 dark:text-white font-medium text-xs">
                      {faq.q}
                      <FaChevronDown className={`text-xs transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                          {faq.a}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg overflow-hidden">
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.507640204299!3d37.757814996609724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a4d654d2e5ce4!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1698000000000"
                width="100%" height="160" style={{ border: 0 }} allowFullScreen="" loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default ContactUs;