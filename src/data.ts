import { Car, Testimonial, BlogPost, FAQItem } from './types';

export const CARS: Car[] = [
  {
    id: '1',
    name: 'Vanguard GT',
    price: '$85,000',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    category: 'Luxury',
    specs: ['V8 Engine', '500 HP', '0-60 in 3.4s']
  },
  {
    id: '2',
    name: 'Terra SUV',
    price: '$45,000',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
    category: 'SUV',
    specs: ['All-Wheel Drive', '7 Seater', 'Hybrid Option']
  },
  {
    id: '3',
    name: 'Volt X',
    price: '$55,000',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800',
    category: 'Electric',
    specs: ['300mi Range', 'Fast Charging', 'Autopilot']
  },
  {
    id: '4',
    name: 'City Pulse',
    price: '$22,000',
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800',
    category: 'Hatchback',
    specs: ['Fuel Efficient', 'Compact', 'Smart Tech']
  },
  {
    id: '5',
    name: 'Executive S',
    price: '$62,000',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
    category: 'Sedan',
    specs: ['Leather Interior', 'Smooth Ride', 'Advanced Safety']
  },
  {
    id: '6',
    name: 'Apex Roadster',
    price: '$120,000',
    image: '/ApexRoadster.jpg',
    category: 'Luxury',
    specs: ['Convertible', '600 HP', 'Carbon Fiber']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'John Smith',
    role: 'Business Executive',
    content: 'The buying experience was seamless. Elite Wheels truly understands luxury and customer service.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    role: 'Adventure Enthusiast',
    content: 'Found my perfect SUV here. The staff was incredibly knowledgeable and helped me choose the right specs.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: '3',
    name: 'Michael Chen',
    role: 'Tech Entrepreneur',
    content: 'The electric car selection is top-notch. I love my new Volt X. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Top 5 Maintenance Tips for Your New Car',
    excerpt: 'Keep your vehicle running like new with these essential maintenance habits every owner should know.',
    date: 'March 15, 2026',
    image: '/MaintenanceTips.jpg'
  },
  {
    id: '2',
    title: 'The Future of Electric Vehicles',
    excerpt: 'Exploring the latest breakthroughs in battery technology and what it means for the next decade of driving.',
    date: 'March 10, 2026',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '3',
    title: 'Choosing Between SUV and Sedan',
    excerpt: 'A comprehensive guide to help you decide which car body style fits your lifestyle and family needs.',
    date: 'March 5, 2026',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=400'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'What financing options do you offer?',
    answer: 'We offer flexible financing through multiple bank partners with competitive interest rates and terms up to 84 months.'
  },
  {
    question: 'Do you accept trade-ins?',
    answer: 'Yes, we offer fair market value for your current vehicle. You can use it as a down payment for your new car.'
  },
  {
    question: 'What is the warranty on certified pre-owned cars?',
    answer: 'All our certified pre-owned vehicles come with a minimum 12-month/12,000-mile limited powertrain warranty.'
  },
  {
    question: 'Can I book a test drive online?',
    answer: 'Absolutely! You can use our online booking form or call us directly to schedule a test drive at your convenience.'
  }
];

export const BRANDS = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/600px-BMW.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Benz_logo.svg/600px-Mercedes-Benz_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/600px-Volkswagen_logo_2019.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/600px-Amazon_logo.svg.png', // Placeholder for brand
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/600px-Coca-Cola_logo.svg.png' // Placeholder for brand
];
// Note: Using real brand logos would be better, but these are for demo.
// I'll use text or generic icons if needed.
