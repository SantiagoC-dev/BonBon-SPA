// src/sections/AboutSection.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Iconos limpios en SVG
const PersonIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

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

// Datos de prueba para tus 6 certificados
const CERTIFICADOS = [
  { id: 1, titulo: "Master en Repostería Francesa", anio: "2023" },
  { id: 2, titulo: "Especialidad en Buttercream Suizo", anio: "2022" },
  { id: 3, titulo: "Diplomado en Pastelería Creativa", anio: "2021" },
  { id: 4, titulo: "Taller de Decoración Floral en Azúcar", anio: "2021" },
  { id: 5, titulo: "Certificación en Higiene y Manejo de Alimentos", anio: "2020" },
  { id: 6, titulo: "Bases de la Repostería Clásica", anio: "2018" },
];

export default function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* 
        SECCIÓN PRINCIPAL
        rounded-t-[3rem] hace que se monte elegantemente sobre el fondo anterior 
      */}
      <section className="relative z-20 bg-gradient-to-b from-bonbon-main to-[#6b4782] px-6 pt-16 pb-24 overflow-hidden rounded-t-[3rem] shadow-[0_-10px_30px_rgba(138,100,163,0.15)] mt-4">
        
        <div className="max-w-sm mx-auto relative z-10 text-white">
          <h2 className="font-nunito font-black text-3xl sm:text-4xl mb-8 leading-tight">
            Sobre la chef <br/>
            <span className="text-bonbon-pale text-2xl sm:text-3xl">& Certificados</span>
          </h2>

          <div className="flex items-center gap-5 mb-10">
            <p className="text-[14px] sm:text-[15px] font-semibold leading-relaxed text-white/90 flex-1">
              Amante de la repostería desde hace más de 8 años. Cada creación combina técnica perfecta, ingredientes de calidad premium y muchísimo amor.
            </p>
            
            {/* Contenedor de Foto de Perfil Premium */}
            <div className="w-20 h-20 rounded-full border-4 border-white/20 bg-white/10 flex items-center justify-center shrink-0 overflow-hidden shadow-xl backdrop-blur-sm">
              {/* Cuando tengas su foto real, descomenta esto y borra el PersonIcon: */}
              {/* <img src={fotoPerfil} alt="Chef" className="w-full h-full object-cover" /> */}
              <PersonIcon className="w-9 h-9 text-white/80" />
            </div>
          </div>

          <motion.button 
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center bg-white text-bonbon-dark font-black text-lg py-4 rounded-full shadow-lg transition-colors hover:bg-bonbon-pale"
          >
            Ver mis certificados
          </motion.button>
        </div>

        {/* Divisor Inferior (Ondas) hacia la siguiente sección */}
        <div className="absolute bottom-0 left-0 w-full translate-y-[1px]">
          <svg viewBox="0 0 1440 120" className="w-full h-auto fill-white" preserveAspectRatio="none">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,106.7C1248,107,1344,85,1392,74.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* 
        EL MODAL
        AnimatePresence permite animar componentes que se montan y desmontan del DOM
      */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // z-[100] asegura que esté por encima de ABSOLUTAMENTE TODO
            className="fixed inset-0 z-[100] flex items-center justify-center bg-bonbon-dark/80 backdrop-blur-sm p-4 sm:p-6"
            onClick={() => setIsModalOpen(false)} // Cierra el modal al hacer clic afuera
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()} // Evita que se cierre si tocan dentro de la caja
              className="bg-[#f8f1ff] w-full max-w-sm max-h-[85vh] rounded-[2.5rem] flex flex-col shadow-2xl overflow-hidden border-4 border-white"
            >
              
              {/* Cabecera Fija del Modal */}
              <div className="flex justify-between items-center px-6 py-5 bg-white border-b border-[#eedcff] z-10 shadow-sm">
                <h3 className="font-nunito font-black text-xl text-bonbon-dark">
                  Mis Certificados
                </h3>
                <motion.button 
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsModalOpen(false)} 
                  className="bg-bonbon-pale p-2 rounded-full text-bonbon-dark hover:bg-bonbon-main hover:text-white transition-colors"
                >
                  <CloseIcon className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Cuerpo del Modal con Scroll */}
              <div className="overflow-y-auto px-5 py-6 flex flex-col gap-4 hide-scrollbar bg-bonbon-pale/20">
                {CERTIFICADOS.map((cert) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    key={cert.id} 
                    className="bg-white p-4 rounded-2xl shadow-sm border border-[#eedcff] flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-bonbon-pale flex items-center justify-center text-bonbon-main shrink-0">
                      <CertificateIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-bonbon-dark leading-tight mb-1">
                        {cert.titulo}
                      </h4>
                      <span className="text-[11px] font-black text-bonbon-main uppercase tracking-wider">
                        {cert.anio}
                      </span>
                    </div>
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