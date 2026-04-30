import React from 'react';
import { motion } from 'motion/react';

const brands = [
  { name: 'BMW', logo: '/BMW.jpg' },
  { name: 'Mercedes', logo: '/Mercedes.png' },
  { name: 'Audi', logo: '/Audii.png' },
  { name: 'Tesla', logo: '/Tesla.png' },
  { name: 'Porsche', logo: '/porschee.png' },
  { name: 'Lexus', logo: '/lexus.png' }
];

export const Brands = () => {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 hover:opacity-100 transition-opacity">
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              whileHover={{ scale: 1.1 }}
              className="w-24 md:w-32 grayscale hover:grayscale-0 transition-all"
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
