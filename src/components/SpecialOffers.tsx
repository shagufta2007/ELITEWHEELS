import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Tag, Clock } from 'lucide-react';

export const SpecialOffers = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-brand-orange overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Tag size={20} />
              <span className="font-bold uppercase tracking-wider">Limited Time Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Save up to $5,000 on Selected Luxury Models</h2>
            <p className="text-white/80 text-lg mb-8">
              Upgrade your drive this season with our exclusive discounts. Includes free maintenance for 2 years and low-interest financing options.
            </p>
            
            <div className="flex gap-4 md:gap-8">
              {Object.entries(timeLeft).map(([label, value]) => (
                <div key={label} className="text-center">
                  <div className="bg-white text-brand-orange w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-bold shadow-lg mb-2">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-80">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1542362567-b055002b91f4?auto=format&fit=crop&q=80&w=800" 
              alt="Special Offer Car" 
              className="rounded-2xl mb-6"
              referrerPolicy="no-referrer"
            />
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold">Apex Roadster S</h3>
                <p className="text-slate-500">Starting from <span className="line-through">$125,000</span></p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-brand-green">$119,999</p>
                <p className="text-xs text-brand-orange font-bold">SAVE $5,001</p>
              </div>
            </div>
            <button className="w-full mt-6 btn-primary">Claim Offer Now</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
