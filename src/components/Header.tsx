import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top contact bar */}
      <div className={`border-b transition-all duration-300 ${
        isScrolled ? 'border-gray-200 bg-gray-50' : 'border-white/20 bg-black/20'
      }`}>
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className={`flex items-center space-x-2 ${
                isScrolled ? 'text-gray-600' : 'text-white'
              }`}>
                <Phone className="w-4 h-4" />
                <span>+40 723 143 719</span>
              </div>
              <div className={`flex items-center space-x-2 ${
                isScrolled ? 'text-gray-600' : 'text-white'
              }`}>
                <Mail className="w-4 h-4" />
                <span>termorom@yahoo.ro</span>
              </div>
            </div>
            <div className={`hidden md:flex items-center space-x-2 ${
              isScrolled ? 'text-gray-600' : 'text-white'
            }`}>
              <MapPin className="w-4 h-4" />
              <span>Slobozia, Ialomița</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className={`text-3xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Termorom
            </h1>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('servicii')}
              className={`font-medium transition-colors duration-300 hover:text-orange-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Servicii
            </button>
            <button 
              onClick={() => scrollToSection('despre-noi')}
              className={`font-medium transition-colors duration-300 hover:text-orange-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Despre Noi
            </button>
            <button 
              onClick={() => scrollToSection('proiecte')}
              className={`font-medium transition-colors duration-300 hover:text-orange-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Proiecte
            </button>
            <button 
              onClick={() => scrollToSection('recenzii')}
              className={`font-medium transition-colors duration-300 hover:text-orange-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Recenzii
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors duration-300 hover:text-orange-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full font-medium hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
            >
              Cere Ofertă
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-4 px-4">
              <button 
                onClick={() => scrollToSection('servicii')}
                className="text-gray-700 font-medium hover:text-orange-500 transition-colors text-left"
              >
                Servicii
              </button>
              <button 
                onClick={() => scrollToSection('despre-noi')}
                className="text-gray-700 font-medium hover:text-orange-500 transition-colors text-left"
              >
                Despre Noi
              </button>
              <button 
                onClick={() => scrollToSection('proiecte')}
                className="text-gray-700 font-medium hover:text-orange-500 transition-colors text-left"
              >
                Proiecte
              </button>
              <button 
                onClick={() => scrollToSection('recenzii')}
                className="text-gray-700 font-medium hover:text-orange-500 transition-colors text-left"
              >
                Recenzii
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 font-medium hover:text-orange-500 transition-colors text-left"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full font-medium hover:from-orange-600 hover:to-yellow-600 transition-all duration-300"
              >
                Cere Ofertă
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;