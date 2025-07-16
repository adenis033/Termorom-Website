import React from 'react';
import { Award, Users, Briefcase, Clock } from 'lucide-react';

import lucianImg from '../assets/luci.png';
import floriImg from '../assets/flori.png';
import claudiuImg from '../assets/claudiu.png';
import denisImg from '../assets/luci.png';
import sanduImg from '../assets/sandu.png';

import deceuninckLogo from '../assets/Deceuninck.png';
import vekaLogo from '../assets/Veka.png';
import salamanderLogo from '../assets/Salamander.png';
import weissLogo from '../assets/Weiss.png';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Lucian FOTACHE',
      position: 'Consultant Vânzări',
      image: lucianImg,
    },
    {
      id: 2,
      name: 'Florentina RÂPA',
      position: 'Manager Depozit',
      image: floriImg,
    },
    {
      id: 3,
      name: 'Claudiu Mihai RÂPA',
      position: 'CEO & Fondator',
      image: claudiuImg,
      isCEO: true
    },
    {
      id: 4,
      name: 'Sandu MUȘAT',
      position: 'Șef Echipă Montaj',
      image: denisImg,
    },
    {
      id: 5,
      name: 'Madalin GURGUI',
      position: 'Inginer Calitate',
      image: sanduImg,
    }
  ];

  const partners = [
    {
      name: 'Deceuninck',
      description: 'Sisteme PVC eficiente energetic',
      logo: deceuninckLogo
    },
    {
      name: 'Veka',
      description: 'Profile PVC premium din Germania',
      logo: vekaLogo
    },
    {
      name: 'Salamander',
      description: 'Sisteme germane de tâmplărie',
      logo: salamanderLogo
    },
    {
      name: 'Weiss',
      description: 'Profile PVC durabile',
      logo: weissLogo
    }
  ];

  return (
    <section id="despre-noi" className="py-16 bg-white">
      <div className="mx-auto px-12 max-w-[120rem] w-full">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Despre Termorom
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De peste 25 ani, suntem lideri în furnizarea de soluții premium pentru ferestre și uși.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            Cu o echipă dedicată și parteneriate cu producători de top, oferim soluții personalizate care îmbunătățesc eficiența energetică și estetica oricărui spațiu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Misiunea Noastră */}
          <div className="lg:col-span-1 border-l-4 border-orange-500 pl-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Misiunea Noastră
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              La Termorom, ne dedicăm furnizării de soluții de înaltă calitate pentru tâmplărie,
              combinând tehnologia avansată cu meșteșugul tradițional.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ne străduim să depășim așteptările clienților noștri în fiecare proiect, oferind
              produse durabile și servicii excepționale.
            </p>
          </div>

          {/* Echipa Noastră */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Echipa Noastră
            </h3>
            <div className="flex justify-center">
              <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className={`text-center ${member.isCEO ? 'w-36 mt-2' : 'w-28 mt-4'}`}
                  >
                    <div className={`relative mx-auto ${member.isCEO ? 'mb-6' : 'mb-4'}`}>
                      <img
                        src={member.image}
                        alt={member.name}
                        className={`rounded-full shadow-lg mx-auto ${member.isCEO ? 'w-28 h-28 ring-4 ring-orange-500' : 'w-20 h-20 ring-2 ring-gray-300'}`}
                      />
                      {member.isCEO && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          CEO
                        </div>
                      )}
                    </div>
                    <h4 className={`font-bold text-gray-900 ${member.isCEO ? 'text-lg' : 'text-md'}`}>
                      {member.id === 4
                        ? (<>{member.name.split(' ')[0]}<br />{member.name.split(' ')[1]}</>)
                        : member.name}
                    </h4>
                    <p className={`text-xs ${member.isCEO ? 'text-orange-600 font-semibold' : 'text-gray-600'}`}>
                      {member.position}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Partenerii Noștri */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Partenerii Noștri
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-24 h-24 mx-auto mb-4 object-contain"
                />
                <h4 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h4>
                <p className="text-gray-600 text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4 sm:gap-8 mt-8 sm:mt-12">
          {/* Add your 4 stat blocks here manually as you wish, without 'Ani Experiență' */}
        </div>
      </div>
    </section>
  );
};

export default About;
