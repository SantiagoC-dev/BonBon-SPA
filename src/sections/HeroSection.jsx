// src/sections/HeroSection.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from '../components/Icons';

// Usamos el logo que ya tienes
import bonLogo from '../assets/BonLogo.svg'; 

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

  return (
    <section className="relative pt-8 pb-32 px-6 flex flex-col min-h-[95vh] overflow-hidden">

      {/* 
        ====================================================
        ESTILOS CSS NATIVOS PARA RENDIMIENTO EXTREMO
        ====================================================
      */}
      <style>{`
        @keyframes heroWaveDriftA {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes heroWaveDriftB {
          0%   { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .hero-wave-back {
          animation: heroWaveDriftA 20s linear infinite;
        }
        .hero-wave-front {
          animation: heroWaveDriftB 15s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-wave-back, .hero-wave-front { animation: none; }
        }
      `}</style>

      <h1 className="sr-only">BonBon repostería</h1>

      {/* 
        ===========================================
        BARRA DE NAVEGACIÓN (Top Bar)
        ===========================================
      */}
      <header className="relative z-50 w-full max-w-[1200px] mx-auto flex justify-between items-center mb-4">
        
        {/* Logo Textual */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-nunito font-black text-2xl tracking-tight text-bonbon-dark uppercase">
            BonBon
          </span>
        </motion.div>

        {/* Botón de Hamburguesa */}
        <div className="relative">
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 flex items-center justify-end text-bonbon-dark cursor-pointer transition-transform hover:scale-105"
          >
            {isMenuOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
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
                <a 
                  href="#eventos" 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 p-3.5 hover:bg-bonbon-pale/50 rounded-xl transition-colors text-bonbon-dark font-black text-[13px] uppercase tracking-wide"
                >
                  <div className="w-8 h-8 rounded-full bg-bonbon-pale flex items-center justify-center text-bonbon-main">
                    <CalendarIcon className="w-4 h-4" />
                  </div>
                  Eventos
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>


      {/* 
        ===========================================
        CONTENIDO PRINCIPAL 
        ===========================================
      */}
      <div className="flex-1 flex flex-col justify-center items-center relative z-10 w-full max-w-[1200px] mx-auto pb-4">
        
        <div className="w-full max-w-[450px] flex flex-col items-start text-left">
          
          {/* Imagen Flotante */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex justify-center mb-8 mt-2"
          >
            <motion.img 
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src="https://cdn.pixabay.com/photo/2022/10/24/18/43/cupcake-7544084_1280.png" 
              alt="Pastel BonBon" 
              className="w-full max-w-[280px] sm:max-w-[320px] object-contain drop-shadow-2xl"
            />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="font-nunito font-black text-[2.75rem] sm:text-[3.25rem] text-bonbon-dark leading-[1.05] tracking-tight mb-3"
          >
            Endulzamos tus <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bonbon-main to-[#6b4782]">
              Momentos
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-bonbon-dark/70 font-extrabold mb-8 text-[15px] sm:text-[16px] leading-relaxed max-w-[90%]"
          >
            Pasteles y cupcakes personalizados para momentos especiales.
          </motion.p>

          {/* ===========================================
              NUEVO BOTÓN PREMIUM
              =========================================== */}
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="group relative flex items-center gap-3 bg-gradient-to-r from-bonbon-main to-[#6b4782] text-white font-bold text-sm sm:text-base rounded-full pl-6 pr-2 py-2 shadow-[0_8px_20px_rgba(138,100,163,0.3)] cursor-pointer border border-white/20"
          >
            <span className="tracking-wide">Hacer pedido</span>
            
            {/* Círculo contenedor para la flecha (le da un toque muy Apple/Premium) */}
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


      {/* 
        ===========================================
        OLAS ANIMADAS (Sincronizadas con Showcase)
        ===========================================
      */}
      <div className="absolute bottom-0 left-0 w-full h-[36px] sm:h-[48px] overflow-hidden leading-none pointer-events-none translate-y-[1px]">

        {/* Capa trasera */}
        <div className="hero-wave-back absolute inset-0 w-[200%] h-full flex">
          <svg viewBox="0 0 2880 120" className="w-full h-full block" preserveAspectRatio="none">
            <path
              fill="#ffffff"
              fillOpacity="0.5"
              d="M0,60 C288,20 432,20 720,60 C1008,100 1152,100 1440,60 C1728,20 1872,20 2160,60 C2448,100 2592,100 2880,60 V120 H0 Z"
            />
          </svg>
        </div>

        {/* Capa delantera */}
        <div className="hero-wave-front absolute inset-0 w-[200%] h-full flex [filter:drop-shadow(0_-4px_6px_rgba(138,100,163,0.06))]">
          <svg viewBox="0 0 2880 120" className="w-full h-full block" preserveAspectRatio="none">
            <path
              fill="#ffffff"
              d="M0,60 C288,100 432,100 720,60 C1008,20 1152,20 1440,60 C1728,100 1872,100 2160,60 C2448,20 2592,20 2880,60 V120 H0 Z"
            />
          </svg>
        </div>

      </div>
      
    </section>
  );
}