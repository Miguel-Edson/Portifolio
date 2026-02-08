"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

export default function AnimatedButton({ children, onClick, className = "" }: AnimatedButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center gap-2 font-medium cursor-pointer transition-all border-b pb-1 w-fit ${className}`}
    >
      {children}
      <motion.span
        animate={{ x: [0, 5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <ChevronRight size={20} />
      </motion.span>
    </button>
  );
}