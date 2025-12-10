import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = '', onClick }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      className={`relative px-8 py-4 rounded-full font-bold uppercase tracking-wider overflow-hidden group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      data-cursor-hover
    >
        {/* Background Fill */}
      <span className="absolute inset-0 bg-white text-black transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left z-0" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-300">
        {children}
      </span>

      {/* Border Glow */}
      <span className="absolute inset-0 rounded-full border border-white/20 group-hover:border-transparent transition-colors duration-300" />
    </motion.button>
  );
};

export default MagneticButton;