import React from 'react';
import { motion } from 'motion/react';

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const CTAButton = ({ children, className = "" }: CTAButtonProps) => {
  return (
    <a 
      href="https://pay.hub.la/cHnbwQR4X5jlOhhjv544"
      target="_blank"
      rel="noopener noreferrer"
      className={`block w-full`}
    >
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`cursor-pointer bg-gold-gradient text-black font-display font-bold text-lg md:text-xl py-4 md:py-5 px-8 rounded-full shadow-[0_10px_30px_rgba(201,168,76,0.3)] hover:shadow-[0_20px_40px_rgba(201,168,76,0.4)] transition-all duration-300 ${className}`}
      >
        {children}
      </motion.button>
    </a>
  );
};

export const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};