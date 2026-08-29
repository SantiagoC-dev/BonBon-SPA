// src/sections/HeroSection.jsx
import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight } from '../components/Icons';
import { Link } from 'react-router-dom';

// Tus imágenes
import bonBonTexto from '../assets/BonBon.png';
import PastelImage from '../assets/PastelVin.png';

// Íconos para la barra de navegación superior
const MenuIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

const CalendarIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
  </svg>
);

// Orquestación de entrada: los hijos se revelan en cascada, no cada uno
// con su propio delay manual. Un único gesto coordinado, no efectos sueltos.
const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const riseIn = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Función para hacer scroll suave hasta el formulario
  const scrollToForm = () => {
    const formSection = document.getElementById('formulario-pedido');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-8 pb-28 sm:pb-32 px-4 sm:px-6 flex flex-col min-h-[95svh] lg:min-h-screen overflow-hidden">

      {/* ESTILOS CSS NATIVOS PARA RENDIMIENTO EXTREMO */}
      <style>{`
        @keyframes heroWaveDriftA {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes heroWaveDriftB {
          0%   { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        
        /* NUEVA ANIMACIÓN 3D DE LEVITACIÓN (MÁS PROFESIONAL) */
        @keyframes heroCakeLevitate {
          0%   { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
          33%  { transform: translate3d(-8px, -15px, 0) rotate(-2deg) scale(1.02); }
          66%  { transform: translate3d(8px, -8px, 0) rotate(2deg) scale(0.98); }
          100% { transform: translate3d(0, 0, 0) rotate(0deg) scale(1); }
        }
        
        .hero-wave-back { animation: heroWaveDriftA 22s linear infinite; }
        .hero-wave-front { animation: heroWaveDriftB 17s linear infinite; }
        .hero-cake-levitate { animation: heroCakeLevitate 8s ease-in-out infinite; }
        
        @media (prefers-reduced-motion: reduce) {
          .hero-wave-back, .hero-wave-front, .hero-cake-levitate { animation: none; }
        }
      `}</style>

      <h1 className="sr-only">BonBon repostería</h1>

      {/* ===========================================
          BARRA DE NAVEGACIÓN (Top Bar)
          =========================================== */}
      <header className="relative z-50 w-full max-w-[1200px] mx-auto flex justify-between items-center mb-10 sm:mb-14 lg:mb-20">

        {/* Logo en PNG (Ajustado para verse mucho más grande) */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <img
            src={bonBonTexto}
            alt="Bon Bon Logo"
            // Clases de altura incrementadas drásticamente para compensar el padding del PNG
            className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain transform origin-left"
          />
        </motion.div>

        {/* Botón de Hamburguesa */}
        <div className="relative">
          <motion.button
            initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="w-10 h-10 flex items-center justify-end text-[#4A2559] cursor-pointer rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A64A3] focus-visible:ring-offset-2"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {isMenuOpen ? <CloseIcon className="w-7 h-7 lg:w-8 lg:h-8" /> : <MenuIcon className="w-7 h-7 lg:w-8 lg:h-8" />}
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.97 }}
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
                className="absolute top-12 right-0 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white p-2 w-[min(220px,80vw)]"
              >
                <Link
                  to="/talleres"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 p-3.5 hover:bg-[#F5EDF9] rounded-xl transition-colors text-[#4A2559] font-black text-[13px] uppercase tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A64A3]"
                >
                  <div className="w-8 h-8 rounded-full bg-[#FCF5F9] flex items-center justify-center text-[#8A64A3]">
                    <CalendarIcon className="w-4 h-4" />
                  </div>
                  Talleres
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>


      {/* ===========================================
          CONTENIDO PRINCIPAL (Composición Responsiva)
          =========================================== */}
      <motion.div
        variants={heroContainerVariants}
        initial={shouldReduceMotion ? false : "hidden"}
        animate="visible"
        className="flex-1 flex flex-col justify-center items-center relative z-10 w-full max-w-[1200px] mx-auto pb-4"
      >

        {/* Contenedor que cambia a fila en pantallas lg (desktop) */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between text-center lg:text-left relative mt-4 sm:mt-8 gap-8 lg:gap-12">

          {/* BLOQUE DE TEXTOS (Izquierda en PC, Centro en Móvil) */}
          <div className="flex flex-col items-center lg:items-start max-w-[550px] lg:max-w-[600px] w-full order-2 lg:order-1">

            {/* 1. Título Superior */}
            <motion.h2
              variants={riseIn}
              className="font-nunito font-black text-[clamp(2.75rem,10vw,6rem)] text-[#3A1D47] leading-[0.95] tracking-tight self-start ml-1 sm:ml-4 lg:ml-0 relative z-10 px-1"
            >
              Tu pastel,
            </motion.h2>

            {/* 2. Título Inferior */}
            <motion.h2
              variants={riseIn}
              className="font-nunito font-black text-[clamp(2.75rem,10vw,6rem)] text-[#8A64A3] leading-[0.95] tracking-tight self-end lg:self-start mr-1 sm:mr-4 lg:mr-0 relative z-10 mb-6 sm:mb-8 lg:mb-12 px-1"
            >
              tu estilo.
            </motion.h2>

            {/* Subtítulo Descriptivo */}
            <motion.p
              variants={riseIn}
              className="text-[#6A527A] font-extrabold mb-8 lg:mb-10 text-[15px] sm:text-[17px] lg:text-[19px] leading-relaxed max-w-[92%] sm:max-w-[90%] lg:max-w-md px-1"
            >
              Descubre y cotiza fácil para personalizar tu pedido y disfruta de la experiencia de Bon Bon.
            </motion.p>

            {/* BOTÓN PREMIUM */}
            <motion.button
              variants={riseIn}
              onClick={scrollToForm}
              whileHover={{ scale: 1.03, y: -2, boxShadow: "0px 10px 25px rgba(74,37,89,0.25)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="group relative flex items-center gap-3 bg-gradient-to-r from-[#8A64A3] to-[#4A2559] text-white font-black text-[15px] sm:text-[16px] lg:text-[18px] rounded-full pl-6 pr-2 lg:pl-8 lg:pr-3 py-2 lg:py-3 shadow-[0_8px_15px_rgba(138,100,163,0.3)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A2559] focus-visible:ring-offset-2"
            >
              <span className="tracking-wide">Hacer pedido</span>

              <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110">
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
              </div>
            </motion.button>

          </div>

          {/* BLOQUE DE IMAGEN (Derecha en PC, Centro-Arriba en Móvil) */}
          <motion.div
            variants={riseIn}
            className="w-full flex justify-center lg:justify-end -my-4 sm:-my-6 lg:my-0 relative z-20 order-1 lg:order-2 flex-1"
          >
            <img
              src={PastelImage}
              alt="Pastel BonBon"
              /* Aquí aplicamos la nueva clase de animación 3D */
              className="hero-cake-levitate w-full max-w-[240px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[450px] xl:max-w-[550px] object-contain drop-shadow-2xl"
            />
          </motion.div>

        </div>
      </motion.div>
      
    </section>
  );
}