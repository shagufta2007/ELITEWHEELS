import React from 'react';
import { motion } from 'motion/react';
import { CARS } from '../data';
import { ArrowRight } from 'lucide-react';

export const FeaturedCars = () => {
  return (
    <section id="featured" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="section-subtitle">Premium Selection</span>
        <h2 className="section-title">Featured Models</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARS.slice(0, 3).map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-brand-orange">
                  {car.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{car.name}</h3>
                    <p className="text-brand-green font-bold text-lg">{car.price}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {car.specs.map((spec, i) => (
                    <span key={i} className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600">
                      {spec}
                    </span>
                  ))}
                </div>
                
                <button className="w-full py-3 border-2 border-brand-orange text-brand-orange font-bold rounded-xl group-hover:bg-brand-orange group-hover:text-white transition-all flex items-center justify-center gap-2">
                  View Details
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
