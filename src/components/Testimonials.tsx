import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="section-subtitle">Client Stories</span>
        <h2 className="section-title">What Our Customers Say</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-slate-50 rounded-3xl p-8 md:p-16 text-center shadow-sm"
            >
              <Quote className="mx-auto text-brand-orange/20 mb-8" size={64} />
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-slate-700 italic mb-10 leading-relaxed">
                "{TESTIMONIALS[current].content}"
              </p>
              <div className="flex flex-col items-center">
                <img 
                  src={TESTIMONIALS[current].image} 
                  alt={TESTIMONIALS[current].name} 
                  className="w-20 h-20 rounded-full border-4 border-white shadow-lg mb-4 object-cover"
                  referrerPolicy="no-referrer"
                />
                <h4 className="text-xl font-bold">{TESTIMONIALS[current].name}</h4>
                <p className="text-brand-orange font-medium">{TESTIMONIALS[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prev}
              className="p-3 rounded-full bg-white border border-slate-200 hover:border-brand-orange hover:text-brand-orange transition-all shadow-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="p-3 rounded-full bg-white border border-slate-200 hover:border-brand-orange hover:text-brand-orange transition-all shadow-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
