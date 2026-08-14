// src/sections/ShowcaseSection.jsx
import { motion } from 'framer-motion';

// Íconos Sólidos Premium (Mejor visibilidad y estética)
const QualityIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
  </svg>
);

const StarIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

const HeartIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
  </svg>
);

// Configuraciones de animación ajustadas para máxima fluidez
const FEATURES = [
  { 
    Icon: QualityIcon, 
    title: 'Calidad', 
    desc: 'Ingredientes premium',
    animate: { scale: [1, 1.05, 1] },
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } 
  },
  { 
    Icon: StarIcon, 
    title: 'Diseño', 
    desc: '100% personalizado',
    animate: { scale: [1, 1.05, 1] },
    transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } 
  },
  { 
    Icon: HeartIcon, 
    title: 'Sabor', 
    desc: 'Recetas exclusivas',
    animate: { scale: [1, 1.05, 1] },
    transition: { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 } 
  },
];

export default function ShowcaseSection() {
  return (
    <section className="relative z-20 bg-[#835894] w-full py-12 sm:py-16 px-6">
      
      <style>{`
        @keyframes waveDriftLeft {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes waveDriftRight {
          0%   { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        
        .wave-top-back { animation: waveDriftLeft 20s linear infinite; }
        .wave-top-front { animation: waveDriftRight 15s linear infinite; }
        
        .wave-bottom-back { animation: waveDriftRight 22s linear infinite; }
        .wave-bottom-front { animation: waveDriftLeft 18s linear infinite; }

        @media (prefers-reduced-motion: reduce) {
          .wave-top-back, .wave-top-front, .wave-bottom-back, .wave-bottom-front { animation: none; }
        }
      `}</style>

      {/* ====================================================
          OLA SUPERIOR 
          ==================================================== */}
      <div className="absolute bottom-full left-0 w-full h-[36px] sm:h-[48px] overflow-hidden leading-none pointer-events-none translate-y-[1px]">
        <div className="wave-top-back absolute inset-0 w-[200%] h-full flex">
          <svg viewBox="0 0 2880 120" className="w-full h-full block" preserveAspectRatio="none">
            <path fill="#835894" fillOpacity="0.4" d="M0,60 C288,20 432,20 720,60 C1008,100 1152,100 1440,60 C1728,20 1872,20 2160,60 C2448,100 2592,100 2880,60 V120 H0 Z" />
          </svg>
        </div>
        <div className="wave-top-front absolute inset-0 w-[200%] h-full flex">
          <svg viewBox="0 0 2880 120" className="w-full h-full block" preserveAspectRatio="none">
            <path fill="#835894" d="M0,60 C288,100 432,100 720,60 C1008,20 1152,20 1440,60 C1728,100 1872,100 2160,60 C2448,20 2592,20 2880,60 V120 H0 Z" />
          </svg>
        </div>
      </div>

      {/* ====================================================
          CONTENIDO PRINCIPAL RESPONSIVO
          ==================================================== */}
      <div className="max-w-[600px] mx-auto relative z-10 flex items-center justify-center">
        <div className="flex flex-row justify-between items-start text-center gap-2 sm:gap-6 w-full">
          {FEATURES.map(({ Icon, title, desc, animate, transition }, i) => (
            <div key={i} className="flex flex-col items-center flex-1">
              
              {/* Contenedor animado que garantiza estabilidad en computadoras y móviles */}
              <motion.div 
                animate={animate}
                transition={transition}
                className="w-14 h-14 sm:w-16 sm:h-16 mb-3 rounded-full bg-white flex items-center justify-center text-[#835894] shadow-lg origin-center"
              >
                <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
              </motion.div>
              
              <h3 className="text-sm sm:text-base font-black text-white mb-1 tracking-wide">
                {title}
              </h3>
              
              <p className="text-[10px] sm:text-xs font-bold text-[#E5D4ED] leading-tight max-w-[120px]">
                {desc}
              </p>
              
            </div>
          ))}
        </div>
      </div>

      {/* ====================================================
          OLA INFERIOR 
          ==================================================== */}
      <div className="absolute top-full left-0 w-full h-[36px] sm:h-[48px] overflow-hidden leading-none pointer-events-none -mt-[1px]">
        <div className="wave-bottom-back absolute inset-0 w-[200%] h-full flex">
          <svg viewBox="0 0 2880 120" className="w-full h-full block" preserveAspectRatio="none">
            <path fill="#835894" fillOpacity="0.4" d="M0,60 C288,100 432,100 720,60 C1008,20 1152,20 1440,60 C1728,100 1872,100 2160,60 C2448,20 2592,20 2880,60 V0 H0 Z" />
          </svg>
        </div>
        <div className="wave-bottom-front absolute inset-0 w-[200%] h-full flex">
          <svg viewBox="0 0 2880 120" className="w-full h-full block" preserveAspectRatio="none">
            <path fill="#835894" d="M0,60 C288,20 432,20 720,60 C1008,100 1152,100 1440,60 C1728,20 1872,20 2160,60 C2448,100 2592,100 2880,60 V0 H0 Z" />
          </svg>
        </div>
      </div>

    </section>
  );
}