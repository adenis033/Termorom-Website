import React from 'react';
import { ArrowRight, Play, Award, Users, Clock } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-2 sm:px-4 py-10 sm:py-16 md:py-20 pt-24 sm:pt-20 md:pt-16">
        <div className="max-w-3xl">
          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-4 sm:mb-8 animate-fadeInUp">
            <div className="flex items-center space-x-2 text-white/90">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">25+ Ani Experiență</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <Users className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">1000+ Proiecte</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <Clock className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium">100% Clienți Mulțumiți</span>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fadeInUp animation-delay-200">
            Soluții Premium pentru
            <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Ferestre și Uși
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed animate-fadeInUp animation-delay-400">
            Transformăm căminul tău cu ferestre PVC și aluminiu de înaltă calitate, 
            uși de garaj premium și servicii profesionale de montaj.
          </p>

          {/* Features list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 animate-fadeInUp animation-delay-600">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-white font-semibold mb-2">Calitate Garantată</h3>
              <p className="text-white/80 text-sm">Materiale premium din Europa</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-white font-semibold mb-2">Montaj Profesional</h3>
              <p className="text-white/80 text-sm">Echipe certificate și experiente</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-white font-semibold mb-2">Garanție Extinsă</h3>
              <p className="text-white/80 text-sm">Până la 10 ani garanție</p>
            </div>
          </div>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-800">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Cere Ofertă Gratuită</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button 
              onClick={() => scrollToSection('locatii')}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30 flex items-center justify-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Vizitează Showroom-ul</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;