import React, { useState } from "react";

// We update details to be an array of strings, each representing a bullet point:
// At the top of your file (e.g. Services.tsx or wherever you define this array)
import pvcImg from '../assets/pvc.png';
import aluImg from '../assets/alu.png';
import rulImg from '../assets/rul.png';
import usiImg from '../assets/usi1.png';
import pergImg from '../assets/perg.png';
import balImg from '../assets/bal.png';


const services = [
  {
    id: 1,
    title: "Tâmplărie PVC",
    image: pvcImg,
    description:
      "Ferestre și uși din PVC de înaltă calitate cu izolație termică și fonică superioară.",
    details: [
      "Profile multi-cameră pentru izolație superioară",
      "Geamuri triplu-strat Low-E",
      "Feronerie de siguranță integrată",
      "Estimare timp execuție: 1-2 săptămâni",
    ],
  },
  {
    id: 2,
    title: "Tâmplărie Aluminiu",
    image: aluImg,
    description:
      "Sisteme de ferestre și uși din aluminiu pentru proiecte rezidențiale și comerciale.",
    details: [
      "Design slim și modern",
      "Profile cu rupere de punte termică",
      "Durabilitate excepțională",
      "Estimare timp execuție: 1-2 săptămâni",
    ],
  },
  {
    id: 3,
    title: "Rulouri Exterioare",
    image: rulImg,
    description:
      "Rulouri exterioare cu acționare din telecomandă - motor electric sau panouri solare.",
    details: [
      "Rulouri silențioase și eficiente",
      "Opțiune panouri solare integrate",
      "Control inteligent prin telecomandă",
      "Estimare timp montaj: 1-3 săptămâni",
    ],
  },
  {
    id: 4,
    title: "Uși de Garaj",
    image: usiImg,
    description:
      "Uși de garaj rezidențiale și industriale cu sisteme de automatizare avansate.",
    details: [
      "Panouri izolante performante",
      "Sisteme de siguranță integrate",
      "Montaj rapid și eficient",
      "Estimare timp montaj: 2-3 săptămâni",
    ],
  },
  {
    id: 5,
    title: "Pergole Retractabile",
    image: pergImg,
    description:
      "Pergole retractabile bioclimatice pentru terase și grădini moderne.",
    details: [
      "Lamele orientabile automat",
      "Iluminare LED integrată",
      "Sisteme de drenaj integrate",
      "Estimare timp instalare: 2-4 săptămâni",
    ],
  },
  {
    id: 6,
    title: "Balustrade Sticlă",
    image: balImg,
    description:
      "Balustrade din sticlă pentru balcoane și scări - design modern și siguranță maximă.",
    details: [
      "Profile inox premium, fără șuruburi vizibile",
      "Design transparent și elegant",
      "Montaj rapid și sigur",
      "Estimare timp montaj: 2-3 săptămâni",
    ],
  },
];


const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-green-500 flex-shrink-0 mr-2"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ServicesGrid = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [modalService, setModalService] = useState<typeof services[0] | null>(null);

  const openModal = (serviceId: number) => {
    const service = services.find((s) => s.id === serviceId) || null;
    setModalService(service);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalService(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section className="py-16 sm:py-28 bg-white">
      <div className="mx-auto px-2 sm:px-4 md:px-12 max-w-[120rem] w-full">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-12 text-center text-gray-900">
          Serviciile Noastre
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 md:gap-10 mb-6 sm:mb-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer transform transition-transform duration-300 hover:scale-105 text-sm sm:text-base"
              onMouseEnter={() => setActiveId(service.id)}
              onMouseLeave={() => setActiveId(null)}
              onClick={() => openModal(service.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openModal(service.id);
              }}
              aria-label={`Vezi detalii pentru serviciul ${service.title}`}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 sm:h-56 md:h-80 object-cover"
                loading="lazy"
              />

              {/* Bottom title bar */}
              <div
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent px-6 py-5 transition-opacity duration-300 ${
                  activeId === service.id ? "opacity-0" : "opacity-100"
                }`}
              >
                <h3 className="text-white text-2xl font-semibold truncate">
                  {service.title}
                </h3>
              </div>

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center p-8 text-center transition-opacity duration-300 ${
                  activeId === service.id
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <h3 className="text-white text-3xl font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-lg max-w-xs">{service.description}</p>
                <p className="mt-5 text-base text-gray-400 italic">
                  Click pentru mai multe detalii
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 italic text-lg">
          Pentru mai multe detalii, dați click pe serviciu.
        </p>
      </div>

      {/* Modal */}
      {modalService && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={e => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={closeModal}
              aria-label="Închide detalii serviciu"
              className="absolute top-6 right-6 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition"
            >
              <span className="text-3xl font-bold">&times;</span>
            </button>
            <img
              src={modalService.image}
              alt={modalService.title}
              className="w-full h-80 object-cover rounded-t-3xl"
              loading="lazy"
            />
            <div className="p-10">
              <h2
                id="modal-title"
                className="text-4xl font-extrabold text-gray-900 mb-6"
              >
                {modalService.title}
              </h2>

              {/* Render details as list with check icons */}
              <ul className="space-y-4 text-lg text-gray-700">
                {modalService.details.map((point, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckIcon />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesGrid;
