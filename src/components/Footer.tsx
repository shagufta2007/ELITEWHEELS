import React from 'react';
import { Car, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center">
                <Car className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tighter">ELITE<span className="text-brand-orange">WHEELS</span></span>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Your premier destination for luxury and performance vehicles. Experience excellence in every drive.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              {['Home', 'Inventory', 'About Us', 'Services', 'Test Drive', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-brand-orange transition-colors flex items-center gap-2">
                    <ArrowRight size={14} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-orange shrink-0" size={20} />
                <span>123 Luxury Drive, Automotive District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-orange shrink-0" size={20} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-orange shrink-0" size={20} />
                <span>info@elitewheels.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-6">Subscribe to get the latest updates on new arrivals and special offers.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-orange transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-brand-orange px-4 rounded-lg hover:bg-orange-600 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Elite Wheels Showroom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
