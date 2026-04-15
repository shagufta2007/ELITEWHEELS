import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { FeaturedCars } from './components/FeaturedCars';
import { CarCategories } from './components/CarCategories';
import { SpecialOffers } from './components/SpecialOffers';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { ShowroomTour } from './components/ShowroomTour';
import { TestDriveForm } from './components/TestDriveForm';
import { Blog } from './components/Blog';
import { Gallery } from './components/Gallery';
import { Brands } from './components/Brands';
import { Location } from './components/Location';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>
      
      <CustomCursor />
      
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <AboutUs />
        <FeaturedCars />
        <CarCategories />
        <SpecialOffers />
        <Services />
        <WhyChooseUs />
        <ShowroomTour />
        <Testimonials />
        <TestDriveForm />
        <Gallery />
        <Blog />
        <FAQ />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
