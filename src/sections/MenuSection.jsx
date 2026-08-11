// src/sections/MenuSection.jsx
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';

// ÍCONOS DE FONDO (Estrellas y Corazones)
const StarBgIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
  </svg>
);
const HeartBgIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
  </svg>
);

// DATOS ESTRATÉGICOS DEL CATÁLOGO
const MAIN_PRODUCTS = [
  { id: 1, name: 'Pastel Personalizado', description: 'Diseño a tu medida. Elige tamaño, sabor de pan y relleno. Cobertura impecable con nuestro característico buttercream suizo.', price: 450, image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=300&auto=format&fit=crop' },
  { id: 2, name: 'Ramo Cupcakes Florales', description: 'Hermoso arreglo comestible. Esponjosos cupcakes decorados a mano con detalladas flores de buttercream de merengue suizo.', price: 380, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=300&auto=format&fit=crop' },
  { id: 3, name: 'Cupcakes de Zanahoria', description: 'Nuestra receta especial y especiada de zanahoria, coronados con un suave, equilibrado y delicioso buttercream de queso crema.', price: 220, image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=300&auto=format&fit=crop' },
  { id: 4, name: 'Caja de Cupcakes', description: 'La opción perfecta para cualquier antojo. Disponibles en sabores clásicos, rellenos y decorados con merengue suizo.', price: 180, image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=300&auto=format&fit=crop' },
];

const FEATURED_NEW = [
  { id: 10, name: 'Pastel Dulce de Leche', description: 'Exquisito pastel de vainilla relleno con abundante dulce de leche artesanal y cubierto con nuestro buttercream especial.', price: 500, image: 'https://images.unsplash.com/photo-162146656027e-4b1bd88f4028?q=80&w=300&auto=format&fit=crop', badge: 'Nuevo' },
  { id: 11, name: 'Cupcakes de Zanahoria', description: 'Cupcakes de zanahoria decorados con buttercream de queso crema y detalles premium.', price: 250, image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=300&auto=format&fit=crop', badge: 'Nuevo' },
];

const FEATURED_SALE = [
  { id: 20, name: 'Pastel Ganache (21cm)', description: 'Pastel personalizado de 21cm, con exquisito relleno de ganache semiamargo. Ideal para celebraciones inolvidables.', price: 580, oldPrice: 650, image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=300&auto=format&fit=crop', badge: 'Oferta' },
  { id: 21, name: 'Ramo Mixto (12pz)', description: 'Impresionante ramo floral de 12 piezas. Sabores mixtos, rellenos y decorados con arte botánico en buttercream.', price: 420, oldPrice: 480, image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=300&auto=format&fit=crop', badge: 'Oferta' },
];

export default function MenuSection() {
  const [tab, setTab] = useState('nuevos');
  const featured = tab === 'nuevos' ? FEATURED_NEW : FEATURED_SALE;

  const [activeMainIndex, setActiveMainIndex] = useState(0);
  const [activeFeaturedIndex, setActiveFeaturedIndex] = useState(0);
  
  const mainScrollRef = useRef(null);
  const featuredScrollRef = useRef(null);

  const handleMainScroll = () => {
    if (mainScrollRef.current) {
      const scrollLeft = mainScrollRef.current.scrollLeft;
      const itemWidth = mainScrollRef.current.children[0].offsetWidth + 16; 
      const index = Math.round(scrollLeft / itemWidth);
      setActiveMainIndex(index);
    }
  };

  const handleFeaturedScroll = () => {
    if (featuredScrollRef.current) {
      const scrollLeft = featuredScrollRef.current.scrollLeft;
      const itemWidth = featuredScrollRef.current.children[0].offsetWidth + 16;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveFeaturedIndex(index);
    }
  };

  const changeTab = (newTab) => {
    setTab(newTab);
    setActiveFeaturedIndex(0); 
  };

  return (
    <section className="relative z-20 w-full pt-16 pb-16 sm:pt-24 sm:pb-24 mt-0">
      
      <style>{`
        @keyframes menuWaveDriftLeft {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes menuWaveDriftRight {
          0%   { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .menu-wave-top-back { animation: menuWaveDriftLeft 24s linear infinite; }
        .menu-wave-top-front { animation: menuWaveDriftRight 18s linear infinite; }
        .menu-wave-bottom-back { animation: menuWaveDriftRight 28s linear infinite; }
        .menu-wave-bottom-front { animation: menuWaveDriftLeft 20s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .menu-wave-top-back, .menu-wave-top-front, .menu-wave-bottom-back, .menu-wave-bottom-front { animation: none; }
        }
      `}</style>

      {/* ==========================================
          OLA SUPERIOR (Transición líquida)
          ========================================== */}
      <div className="absolute bottom-full left-0 w-full h-[36px] sm:h-[48px] overflow-hidden leading-none pointer-events-none translate-y-[1px]">
        <div className="menu-wave-top-back absolute inset-0 w-[200%] h-full flex">
          <svg viewBox="0 0 2880 120" className="w-full h-full block" preserveAspectRatio="none">
            <path fill="#835894" fillOpacity="0.6" d="M0,60 C288,20 432,20 720,60 C1008,100 1152,100 1440,60 C1728,20 1872,20 2160,60 C2448,100 2592,100 2880,60 V120 H0 Z" />
          </svg>
        </div>
        <div className="menu-wave-top-front absolute inset-0 w-[200%] h-full flex">
          <svg viewBox="0 0 2880 120" className="w-full h-full block" preserveAspectRatio="none">
            <path fill="#835894" d="M0,60 C288,100 432,100 720,60 C1008,20 1152,20 1440,60 C1728,100 1872,100 2160,60 C2448,20 2592,20 2880,60 V120 H0 Z" />
          </svg>
        </div>
      </div>

      {/* =========================================
          FONDO MÁGICO ANIMADO
          ========================================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.18] text-[#8A64A3]">
        <motion.div animate={{ y: [0, -15, 0], rotate: [12, 18, 12] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="absolute top-[8%] left-[8%]">
          <StarBgIcon className="w-24 h-24" />
        </motion.div>
        <motion.div animate={{ y: [0, 20, 0], rotate: [-12, -5, -12] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }} className="absolute top-[45%] right-[2%]">
          <HeartBgIcon className="w-32 h-32" />
        </motion.div>
        <motion.div animate={{ y: [0, -10, 0], rotate: [45, 50, 45] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="absolute bottom-[18%] left-[10%]">
          <StarBgIcon className="w-20 h-20" />
        </motion.div>
        <motion.div animate={{ y: [0, 15, 0], rotate: [30, 20, 30] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} className="absolute bottom-[5%] right-[20%]">
          <HeartBgIcon className="w-16 h-16" />
        </motion.div>
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto">
        
        {/* ==========================================
            SECCIÓN: CATÁLOGO PRINCIPAL
            ========================================== */}
        <div className="px-6 text-center sm:text-left mb-6">
          <h2 className="font-nunito font-black text-3xl sm:text-4xl text-[#3A1D47] tracking-tight leading-tight">
            Nuestro Catálogo <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A64A3] to-[#4A2559] text-xl sm:text-2xl font-black block mt-1">
              & Menú Completo
            </span>
          </h2>
        </div>

        <div className="relative w-full mb-4">
          <div 
            ref={mainScrollRef}
            onScroll={handleMainScroll}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pl-6 gap-5 pr-6 pb-8 pt-2"
          >
            {MAIN_PRODUCTS.map((p) => (
              <div 
                key={p.id} 
                className="snap-center shrink-0 w-[75vw] max-w-[280px] relative hover:scale-[1.02] transition-transform duration-300"
              >
                <ProductCard {...p} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mb-16">
          {MAIN_PRODUCTS.map((_, index) => (
            <motion.div 
              key={index}
              initial={false}
              animate={{
                width: activeMainIndex === index ? 24 : 8,
                backgroundColor: activeMainIndex === index ? '#4A2559' : '#E2D1EB'
              }}
              transition={{ duration: 0.3 }}
              className="h-1.5 rounded-full" 
            />
          ))}
        </div>

        {/* ==========================================
            SECCIÓN: ITEMS DESTACADOS
            ========================================== */}
        <div className="px-6 text-center sm:text-left mb-8">
          <h2 className="font-nunito font-black text-3xl sm:text-4xl text-[#3A1D47] tracking-tight leading-tight">
            Joyas de la Corona <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A64A3] to-[#4A2559] text-xl sm:text-2xl font-black block mt-1">
              & Items Destacados
            </span>
          </h2>
        </div>

        {/* Selector de Pestañas Premium */}
        <div className="flex gap-1 mb-10 bg-white/60 backdrop-blur-md p-1.5 rounded-full w-[90%] max-w-sm mx-auto sm:mx-6 border border-[#F5EAF1] shadow-[0_8px_20px_rgba(74,37,89,0.04)]">
          {['nuevos', 'descuento'].map((tabItem) => {
            const isActive = tab === tabItem;
            return (
              <button
                key={tabItem}
                onClick={() => changeTab(tabItem)}
                className={`relative flex-1 font-bold text-[13px] sm:text-sm py-3.5 rounded-full capitalize transition-colors duration-300 z-10 ${isActive ? 'text-white' : 'text-[#8A64A3] hover:text-[#4A2559]'}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="tabUnderline"
                    className="absolute inset-0 bg-gradient-to-r from-[#8A64A3] to-[#4A2559] rounded-full z-[-1]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {tabItem === 'nuevos' ? 'Nuevos agregados' : 'En descuento'}
              </button>
            );
          })}
        </div>

        <div className="relative w-full mb-4">
          <AnimatePresence mode="wait">
            <motion.div 
              key={tab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              
              ref={featuredScrollRef}
              onScroll={handleFeaturedScroll}
              className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pl-6 gap-5 pr-6 pb-8 pt-2"
            >
              {featured.map((p) => (
                <div 
                  key={p.id} 
                  className="snap-center shrink-0 w-[75vw] max-w-[280px] relative hover:scale-[1.02] transition-transform duration-300"
                >
                  <ProductCard {...p} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-1">
          {featured.map((_, index) => (
            <motion.div 
              key={index}
              initial={false}
              animate={{
                width: activeFeaturedIndex === index ? 24 : 8,
                backgroundColor: activeFeaturedIndex === index ? '#4A2559' : '#E2D1EB'
              }}
              transition={{ duration: 0.3 }}
              className="h-1.5 rounded-full" 
            />
          ))}
        </div>

      </div>

      {/* ==========================================
          OLA INFERIOR (Transición líquida)
          ========================================== */}
      <div className="absolute top-full left-0 w-full h-[36px] sm:h-[48px] overflow-hidden leading-none pointer-events-none -mt-[1px]">
        <div className="menu-wave-bottom-back absolute inset-0 w-[200%] h-full flex">
          <svg viewBox="0 0 2880 120" className="w-full h-full block" preserveAspectRatio="none">
            <path fill="#835894" fillOpacity="0.6" d="M0,60 C288,100 432,100 720,60 C1008,20 1152,20 1440,60 C1728,100 1872,100 2160,60 C2448,20 2592,20 2880,60 V0 H0 Z" />
          </svg>
        </div>
        <div className="menu-wave-bottom-front absolute inset-0 w-[200%] h-full flex">
          <svg viewBox="0 0 2880 120" className="w-full h-full block" preserveAspectRatio="none">
            <path fill="#835894" d="M0,60 C288,20 432,20 720,60 C1008,100 1152,100 1440,60 C1728,20 1872,20 2160,60 C2448,100 2592,100 2880,60 V0 H0 Z" />
          </svg>
        </div>
      </div>

    </section>
  );
}