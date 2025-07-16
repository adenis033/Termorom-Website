import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Trust from './components/Trust';
import Locations from './components/Locations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import Comparison from './components/Comparison';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Comparison />
      <Locations />
      <Trust />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;