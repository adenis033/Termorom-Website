import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    requestType: 'offer'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Tâmplărie PVC',
    'Tâmplărie Aluminiu',
    'Rulouri Exterioare',
    'Uși de Garaj',
    'Pergole Retractabile',
    'Balustrade Sticlă',
    'Compartimentări Sticlă',
    'Altceva'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.service || (formData.requestType === 'offer' ? 'Cerere Ofertă' : 'Informații'),
          message: formData.message + `\n\nTelefon: ${formData.phone}`
        })
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          requestType: 'offer'
        });
      } else {
        alert('A apărut o eroare la trimiterea mesajului. Încearcă din nou.');
      }
    } catch (error) {
      alert('A apărut o eroare la trimiterea mesajului. Încearcă din nou.');
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-10 sm:py-16 md:py-20 bg-gray-50">
      <div className="mx-auto px-2 sm:px-4 md:px-12 max-w-[120rem] w-full">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Contactează-ne
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Suntem aici să te ajutăm să găsești soluția perfectă pentru casa ta.
            Completează formularul sau contactează-ne direct pentru o consultanță gratuită.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-orange-400 via-orange-200 to-white rounded-2xl p-4 sm:p-8 shadow-lg h-fit text-gray-900 text-sm sm:text-base">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Informații Contact
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Telefon</h4>
                    <p className="text-gray-600">+40 723 143 719</p>
                    <p className="text-gray-500 text-sm">Luni - Vineri: 08:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">termorom@yahoo.ro</p>
                    <p className="text-gray-500 text-sm">Răspundem în maxim 2 ore</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Showroom</h4>
                    <p className="text-gray-600">Bulevardul Cosminului, Bloc 160,</p>
                    <p className="text-gray-600">Parter, Slobozia, Ialomița</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Program</h4>
                    <p className="text-gray-600">Luni - Vineri</p>
                    <p className="text-gray-600">08:00 - 18:00</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Consultanță Gratuită
                </h4>
                <p className="text-gray-600 text-sm">
                  Oferim măsurători și consultanță gratuită la domiciliu pentru toate proiectele.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-100 border border-gray-400 rounded-2xl p-3 sm:p-8 shadow-lg h-fit text-black text-sm sm:text-base">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">
                    Cere Ofertă sau Informații
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Request Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Tipul cererii
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <label className="relative">
                          <input
                            type="radio"
                            name="requestType"
                            value="offer"
                            checked={formData.requestType === 'offer'}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                            formData.requestType === 'offer'
                              ? 'border-orange-500 bg-orange-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}>
                            <div className="flex items-center space-x-3">
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                formData.requestType === 'offer'
                                  ? 'border-orange-500 bg-orange-500'
                                  : 'border-gray-300'
                              }`}>
                                {formData.requestType === 'offer' && (
                                  <div className="w-2 h-2 bg-white rounded-full"></div>
                                )}
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900">Cerere Ofertă</h4>
                                <p className="text-sm text-gray-600">Pentru un proiect specific</p>
                              </div>
                            </div>
                          </div>
                        </label>

                        <label className="relative">
                          <input
                            type="radio"
                            name="requestType"
                            value="info"
                            checked={formData.requestType === 'info'}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                            formData.requestType === 'info'
                              ? 'border-orange-500 bg-orange-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}>
                            <div className="flex items-center space-x-3">
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                formData.requestType === 'info'
                                  ? 'border-orange-500 bg-orange-500'
                                  : 'border-gray-300'
                              }`}>
                                {formData.requestType === 'info' && (
                                  <div className="w-2 h-2 bg-white rounded-full"></div>
                                )}
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900">Informații</h4>
                                <p className="text-sm text-gray-600">Consultanță generală</p>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* Personal Information */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nume complet *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                            placeholder="Numele tău complet"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Telefon *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                            placeholder="+40 xxx xxx xxx"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                          placeholder="email@exemplu.ro"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Serviciul de interes
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Selectează un serviciu</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Mesaj {formData.requestType === 'offer' ? '(detalii proiect) *' : ''}
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required={formData.requestType === 'offer'}
                          rows={5}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                          placeholder={
                            formData.requestType === 'offer'
                              ? "Descrie proiectul tău: tipul locuinței, numărul de ferestre/uși, dimensiuni aproximative, preferințe speciale..."
                              : "Scrie-ne întrebarea ta sau detaliile pentru care ai nevoie de informații..."
                          }
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                        isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Se trimite...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>
                            {formData.requestType === 'offer' ? 'Trimite Cererea de Ofertă' : 'Trimite Mesajul'}
                          </span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Mesaj Trimis cu Succes!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Mulțumim pentru cererea ta. Echipa noastră te va contacta în cel mai scurt timp
                    pentru a discuta detaliile proiectului.
                  </p>
                  <div className="bg-green-50 rounded-xl p-4">
                    <p className="text-green-800 font-medium">
                      📞 Pentru urgențe, ne poți suna direct la +40 21 234 5678
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;