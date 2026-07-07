"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  withIcon?: boolean;
  pulsing?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  fullWidth = false,
  withIcon = false,
  pulsing = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 transform rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-black";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-gold to-brand-goldLight text-brand-black hover:brightness-110 hover:-translate-y-1 shadow-[0_0_20px_rgba(201,166,97,0.3)]",
    secondary: "bg-white text-brand-black hover:bg-gray-100",
    outline: "border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black",
  };

  const widthClass = fullWidth ? "w-full py-4 text-lg" : "px-8 py-3 text-base";
  const pulseClass = pulsing ? "animate-pulse" : "";

  // Lógica de URL dinâmica
  const getHref = () => {
    const linkBase = 'https://pay.hub.la/f7SDENK72hgJX7N0pRzQ'; 
    const searchParams = typeof window !== 'undefined' ? window.location.search : ''; 
    
    if (!searchParams) return linkBase;

    const cleanParams = searchParams.startsWith('?') ? searchParams.substring(1) : searchParams;
    return `${linkBase}?${cleanParams}`;
  };

  return (
    <a 
      href={getHref()}
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${pulseClass} ${className}`}
      {...props}
    >
      {children}
      {withIcon && <ArrowRight className="ml-2 w-5 h-5" />}
    </a>
  );
};

export default Button;