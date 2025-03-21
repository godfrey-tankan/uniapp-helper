
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import Programs from '../components/Programs';
import News from '../components/News';
import About from '../components/About';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <Statistics />
        <Programs />
        <News />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
