export interface Car {
  id: string;
  name: string;
  price: string;
  image: string;
  category: 'Sedan' | 'SUV' | 'Hatchback' | 'Electric' | 'Luxury';
  specs: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
