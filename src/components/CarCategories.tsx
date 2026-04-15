import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CARS } from '../data';

const categories = ['All', 'Sedan', 'SUV', 'Hatchback', 'Electric', 'Luxury'];

export const CarCategories = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredCars = activeTab === 'All' 
    ? CARS 
    : CARS.filter(car => car.category === activeTab);

  return (
    <section id="categories" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="section-subtitle">Browse by Type</span>
        <h2 className="section-title">Car Categories</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeTab === cat 
                ? 'bg-brand-orange text-white shadow-lg' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCars.map((car) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-48 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{car.name}</h3>
                  <p className="text-brand-orange font-bold">{car.price}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
