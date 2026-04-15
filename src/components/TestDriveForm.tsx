import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';

export const TestDriveForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="book" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 md:p-16 text-white">
            <span className="text-brand-orange font-bold uppercase tracking-widest mb-4 block">Get Behind the Wheel</span>
            <h2 className="text-4xl font-bold mb-6">Book Your Test Drive</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Experience the thrill of driving your favorite model. Our consultants will guide you through all the features and answer any questions you have.
            </p>
            
            <ul className="space-y-4">
              {['Expert Guidance', 'No Obligation', 'Flexible Scheduling', 'Personalized Specs'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-brand-green" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/2 bg-white p-8 md:p-16">
            {submitted ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 bg-green-100 text-brand-green rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Booking Received!</h3>
                <p className="text-slate-600">Our team will contact you shortly to confirm your preferred date and time.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Car Model</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all">
                      <option>Vanguard GT</option>
                      <option>Terra SUV</option>
                      <option>Volt X</option>
                      <option>Executive S</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Date</label>
                  <input type="date" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all" />
                </div>
                
                <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                  <Send size={20} />
                  Book Now
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
