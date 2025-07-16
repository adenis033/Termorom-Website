import React from 'react';
import { Award, Shield, Users, Clock } from 'lucide-react';

const Trust = () => {
  const stats = [
    {
      icon: Clock,
      number: '25+',
      label: 'Ani de Experiență',
      description: 'În ferestre și uși premium'
    },
    {
      icon: Users,
      number: '1000+',
      label: 'Proiecte Realizate',
      description: 'Clienți mulțumiți în România'
    },
    {
      icon: Award,
      number: '100%',
      label: 'Satisfacție',
      description: 'Clienți mulțumiți garantat'
    },
    {
      icon: Shield,
      number: '2-5',
      label: 'Ani Garanție',
      description: 'Pe toate produsele noastre'
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-12 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:"url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')",
          maxHeight: '300px',
          height: '100%',
          filter: 'brightness(0.35)',
          zIndex: -1,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />

      <div className="relative z-10 container mx-auto px-4 text-white">
        {/* Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            De Ce Să Alegi Termorom?
          </h2>
          <p className="text-lg md:text-xl text-white/90">
            Peste 15 ani de experiență și sute de proiecte de succes. Calitate și încredere pentru casa ta.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map(({ icon: Icon, number, label, description }, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-transform transform hover:scale-105"
            >
              <div className="w-14 h-14 mx-auto bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-1 text-yellow-400">{number}</div>
              <h3 className="text-lg font-semibold mb-1">{label}</h3>
              <p className="text-sm text-white/80">{description}</p>
            </div>
          ))}
        </div>

        {/* Single Button Centered */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg mx-auto"
          >
            Cere Consultanță Gratuită
          </button>

          <p className="text-white/70 italic text-sm mt-6">
            Munca noastră vorbește de la sine — calitatea și satisfacția clienților sunt cea mai bună recomandare.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trust;
