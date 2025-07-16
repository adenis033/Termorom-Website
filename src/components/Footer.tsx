import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Clock, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Termorom
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Specialiști în ferestre PVC și aluminiu, uși de garaj premium. 
              Peste 25 ani de experiență și 1000+ proiecte realizate cu succes.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/Termorom" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+40 723 143 719</p>
                  <p className="text-gray-400 text-sm">Luni - Vineri: 08:00 - 18:00</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">termorom@yahoo.ro</p>
                  <p className="text-gray-400 text-sm">Răspundem în maxim 2 ore</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300">Showroom Principal</p>
                  <p className="text-gray-400 text-sm">Bulevardul Cosminului, Bloc 160, Parter, Slobozia, Ialomița</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Servicii</h4>
            <ul className="space-y-3">
              <li>
                <a className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center space-x-2">
                  <ArrowRight className="w-4 h-4" />
                  <span>Ferestre PVC</span>
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center space-x-2">
                  <ArrowRight className="w-4 h-4" />
                  <span>Ferestre Aluminiu</span>
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center space-x-2">
                  <ArrowRight className="w-4 h-4" />
                  <span>Uși de Garaj</span>
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center space-x-2">
                  <ArrowRight className="w-4 h-4" />
                  <span>Consultanță Gratuită</span>
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center space-x-2">
                  <ArrowRight className="w-4 h-4" />
                  <span>Montaj Profesional</span>
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-orange-400 transition-colors duration-300 flex items-center space-x-2">
                  <ArrowRight className="w-4 h-4" />
                  <span>Service & Garanție</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Abonează-te pentru oferte exclusive și noutăți despre produsele noastre.
            </p>
            
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Adresa ta de email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors duration-300"
              />
              <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-full font-medium hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105">
                Abonează-te
              </button>
            </div>
            
            <div className="mt-4 flex items-center space-x-2 text-gray-400 text-sm">
              <Clock className="w-4 h-4" />
              <span>Program: Luni - Vineri, 09:00 - 18:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between w-full">
            {/* Left: CUI */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-2 md:mb-0">
              <span className="text-gray-400 text-sm">CUI: RO13826404</span>
            </div>
            {/* Center: Copyright */}
            <div className="w-full md:w-1/3 flex justify-center mb-2 md:mb-0">
              <span className="text-gray-400 text-sm">© 2025 Termorom. Toate drepturile rezervate.</span>
            </div>
            {/* Right: J21 */}
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <span className="text-gray-400 text-sm">J21/47/2001</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;