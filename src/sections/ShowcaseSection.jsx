// src/sections/ShowcaseSection.jsx

// Íconos de ejemplo (limpios y estables)
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
  { Icon: SunIcon, title: 'Calidad', desc: 'Ingredientes premium' },
  { Icon: StarIcon, title: 'Diseño', desc: '100% personalizado' },
  { Icon: HeartIcon, title: 'Sabor', desc: 'Recetas exclusivas' },
];

export default function ShowcaseSection() {
  return (
    /* 
      EL SECRETO: bg-white y -mt-1 hacen que esta sección muerda la onda del Hero, 
      eliminando cualquier hueco morado de por medio.
    */
    <section className="relative z-10 bg-white w-full -mt-1 pt-6 pb-20 px-6">
      <div className="max-w-sm mx-auto">
        
        {/* Grid limpio, estático y sin animaciones que generen lag */}
        <div className="flex justify-between items-start text-center gap-2">
          {FEATURES.map(({ Icon, title, desc }, i) => (
            <div key={i} className="flex flex-col items-center flex-1">
              
              {/* Círculo sutil */}
              <div className="w-14 h-14 mb-3 rounded-full bg-bonbon-pale/40 flex items-center justify-center text-bonbon-main">
                <Icon className="w-7 h-7" />
              </div>
              
              {/* Textos */}
              <h3 className="text-sm font-black text-bonbon-dark mb-1">
                {title}
              </h3>
              <p className="text-[10px] sm:text-xs font-semibold text-gray-500 leading-tight">
                {desc}
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}