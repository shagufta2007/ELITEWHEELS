import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Users } from 'lucide-react';

export const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle">Our Story</span>
            <h2 className="text-4xl font-bold mb-6">Redefining the Car Buying Experience Since 1995</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Elite Wheels started with a simple vision: to provide a transparent, luxurious, and personalized car buying journey. Over the past three decades, we have grown into one of the most trusted names in the automotive industry, representing the world's finest brands.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-xl bg-slate-50">
                <Award className="mx-auto text-brand-orange mb-2" size={32} />
                <h4 className="font-bold text-xl">25+</h4>
                <p className="text-sm text-slate-500">Awards Won</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-slate-50">
                <ShieldCheck className="mx-auto text-brand-green mb-2" size={32} />
                <h4 className="font-bold text-xl">100%</h4>
                <p className="text-sm text-slate-500">Certified Cars</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-slate-50">
                <Users className="mx-auto text-brand-yellow mb-2" size={32} />
                <h4 className="font-bold text-xl">50k+</h4>
                <p className="text-sm text-slate-500">Happy Clients</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1562519819-016930ada31c?auto=format&fit=crop&q=80&w=1000" 
              alt="Showroom" 
              className="rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 bg-brand-orange p-8 rounded-2xl text-white hidden md:block">
              <p className="text-4xl font-bold">30</p>
              <p className="text-sm uppercase tracking-widest">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
