import React from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export const ShowroomTour = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-subtitle">Experience Elite</span>
          <h2 className="section-title">Virtual Showroom Tour</h2>
        </div>
        
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group"
        >
          <img 
            src="/ShowroomVideoThumbnail.jpg" 
            alt="Showroom Video Thumbnail" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all flex items-center justify-center">
            <button className="w-24 h-24 bg-brand-orange text-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all">
              <Play size={40} fill="currentColor" />
            </button>
          </div>
          
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Elite Wheels Flagship Showroom</h3>
            <p className="text-white/80">Take a peek at our state-of-the-art facility and premium collection.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
