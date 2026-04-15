import React from 'react';
import { motion } from 'motion/react';
import { Landmark, ShieldCheck, Wrench, RefreshCw } from 'lucide-react';

const services = [
  {
    icon: Landmark,
    title: 'Easy Financing',
    description: 'Flexible payment plans with low interest rates tailored to your budget.',
    color: 'text-brand-orange',
    bg: 'bg-orange-50'
  },
  {
    icon: ShieldCheck,
    title: 'Car Insurance',
    description: 'Comprehensive coverage options to protect you and your new investment.',
    color: 'text-brand-green',
    bg: 'bg-green-50'
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    description: 'Expert service and genuine parts to keep your car in peak condition.',
    color: 'text-brand-yellow',
    bg: 'bg-yellow-50'
  },
  {
    icon: RefreshCw,
    title: 'Trade-In Options',
    description: 'Get the best market value for your old car when you upgrade with us.',
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="section-subtitle">What We Offer</span>
        <h2 className="section-title">Our Premium Services</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-slate-100 hover:border-brand-orange hover:shadow-xl transition-all group"
            >
              <div className={`w-16 h-16 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
