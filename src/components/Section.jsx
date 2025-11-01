import React, { Children, cloneElement } from 'react';
import { motion } from 'framer-motion';

export const Section = ({
  children,
  className = '',
  variant = 'fade',
  delay = 0,
  duration = 0.6,
  once = true,
  margin = '-100px',
  staggerChildren = false,
  loading = false,
  containerClass = '',
  ...rest
}) => {
  const variants = {
    fade: { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } },
    slide: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
    scale: { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 } },
  };

  const transition = { duration, delay, ease: [0.22, 1, 0.36, 1] };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const staggerChildrenContent = () => {
    return Children.map(children, (child, index) => {
      if (!React.isValidElement(child)) return child;
      return cloneElement(child, {
        initial: "hidden",
        animate: "visible",
        variants: { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
        transition: { duration: 0.4, delay: index * 0.1 },
      });
    });
  };

  const sectionClasses = `max-w-7xl mx-auto py-12 lg:py-20 px-4 sm:px-8 bg-white dark:bg-slate-800 ${containerClass} ${className}`;

  if (loading) {
    return (
      <section className={sectionClasses} {...rest}>
        <div className="flex items-center justify-center py-20">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full" />
        </div>
      </section>
    );
  }

  return (
    <motion.section
      variants={staggerChildren ? containerVariants : variants[variant]}
      initial={staggerChildren ? "hidden" : "initial"}
      whileInView={staggerChildren ? "visible" : "animate"}
      viewport={{ once, margin }}
      transition={staggerChildren ? {} : transition}
      className={sectionClasses}
      {...rest}
    >
      {staggerChildren ? staggerChildrenContent() : children}
    </motion.section>
  );
};