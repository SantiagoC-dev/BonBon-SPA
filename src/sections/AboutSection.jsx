// src/sections/AboutSection.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Tu logo importado
import bonLogo from '../assets/BonBunny.svg';

// Íconos limpios y cute
const CloseIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

const CertificateIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
  </svg>
);

const SparkleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

const ChevronIcon = ({ className, expanded }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className={`${className} transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

// Solo 2 certificados con sus descripciones
const CERTIFICADOS = [
  { 
    id: 1, 
    titulo: "Master en Repostería Francesa", 
    anio: "2023",
    descripcion: "Especialización intensiva en técnicas clásicas, viennoiserie y pastelería de vanguardia en la escuela de artes culinarias."
  },
  { 
    id: 2, 
    titulo: "Especialidad en Buttercream Suizo", 
    anio: "2022",
    descripcion: "Dominio avanzado de texturas, colorimetría, espatulado y diseño floral con crema de mantequilla de merengue suizo."
  }
];

export default function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedCert, setExpandedCert] = useState(null); // Controla qué certificado está abierto

  // Bloquea el scroll de la página de fondo cuando el modal está abierto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setExpandedCert(null); // Cierra los acordeones al salir
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const toggleCert = (id) => {
    setExpandedCert(expandedCert === id ? null : id);
  };

  return (
    <>
      <section className="relative z-20 w-full pt-20 pb-24 px-6 mt-0">
        
        {/* SEPARADOR SUPERIOR: línea sutil con acento central en vez de ola */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 flex items-center gap-3 pb-3 pointer-events-none w-52 sm:w-72">
          <span className="flex-1 h-px bg-gradient-to-r from-transparent to-[#C9AEDA]" />
          <SparkleIcon className="w-3.5 h-3.5 text-[#8A64A3] shrink-0" />
          <span className="flex-1 h-px bg-gradient-to-l from-transparent to-[#C9AEDA]" />
        </div>

        {/* TARJETA FLOTANTE */}
        <div className="max-w-sm mx-auto relative z-10 bg-white rounded-[2.5rem] shadow-[0_20px_40px_rgba(74,37,89,0.08)] px-6 sm:px-8 pb-10 border border-[#E2D1EB]">
          
          {/* Avatar con Logo y fondo morado profundo */}
          <div className="relative flex justify-center -translate-y-12 mb-[-1.5rem]">
            <motion.div 
              whileHover={{ y: -5 }}
              className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#8A64A3] to-[#4A2559] p-[3px] shadow-xl"
            >
              {/* Contenedor circular interno oscuro */}
              <div className="w-full h-full bg-[#4A2559] rounded-full border-4 border-white flex items-center justify-center overflow-hidden relative">
                
                {/* Logo BonBon */}
                <img src={bonLogo} alt="BonBon Logo" className="w-14 h-14 object-contain brightness-0 invert opacity-90" />

              </div>
            </motion.div>
          </div>

          <div className="text-center">
            <h2 className="font-nunito font-black text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#8A64A3] to-[#4A2559] leading-tight mb-4 tracking-tight">
              Sobre mí
            </h2>

            <p className="text-[13.5px] sm:text-[14.5px] font-bold leading-relaxed text-[#6A527A] mb-8 px-2">
              Amante de la repostería desde hace más de <span className="text-[#4A2559] font-black">8 años</span>. Cada creación combina técnica perfecta, ingredientes premium y muchísimo amor.
            </p>

            <motion.button 
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.03, y: -2, boxShadow: "0px 10px 25px rgba(74,37,89,0.25)" }}
              whileTap={{ scale: 0.96 }}
              className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#8A64A3] to-[#4A2559] text-white font-black text-[15px] rounded-2xl py-4 transition-all cursor-pointer shadow-[0_8px_15px_rgba(138,100,163,0.3)]"
            >
              <CertificateIcon className="w-5 h-5" />
              Ver mis certificados
            </motion.button>
          </div>

        </div>
      </section>

      {/* MODAL REDISEÑADO CON ACORDEÓN Y BLOQUEO DE SCROLL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#211129]/70 backdrop-blur-md p-4 sm:p-6 overscroll-none"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#F8F4FA] w-full max-w-sm max-h-[85vh] rounded-[2.5rem] flex flex-col shadow-2xl overflow-hidden border border-[#E2D1EB]"
            >
              
              {/* Cabecera Limpia */}
              <div className="flex justify-between items-center px-7 py-6 bg-white border-b border-[#E2D1EB] z-10 shrink-0 rounded-t-[2.5rem]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F4EBF7] flex items-center justify-center">
                    <CertificateIcon className="w-4 h-4 text-[#8A64A3]" />
                  </div>
                  <h3 className="font-nunito font-black text-lg text-[#4A2559] tracking-tight">
                    Trayectoria
                  </h3>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsModalOpen(false)} 
                  className="bg-[#F4EBF7] p-2.5 rounded-full text-[#8A64A3] hover:bg-[#4A2559] hover:text-white transition-colors"
                >
                  <CloseIcon className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Lista de Certificados Interactivos (overscroll-contain para prevenir bugs móviles) */}
              <div className="overflow-y-auto overscroll-contain px-5 py-6 flex flex-col gap-4 hide-scrollbar">
                {CERTIFICADOS.map((cert, index) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, layout: { duration: 0.3 } }}
                    key={cert.id} 
                    onClick={() => toggleCert(cert.id)}
                    className="group bg-white p-5 rounded-2xl shadow-[0_2px_10px_rgba(74,37,89,0.03)] border border-[#E2D1EB] flex flex-col hover:border-[#8A64A3] transition-colors cursor-pointer"
                  >
                    {/* Fila principal del certificado */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex flex-col gap-1.5 flex-1">
                        <span className="self-start bg-[#F4EBF7] text-[#8A64A3] text-[9.5px] font-black px-2.5 py-1 rounded-md tracking-wider">
                          {cert.anio}
                        </span>
                        <h4 className="font-extrabold text-[13.5px] text-[#4A2559] leading-tight pr-2">
                          {cert.titulo}
                        </h4>
                      </div>
                      
                      {/* Icono de flecha animado */}
                      <div className="shrink-0 w-7 h-7 rounded-full bg-[#F8F4FA] flex items-center justify-center text-[#8A64A3] group-hover:bg-[#E2D1EB] transition-colors">
                        <ChevronIcon className="w-3.5 h-3.5" expanded={expandedCert === cert.id} />
                      </div>
                    </div>

                    {/* Descripción Desplegable (Acordeón) */}
                    <AnimatePresence>
                      {expandedCert === cert.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          className="overflow-hidden"
                        >
                          <hr className="border-[#F4EBF7] mb-3" />
                          <p className="text-[12.5px] font-semibold text-[#6A527A] leading-relaxed">
                            {cert.descripcion}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </motion.div>
                ))}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}