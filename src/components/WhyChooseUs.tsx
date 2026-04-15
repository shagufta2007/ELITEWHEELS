import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, DollarSign, UserCheck, Star } from 'lucide-react';

const reasons = [
  {
    icon: CheckCircle2,
    title: 'Certified Cars',
    desc: 'Every vehicle undergoes a rigorous 150-point inspection by our experts.',
    color: 'bg-brand-green'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    desc: 'No hidden fees or surprises. What you see is exactly what you pay.',
    color: 'bg-brand-orange'
  },
  {
    icon: UserCheck,
    title: 'Experienced Staff',
    desc: 'Our consultants are passionate about cars and dedicated to your needs.',
    color: 'bg-brand-yellow'
  },
  {
    icon: Star,
    title: 'Customer Reviews',
    desc: 'Voted #1 showroom in the region for 5 consecutive years.',
    color: 'bg-blue-500'
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold uppercase tracking-widest mb-2 block">The Elite Advantage</span>
          <h2 className="text-4xl font-bold">Why Choose Elite Wheels?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-6 shadow-lg`}>
                <item.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
