// src/sections/HeroSection.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from '../components/Icons';
import { Link } from 'react-router-dom';

// Tus imágenes
import bonBonTexto from '../assets/BonBon.svg'; 
import PastelImage from '../assets/PastelVin.svg';

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

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para hacer scroll suave hasta el formulario
  const scrollToForm = () => {
    const formSection = document.getElementById('formulario-pedido');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-8 pb-32 px-6 flex flex-col min-h-[95vh] overflow-hidden">

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
        .hero-wave-back { animation: heroWaveDriftA 20s linear infinite; }
        .hero-wave-front { animation: heroWaveDriftB 15s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .hero-wave-back, .hero-wave-front { animation: none; }
        }
      `}</style>

      <h1 className="sr-only">BonBon repostería</h1>

      {/* ===========================================
          BARRA DE NAVEGACIÓN (Top Bar)
          =========================================== */}
      {/* Aumentamos el margen inferior para separar la cabecera del contenido */}
      <header className="relative z-50 w-full max-w-[1200px] mx-auto flex justify-between items-center mb-12 sm:mb-20">
        
        {/* Logo en SVG */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <img 
            src={bonBonTexto} 
            alt="Bon Bon Logo" 
            className="h-16 sm:h-28 w-auto object-contain"
          />
        </motion.div>

        {/* Botón de Hamburguesa */}
        <div className="relative">
          <motion.button 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 flex items-center justify-end text-[#4A2559] cursor-pointer"
          >
            {/* Contenedor animado CORREGIDO para rotar el icono suavemente */}
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0"
              >
                {isMenuOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="absolute top-12 right-0 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white p-2 w-[220px]"
              >
              <Link 
                to="/talleres" 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 p-3.5 hover:bg-[#F5EDF9] rounded-xl transition-colors text-[#4A2559] font-black text-[13px] uppercase tracking-wide"
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
          CONTENIDO PRINCIPAL (Composición 3D)
          =========================================== */}
      <div className="flex-1 flex flex-col justify-center items-center relative z-10 w-full max-w-[1200px] mx-auto pb-4">
        
        <div className="w-full max-w-[550px] flex flex-col items-center text-center relative mt-4 sm:mt-8">
          
          {/* 1. Título Superior (Estático) */}
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="font-nunito font-black text-[3.5rem] sm:text-[4.5rem] text-[#3A1D47] leading-none tracking-tight self-start ml-2 sm:ml-6 relative z-10"
          >
            Tu pastel,
          </motion.h2>

          {/* 2. Imagen del Pastel (Animada/Flotando) 
              Usamos márgenes negativos (-my-6) para que se encime ligeramente en los textos */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex justify-center -my-6 sm:-my-6 relative z-20"
          >
            <motion.img 
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src={PastelImage} 
              alt="Pastel BonBon" 
              className="w-full max-w-[260px] sm:max-w-[340px] object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* 3. Título Inferior (Estático) */}
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="font-nunito font-black text-[3.5rem] sm:text-[4.5rem] text-[#8A64A3] leading-none tracking-tight self-end mr-2 sm:mr-6 relative z-10 mb-10"
          >
            tu estilo.
          </motion.h2>

          {/* Subtítulo Descriptivo */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-[#6A527A] font-extrabold mb-8 text-[15px] sm:text-[17px] leading-relaxed max-w-[90%]"
          >
            Empieza aquí: elige, personaliza y cotiza fácil.
          </motion.p>

          {/* ===========================================
              BOTÓN PREMIUM 
              =========================================== */}
          <motion.button 
            onClick={scrollToForm}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.03, y: -2, boxShadow: "0px 10px 25px rgba(74,37,89,0.25)" }}
            whileTap={{ scale: 0.96 }}
            className="group relative flex items-center gap-3 bg-gradient-to-r from-[#8A64A3] to-[#4A2559] text-white font-black text-[15px] sm:text-[16px] rounded-full pl-6 pr-2 py-2 shadow-[0_8px_15px_rgba(138,100,163,0.3)] cursor-pointer "
          >
            <span className="tracking-wide">Hacer pedido</span>
            
            <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform group-hover:scale-110">
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                className="flex items-center justify-center text-white"
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </div>
          </motion.button>

        </div>
      </div>


      {/* ===========================================
          OLAS ANIMADAS 
          =========================================== */}
      <div className="absolute bottom-0 left-0 w-full h-[36px] sm:h-[48px] overflow-hidden leading-none pointer-events-none translate-y-[1px]">
        <div className="hero-wave-back absolute inset-0 w-[200%] h-full flex">
          <svg viewBox="0 0 2880 120" className="w-full h-full block" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="0.5" d="M0,60 C288,20 432,20 720,60 C1008,100 1152,100 1440,60 C1728,20 1872,20 2160,60 C2448,100 2592,100 2880,60 V120 H0 Z" />
          </svg>
        </div>
        <div className="hero-wave-front absolute inset-0 w-[200%] h-full flex [filter:drop-shadow(0_-4px_6px_rgba(138,100,163,0.06))]">
          <svg viewBox="0 0 2880 120" className="w-full h-full block" preserveAspectRatio="none">
            <path fill="#ffffff" d="M0,60 C288,100 432,100 720,60 C1008,20 1152,20 1440,60 C1728,100 1872,100 2160,60 C2448,20 2592,20 2880,60 V120 H0 Z" />
          </svg>
        </div>
      </div>
      
    </section>
  );
}