import React from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../data';
import { Calendar, ArrowRight } from 'lucide-react';

export const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="section-subtitle">Insights & Tips</span>
        <h2 className="section-title">Latest from Our Blog</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-brand-orange transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-2 text-brand-orange font-bold hover:gap-4 transition-all">
                  Read More
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
