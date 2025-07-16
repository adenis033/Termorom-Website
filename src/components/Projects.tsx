import React, { useState } from 'react';
import { X, MapPin, Calendar, Info, ChevronLeft, ChevronRight } from 'lucide-react';

// Import local images (adjust relative path to your project)
import p1_1 from '../assets/projects/p1_1.jpg';
import p1_2 from '../assets/projects/p1_2.jpg';
import p1_3 from '../assets/projects/p1_3.jpg';
import p1_4 from '../assets/projects/p1_4.jpg';
import p1_5 from '../assets/projects/p1_5.jpg';

import p2_1 from '../assets/projects/p2_1.jpg';
import p2_2 from '../assets/projects/p2_2.jpg';
import p2_3 from '../assets/projects/p2_3.jpg';
import p2_4 from '../assets/projects/p2_4.jpg';
import p2_5 from '../assets/projects/p2_5.jpg';

import p3_1 from '../assets/projects/p3_1.jpg';
import p3_2 from '../assets/projects/p3_2.jpg';
import p3_3 from '../assets/projects/p3_3.jpg';
import p3_4 from '../assets/projects/p3_4.jpg';
import p3_5 from '../assets/projects/p3_5.jpg';

import p4_1 from '../assets/projects/p4_1.jpg';
import p4_2 from '../assets/projects/p4_2.jpg';
import p4_3 from '../assets/projects/p4_3.jpg';
import p4_4 from '../assets/projects/p4_4.jpg';
import p4_5 from '../assets/projects/p4_5.jpg';

import p5_1 from '../assets/projects/p5_1.jpg';
import p5_2 from '../assets/projects/p5_2.jpg';
import p5_3 from '../assets/projects/p5_3.jpg';
import p5_4 from '../assets/projects/p5_4.jpg';
import p5_5 from '../assets/projects/p5_5.jpg';

import p6_1 from '../assets/projects/p6_1.jpg';
import p6_2 from '../assets/projects/p6_2.jpg';
import p6_3 from '../assets/projects/p6_3.jpg';
import p6_4 from '../assets/projects/p6_4.jpg';
import p6_5 from '../assets/projects/p6_5.jpg';

import p7_1 from '../assets/projects/p7_1.jpg';
import p7_2 from '../assets/projects/p7_2.jpg';
import p7_3 from '../assets/projects/p7_3.jpg';
import p7_4 from '../assets/projects/p7_4.jpg';

import p8_1 from '../assets/projects/p8_1.jpg';
import p8_2 from '../assets/projects/p8_2.jpg';
import p8_3 from '../assets/projects/p8_3.jpg';
import p8_4 from '../assets/projects/p8_4.jpg';

const PROJECTS_PER_PAGE = 4;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [page, setPage] = useState(0);
  const [zoomImage, setZoomImage] = useState<string | null>(null);
  const [carousel, setCarousel] = useState<{images: string[]; index: number} | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Salon Evenimente Amara',
      location: 'Amara',
      date: '2024',
      images: [p1_1, p1_2, p1_3, p1_4, p1_5],
      description:
        'Spațiu modern pentru evenimente, proiectat cu fațade vitrate generoase pentru lumină naturală și atmosferă elegantă. Soluțiile de tâmplărie PVC cu 5 camere și sticlă termopan asigură izolare fonică și termică optimă, creând un mediu confortabil pentru orice tip de eveniment.',
      features: [
        'Tâmplărie PVC 5 camere',
        'Sticlă termopan 6 mm x 2',
        'Izolare fonică',
        'Construcție modernă',
      ],
    },
    {
      id: 2,
      title: 'Amenajare Spațiu Comercial Slobozia',
      location: 'Slobozia',
      date: '2023',
      images: [p2_1, p2_2, p2_3, p2_4, p2_5],
      description:
        'Transformare completă a unui spațiu comercial cu sisteme inovatoare de ferestre ghilotină acționate electric și compartimentări din sticlă securizată. Proiectul include balustrade din sticlă, pergole retractabile și tâmplărie de ultimă generație, pentru un aspect modern și funcționalitate maximă.',
      features: [
        'Ferestre ghilotină electrice',
        'Culisante cu geam securizat',
        'Balustradă și scări din sticlă',
        'Pergole retractabile',
      ],
    },
    {
      id: 3,
      title: 'Pereți din Sticlă',
      location: 'Slobozia',
      date: '2023',
      images: [p3_1, p3_2, p3_3, p3_4, p3_5],
      description:
        'Execuție de pereți despărțitori din sticlă securizată de 8 mm, montați cu profile de aluminiu discrete. Soluția oferă transparență, eleganță și separare eficientă a spațiilor, păstrând totodată luminozitatea naturală.',
      features: [
        'Sticlă securizată 8 mm',
        'Profile aluminiu cu clips',
        'Design modern',
        'Montaj profesional',
      ],
    },
    {
      id: 4,
      title: 'Pergola retractabila spatiul comercial',
      location: 'Slobozia',
      date: '2025',
      images: [p6_1, p6_2, p6_3, p6_4, p6_5],
      description:
        'Pergolă retractabilă instalată pentru un spațiu comercial modern, oferind protecție și flexibilitate pentru terasă.',
      features: [
        'Pergolă retractabilă',
        'Design modern',
        'Protecție împotriva intemperiilor',
        'Ideal pentru spații comerciale',
      ],
    },
    {
      id: 5,
      title: 'Închidere Terasă cu Sisteme Culisante',
      location: 'Slobozia',
      date: '2023',
      images: [p5_1, p5_2, p5_3, p5_4, p5_5],
      description:
        'Terasă protejată cu sisteme de uși culisante pe 2 și 3 căi, finisaj gri antracit. Soluția permite deschiderea largă a spațiului în sezonul cald și protecție eficientă împotriva vremii nefavorabile, fără a compromite estetica.',
      features: [
        'Uși culisante 2/3 căi',
        'Culoare gri antracit',
        'Disponibil RAL',
        'Montaj personalizat',
      ],
    },
    {
      id: 6,
      title: 'Casă Păltinișu',
      location: 'Păltinișu',
      date: '2024',
      images: [p4_1, p4_2, p4_3, p4_4, p4_5],
      description:
        'Locuință modernă, echipată cu ferestre și uși termoizolante, adaptate pentru eficiență energetică și confort sporit. Designul contemporan se îmbină cu funcționalitatea, asigurând protecție împotriva intemperiilor și un ambient plăcut.',
      features: [
        'Ferestre termoizolante',
        'Uși moderne',
        'Eficiență energetică',
        'Confort sporit',
      ],
    },
    {
      id: 7,
      title: 'Spațiu Comercial Slobozia',
      location: 'Slobozia',
      date: '2024',
      images: [p7_1, p7_2, p7_3, p7_4],
      description:
        'Spațiu comercial amenajat cu tâmplărie Salamander ProEvolution 72, dotată cu trei garnituri de etanșare pentru izolare superioară. Proiectul asigură eficiență energetică, siguranță și un aspect profesional.',
      features: [
        'Salamander ProEvolution 72',
        'Trei garnituri de etanșare',
        'Izolare superioară',
        'Eficiență energetică',
      ],
    },
    {
      id: 8,
      title: 'Montaj Uși Garaj Parcul Industrial Slobozia',
      location: 'Slobozia',
      date: '2023',
      images: [p8_1, p8_2, p8_3, p8_4],
      description:
        'Montaj profesional de uși de garaj industriale, adaptate cerințelor spațiilor comerciale și logistice. Ușile oferă durabilitate, funcționare fiabilă și acces facil pentru vehicule și personal.',
      features: [
        'Uși de garaj industriale',
        'Montaj rapid',
        'Potrivite pentru industrie',
        'Durabilitate crescută',
      ],
    },
  ];

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = projects.slice(
    page * PROJECTS_PER_PAGE,
    page * PROJECTS_PER_PAGE + PROJECTS_PER_PAGE
  );

  const openModal = (id: number) => {
    setSelectedProject(id);
    setSelectedImageIndex(0);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };
  const selected = projects.find((p) => p.id === selectedProject);

  const prevImage = () => {
    if (!selected) return;
    setSelectedImageIndex((idx) =>
      idx === 0 ? selected.images.length - 1 : idx - 1
    );
  };

  const nextImage = () => {
    if (!selected) return;
    setSelectedImageIndex((idx) =>
      idx === selected.images.length - 1 ? 0 : idx + 1
    );
  };

  return (
    <section id="proiecte" className="py-10 sm:py-16 md:py-20 bg-white">
      <div className="mx-auto px-2 sm:px-4 md:px-12 max-w-[120rem] w-full">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Proiectele Noastre</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            O selecție din cele mai reprezentative proiecte realizate de echipa Termorom.
          </p>
        </div>
        <div className="space-y-6 sm:space-y-10 md:space-y-16">
          {paginatedProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={project.id}
                className={`flex flex-col md:flex-row ${
                  isEven ? '' : 'md:flex-row-reverse'
                } items-stretch rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-md bg-gray-50`}
                style={{ minHeight: '200px' }}
                onClick={() => openModal(project.id)}
              >
                {/* Image */}
                <div className="md:w-1/3 w-full aspect-[4/3] relative p-0 m-0 flex-shrink-0 flex items-stretch sm:aspect-[4/3] aspect-video h-40 sm:h-56 md:h-auto">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover block p-0 m-0 rounded-t-2xl sm:rounded-t-3xl md:rounded-none"
                  />
                </div>
                {/* Text */}
                <div className="md:w-2/3 w-full flex flex-col justify-center p-3 sm:p-6 md:p-12 relative max-w-full">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
                  <div className="flex flex-wrap items-center text-gray-600 mb-2 text-sm sm:text-base md:text-lg">
                    <MapPin className="w-5 h-5 mr-2 text-green-600" /> {project.location}
                    <Calendar className="w-5 h-5 ml-6 mr-2 text-green-600" /> {project.date}
                  </div>
                  <p className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg leading-relaxed">{project.description}</p>
                  <button
                    className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-white/80 hover:bg-orange-100 text-orange-600 rounded-full p-2 sm:p-3 shadow transition-all flex items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(project.id);
                    }}
                    aria-label="Detalii proiect"
                  >
                    <Info className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 ${
                page === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-green-100 text-green-700 hover:bg-green-200'
              }`}
              aria-label="Previous page"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPage(idx)}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold transition-colors duration-200 ${
                  page === idx
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-green-200'
                }`}
                aria-label={`Go to page ${idx + 1}`}
              >
                {idx + 1}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 ${
                page === totalPages - 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-green-100 text-green-700 hover:bg-green-200'
              }`}
              aria-label="Next page"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={e => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideInUp relative">
            <div className="relative">
              <img
                src={selected.images[selectedImageIndex]}
                alt={`${selected.title} - imagine ${selectedImageIndex + 1}`}
                className="w-full h-64 object-cover cursor-pointer select-none"
                onClick={nextImage} // click main image cycles next image
              />
              <div className="absolute inset-0 bg-black/50" />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow z-20"
                aria-label="Închide proiect"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>

              {/* Left arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                aria-label="Previous image"
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 shadow z-20"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>

              {/* Right arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                aria-label="Next image"
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 shadow z-20"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selected.title}</h2>
              <div className="flex items-center text-gray-600 mb-4 text-lg">
                <MapPin className="w-5 h-5 mr-2 text-green-600" /> {selected.location}
                <Calendar className="w-5 h-5 ml-6 mr-2 text-green-600" /> {selected.date}
              </div>
              <p className="text-gray-700 mb-6">{selected.description}</p>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Caracteristici</h4>
              <ul className="space-y-2 mb-4">
                {selected.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full inline-block" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-4">
                {selected.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${selected.title} - imagine ${idx + 1}`}
                    className={`w-full h-32 object-cover rounded-lg cursor-pointer border-4 transition ${
                      idx === selectedImageIndex ? 'border-green-600' : 'border-transparent'
                    }`}
                    onClick={() => setCarousel({images: selected.images, index: idx})}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Carousel Modal for thumbnails */}
      {carousel && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-2 sm:p-4 animate-fadeIn">
          <div className="relative w-full flex flex-col items-center max-w-3xl sm:max-w-4xl md:max-w-5xl">
            <img
              src={carousel.images[carousel.index]}
              alt="Carousel project"
              className="w-full h-auto max-w-[90vw] max-h-[80vh] sm:max-h-[90vh] object-contain rounded-2xl shadow-2xl bg-white mx-auto"
              style={{ aspectRatio: '4/3' }}
            />
            {/* Carousel navigation */}
            <button
              onClick={() => setCarousel(c => c ? { ...c, index: (c.index - 1 + c.images.length) % c.images.length } : c)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow z-10"
              aria-label="Imaginea anterioară"
            >
              <ChevronLeft className="w-8 h-8 text-gray-800" />
            </button>
            <button
              onClick={() => setCarousel(c => c ? { ...c, index: (c.index + 1) % c.images.length } : c)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow z-10"
              aria-label="Imaginea următoare"
            >
              <ChevronRight className="w-8 h-8 text-gray-800" />
            </button>
            <button
              onClick={() => setCarousel(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow z-20"
              aria-label="Închide carusel"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
