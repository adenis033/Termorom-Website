import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import ferAlu from '../assets/fer_alu.png';
import ferPvc from '../assets/fer_pvc.png';

const Comparison = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-8 sm:py-16 bg-white">
      <div className="mx-auto px-2 sm:px-4 md:px-12 max-w-[120rem] w-full">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            PVC vs Aluminiu
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Alege soluția perfectă pentru casa ta. Compară caracteristicile și beneficiile
            fiecărui material pentru a lua decizia cea mai bună.
          </p>
        </div>

        {/* Main Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
          {/* PVC Section */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-3 sm:p-6 h-full text-sm sm:text-base">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-green-900">
                  Tâmplărie PVC
                </h3>
              </div>

              <p className="text-green-800 mb-6 leading-relaxed">
                Soluția ideală pentru confortul termic și economic. PVC-ul oferă izolație superioară
                și costuri reduse de întreținere, fiind perfect pentru majoritatea locuințelor.
              </p>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-green-900 mb-4">
                  Avantaje Principale:
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-green-800">Izolație termică excepțională</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-green-800">Preț accesibil și raport calitate-preț excelent</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-green-800">Întreținere minimă necesară</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-green-800">Izolație fonică superioară</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-green-800">Instalare rapidă și eficientă</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-200 rounded-lg">
                  <p className="text-green-900 font-medium text-sm">
                    💡 Ideal pentru: Case familiale, apartamente, renovări cu buget controlat
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PVC Image */}
          <div className="order-1 lg:order-2">
            <div className="relative h-56 sm:h-56 md:h-[32rem] rounded-2xl overflow-hidden">
              <img
                src={ferPvc}
                alt="Ferestre PVC Premium"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Ferestre PVC Premium
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Aluminum Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
          {/* Aluminum Image */}
          <div>
            <div className="relative h-56 sm:h-56 md:h-[32rem] rounded-2xl overflow-hidden">
              <img
                src={ferAlu}
                alt="Ferestre Aluminiu Modern"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Ferestre Aluminiu Modern
                </span>
              </div>
            </div>
          </div>

          {/* Aluminum Section */}
          <div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-3 sm:p-6 h-full text-sm sm:text-base">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Tâmplărie Aluminiu
                </h3>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Alegerea premium pentru design modern și durabilitate maximă. Aluminiul oferă
                posibilități nelimitate de personalizare și rezistență excepțională în timp.
              </p>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Avantaje Principale:
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Design modern și elegant</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Durabilitate excepțională (50+ ani)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Varietate mare de culori și finisaje</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">Rezistență maximă la intemperii</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">100% reciclabil și eco-friendly</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-200 rounded-lg">
                  <p className="text-gray-900 font-medium text-sm">
                    💡 Ideal pentru: Proiecte premium, clădiri comerciale, design modern
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white border border-gray-200 shadow-md rounded-2xl p-10 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Nu știi exact ce ți se potrivește?
          </h3>
          <p className="text-gray-600 mb-6 text-base md:text-lg max-w-2xl mx-auto">
            Suntem aici să te ajutăm! Contactează-ne și îți vom oferi consultanță personalizată pentru alegerea tâmplăriei potrivite.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300"
            >
              <span>Consultanță Gratuită</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors duration-300"
            >
              <span>Cere Ofertă</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
