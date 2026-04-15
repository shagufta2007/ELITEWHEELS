import React from 'react';
import { motion } from 'motion/react';
import { Car } from 'lucide-react';

export const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[10000] bg-slate-900 flex flex-col items-center justify-center"
    >
      <div className="relative">
        <motion.div
          animate={{ 
            rotate: 360,
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="w-24 h-24 border-4 border-brand-orange/20 border-t-brand-orange rounded-full"
        />
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ 
            duration: 0.5, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
          className="absolute inset-0 flex items-center justify-center text-brand-orange"
        >
          <Car size={40} />
        </motion.div>
      </div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center"
      >
        <span className="text-2xl font-bold tracking-tighter text-white">
          ELITE<span className="text-brand-orange">WHEELS</span>
        </span>
        <div className="mt-2 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-full h-full bg-brand-orange"
          />
        </div>
        <p className="mt-4 text-slate-400 text-sm uppercase tracking-widest animate-pulse">
          Igniting Engines...
        </p>
      </motion.div>
    </motion.div>
  );
};
