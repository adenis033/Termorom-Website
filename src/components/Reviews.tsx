import React from 'react';
import { Star, ExternalLink, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Andreea Munteanu',
      location: 'Amara',
      rating: 5,
      date: '1 săptămână în urmă',
      text: 'Salonul de evenimente arată superb! Ferestrele montate de Termorom oferă lumină naturală și izolare excelentă. Echipa a fost punctuală și atentă la detalii.',
      project: 'Salon Evenimente Amara'
    },
    {
      id: 2,
      name: 'Mihai Stancu',
      location: 'Slobozia',
      rating: 5,
      date: '2 săptămâni în urmă',
      text: 'Transformarea spațiului nostru comercial a depășit așteptările! Ferestrele ghilotină și balustradele din sticlă sunt de top. Recomand Termorom pentru profesionalism.',
      project: 'Amenajare Spațiu Comercial Slobozia'
    },
    {
      id: 3,
      name: 'Elena Voicu',
      location: 'Slobozia',
      rating: 5,
      date: '3 săptămâni în urmă',
      text: 'Pereții din sticlă montați de Termorom au schimbat complet atmosfera biroului nostru. Montaj rapid, curat și rezultate spectaculoase!',
      project: 'Pereți din Sticlă'
    },
    {
      id: 4,
      name: 'Simona Radu',
      location: 'Păltinișu',
      rating: 5,
      date: '1 lună în urmă',
      text: 'Suntem foarte mulțumiți de ferestrele și ușile montate la casa noastră din Păltinișu. Izolare excelentă, design modern și o echipă de profesioniști!',
      project: 'Casă Păltinișu'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="recenzii" className="py-10 sm:py-16 md:py-20 bg-white">
      <div className="mx-auto px-2 sm:px-4 md:px-12 max-w-[120rem] w-full">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Ce Spun Clienții Noștri
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4 sm:mb-8">
            Peste 1000 de clienți mulțumiți au ales Termorom pentru calitatea excepțională{' '}
            și serviciile profesionale. Citește experiențele lor autentice.
          </p>

          {/* Google Reviews Summary */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-1">{renderStars(5)}</div>
            <span className="text-2xl font-bold text-gray-900">4.8</span>
          </div>
          <div className="text-center mb-8">
            <span className="text-gray-400 text-sm">Rating mediu pe baza recenziilor clienților noștri</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-50 rounded-2xl p-3 sm:p-6 border-2 border-gray-300 hover:border-orange-400 hover:bg-white hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-orange-500 opacity-50" />
                <div className="flex items-center space-x-1">{renderStars(5)}</div>
              </div>
              {/* Review Text */}
              <p className="text-gray-700 mb-4 line-clamp-4">"{review.text}"</p>
              {/* Project Type */}
              <div className="mb-4">
                <span className="inline-block bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 text-xs font-medium px-3 py-1 rounded-full">
                  {review.project}
                </span>
              </div>
              {/* Author Info */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">{review.date}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://g.co/kgs/nxmWERM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>Vezi toate recenziile pe Google</span>
            <ExternalLink className="w-5 h-5" />
          </a>

          <p className="text-gray-500 mt-4">
            Sau lasă-ne o recenzie despre experiența ta cu Termorom
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
