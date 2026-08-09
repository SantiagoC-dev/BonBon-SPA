// src/sections/ShowcaseSection.jsx
import { motion } from 'framer-motion';

// Íconos limpios y estables
const SunIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
  </svg>
);

const StarIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
  </svg>
);

const HeartIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
  </svg>
);

const FEATURES = [
  { 
    Icon: SunIcon, 
    title: 'Calidad', 
    desc: 'Ingredientes premium',
    animate: { rotate: 360 },
    transition: { duration: 12, repeat: Infinity, ease: "linear" } 
  },
  { 
    Icon: StarIcon, 
    title: 'Diseño', 
    desc: '100% personalizado',
    animate: { scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] },
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } 
  },
  { 
    Icon: HeartIcon, 
    title: 'Sabor', 
    desc: 'Recetas exclusivas',
    animate: { scale: [1, 1.2, 1] },
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } 
  },
];

export default function ShowcaseSection() {
  return (
    /* Fondo Morado Fuerte (#4A2559) */
    <section className="relative z-20 bg-[#4A2559] w-full py-12 sm:py-16 px-6">
      
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

      {/* 
        ====================================================
        OLA SUPERIOR (Morado Fuerte invadiendo hacia arriba)
        ====================================================
      */}
      <div className="absolute bottom-full left-0 w-full h-[36px] sm:h-[48px] overflow-hidden leading-none pointer-events-none translate-y-[1px]">
        
        {/* Capa trasera: Mismo morado con opacidad */}
        <div className="wave-top-back absolute inset-0 w-[200%] h-full flex">
          <svg viewBox="0 0 2880 120" className="w-full h-full block" preserveAspectRatio="none">
            <path fill="#4A2559" fillOpacity="0.4" d="M0,60 C288,20 432,20 720,60 C1008,100 1152,100 1440,60 C1728,20 1872,20 2160,60 C2448,100 2592,100 2880,60 V120 H0 Z" />
          </svg>
        </div>

        {/* Capa delantera: Morado sólido, sin sombras */}
        <div className="wave-top-front absolute inset-0 w-[200%] h-full flex">
          <svg viewBox="0 0 2880 120" className="w-full h-full block" preserveAspectRatio="none">
            <path fill="#4A2559" d="M0,60 C288,100 432,100 720,60 C1008,20 1152,20 1440,60 C1728,100 1872,100 2160,60 C2448,20 2592,20 2880,60 V120 H0 Z" />
          </svg>
        </div>
      </div>

      {/* 
        ====================================================
        CONTENIDO PRINCIPAL
        ====================================================
      */}
      <div className="max-w-sm mx-auto relative z-10 flex items-center justify-center">
        <div className="flex justify-between items-center text-center gap-2 w-full">
          {FEATURES.map(({ Icon, title, desc, animate, transition }, i) => (
            <div key={i} className="flex flex-col items-center flex-1">
              
              <motion.div 
                animate={animate}
                transition={transition}
                /* Fondo blanco para contraste extremo con el ícono en morado */
                className="w-14 h-14 sm:w-16 sm:h-16 mb-3 rounded-full bg-white flex items-center justify-center text-[#4A2559] shadow-lg"
              >
                <Icon className="w-7 h-7" />
              </motion.div>
              
              {/* Títulos en blanco para que resalten sobre el morado oscuro */}
              <h3 className="text-sm font-black text-white mb-1">
                {title}
              </h3>
              {/* Descripción en un lila muy clarito para mantener armonía */}
              <p className="text-[10px] sm:text-[11px] font-bold text-[#E5D4ED] leading-tight">
                {desc}
              </p>
              
            </div>
          ))}
        </div>
      </div>

      {/* 
        ====================================================
        OLA INFERIOR (Morado Fuerte invadiendo hacia abajo)
        ====================================================
      */}
      <div className="absolute top-full left-0 w-full h-[36px] sm:h-[48px] overflow-hidden leading-none pointer-events-none -mt-[1px]">
        
        <div className="wave-bottom-back absolute inset-0 w-[200%] h-full flex">
          <svg viewBox="0 0 2880 120" className="w-full h-full block" preserveAspectRatio="none">
            <path fill="#4A2559" fillOpacity="0.4" d="M0,60 C288,100 432,100 720,60 C1008,20 1152,20 1440,60 C1728,100 1872,100 2160,60 C2448,20 2592,20 2880,60 V0 H0 Z" />
          </svg>
        </div>

        <div className="wave-bottom-front absolute inset-0 w-[200%] h-full flex">
          <svg viewBox="0 0 2880 120" className="w-full h-full block" preserveAspectRatio="none">
            <path fill="#4A2559" d="M0,60 C288,20 432,20 720,60 C1008,100 1152,100 1440,60 C1728,20 1872,20 2160,60 C2448,100 2592,100 2880,60 V0 H0 Z" />
          </svg>
        </div>
      </div>

    </section>
  );
}