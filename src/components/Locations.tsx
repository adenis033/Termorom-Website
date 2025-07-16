import React from 'react';
import { MapPin, Phone, Clock, Factory, Store, Warehouse } from 'lucide-react';

import fabricaImg from '../assets/fabrica.png';
import showroomImg from '../assets/showroom.png';
import depozitImg from '../assets/depozit.png';

const Locations = () => {
  const locations = [
    {
      id: 1,
      type: 'Fabrică',
      icon: Factory,
      name: 'Termorom Producție',
      address: 'Strada Spicului nr. 4, Stejaru, Perieți',
      phone: '+40 723 143 719',
      hours: 'Luni - Vineri: 08:00 - 18:00',
      description: 'Facilitatea noastră de producție unde fabricăm ferestre și uși premium cu tehnologie avansată.',
      image: fabricaImg,
      features: [
        'Linie de producție automatizată',
        'Control calitate rigorós',
        'Capacitate 200+ ferestre/zi',
        'Laborator de testare'
      ],
      mapUrl: 'https://maps.app.goo.gl/y4bEwMq7mY5hyk917'
    },
    {
      id: 2,
      type: 'Showroom',
      icon: Store,
      name: 'Showroom Termorom',
      address: 'Bulevardul Cosminului, Bloc 160, Parter, Slobozia, Ialomița',
      phone: '+40 743 033 274',
      hours: 'Luni - Sâmbătă: 08:00 - 18:00',
      description: 'Centrul nostru de experiență unde poți vedea și testa toate produsele noastre într-un ambient modern.',
      image: showroomImg,
      features: [
        'Expoziție completă de produse',
        'Consultanță specializată',
        'Simulări 3D gratuite',
        'Parcare disponibilă'
      ],
      mapUrl: 'https://maps.app.goo.gl/4e1EeGPtYhZasSwv9'
    },
    {
      id: 3,
      type: 'Depozit',
      icon: Warehouse,
      name: 'Depozit Termorom',
      address: 'Incinta AMPA, Soseaua Amara 19, Slobozia, Ialomița',
      phone: '+40 765 538 950',
      hours: 'Luni - Vineri: 08:00 - 18:00',
      description: 'Centrul nostru logistic pentru stocarea și distribuția rapidă a produselor în toată țara.',
      image: depozitImg,
      features: [
        'Stoc permanent disponibil',
        'Livrare în 24-48h',
        'Depozitare climatizată',
        'Echipe de transport proprii'
      ],
      mapUrl: 'https://maps.app.goo.gl/7StK2wj3AFTFVzb27'
    }
  ];

  return (
    <section id="locatii" className="py-10 sm:py-16 md:py-20 bg-white">
      <div className="mx-auto px-2 sm:px-4 md:px-12 max-w-[120rem] w-full">
          {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Locațiile Noastre
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descoperă facilitățile Termorom: de la fabrică la showroom și centrul logistic.
            Suntem aproape de tine pentru a-ți oferi servicii complete.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {locations.map((location) => {
            const IconComponent = location.icon;

            return (
              <div
                key={location.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Location Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded-full flex items-center space-x-2">
                      <IconComponent className="w-4 h-4 text-white" />
                      <span className="text-white font-medium text-sm">{location.type}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {location.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{location.description}</p>

                  {/* Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{location.address}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{location.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{location.hours}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Facilități:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {location.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => window.open(location.mapUrl, '_blank')}
                      className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-medium hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
                    >
                      <MapPin className="w-4 h-4" />
                      <span>Vezi pe Hartă</span>
                    </button>
                    <a
                      href={`tel:${location.phone.replace(/[^+0-9]/g, '')}`}
                      className="flex items-center justify-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors duration-300"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Sună acum</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Locations;
