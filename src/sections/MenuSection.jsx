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

// DATOS
const MAIN_PRODUCTS = [
  { id: 1, name: 'Caja Artesanal', description: 'Surtido de 12 pastelitos horneados esta mañana. Incluye rellenos de crema pastelera y ganache de chocolate.', price: 15, image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=300&auto=format&fit=crop' },
  { id: 2, name: 'Pastel de chocolate', description: 'Bizcocho ultra húmedo bañado en tres leches con relleno de ganache oscuro semi-amargo.', price: 25, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=300&auto=format&fit=crop' },
  { id: 3, name: 'Pastel de fresas', description: 'Nube de vainilla con capas de crema chantilly fresca y trozos de fresas naturales.', price: 22, image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=300&auto=format&fit=crop' },
  { id: 4, name: 'Pastel moka', description: 'Bizcocho esponjoso infusionado con café espresso de especialidad y cubierto de crema.', price: 24, image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=300&auto=format&fit=crop' },
];

const FEATURED_NEW = [
  { id: 10, name: 'Galletas Matcha', description: 'Galletas suaves horneadas con té verde matcha ceremonial importado y chocolate blanco.', price: 10, image: 'https://images.unsplash.com/photo-162146656027e-4b1bd88f4028?q=80&w=300&auto=format&fit=crop', badge: 'Nuevo' },
  { id: 11, name: 'Pastel Red Velvet', description: 'Auténtico terciopelo rojo con un sutil toque a cacao y el clásico frosting de queso crema.', price: 25, image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=300&auto=format&fit=crop', badge: 'Nuevo' },
];

const FEATURED_SALE = [
  { id: 20, name: 'Pastel de vainilla', description: 'El favorito de siempre. Preparado con extracto de vainilla puro y mantequilla.', price: 12, image: 'https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=300&auto=format&fit=crop', badge: 'Oferta' },
  { id: 21, name: 'Pastelitos mixtos', description: 'Caja perfecta para compartir: incluye 6 croissants de almendra y 6 muffins esponjosos.', price: 10, image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=300&auto=format&fit=crop', badge: 'Oferta' },
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
    <section className="relative z-20 bg-[#fdfaff] px-6 pt-16 pb-16 overflow-hidden rounded-t-[3rem] -mt-10 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
      
      {/* =========================================
          FONDO ESTRELLAS Y CORAZONES MÁS VISIBLES
          ========================================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.12] text-bonbon-main">
        <StarBgIcon className="absolute top-[8%] left-[8%] w-24 h-24 rotate-12" />
        <HeartBgIcon className="absolute top-[45%] right-[2%] w-32 h-32 -rotate-12" />
        <StarBgIcon className="absolute bottom-[18%] left-[10%] w-20 h-20 rotate-45" />
        <HeartBgIcon className="absolute bottom-[5%] right-[20%] w-16 h-16 rotate-[30deg]" />
      </div>

      <div className="relative z-10">
        
        {/* Catálogo Principal */}
        <h2 className="font-nunito font-black text-3xl text-bonbon-dark mb-6 tracking-tight leading-tight">
          Nuestro Catálogo <br />
          <span className="text-bonbon-main text-xl font-bold">& Menú Completo</span>
        </h2>

        <div className="relative w-screen -mx-6 mb-4">
          <div 
            ref={mainScrollRef}
            onScroll={handleMainScroll}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pl-6 gap-4 pr-10 pb-4 pt-2"
          >
            {MAIN_PRODUCTS.map((p) => (
              <div 
                key={p.id} 
                className="snap-center shrink-0 w-[70vw] max-w-[260px] relative hover:scale-[1.02] transition-transform duration-300"
              >
                <ProductCard {...p} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mb-14">
          {MAIN_PRODUCTS.map((_, index) => (
            <motion.div 
              key={index}
              initial={false}
              animate={{
                width: activeMainIndex === index ? 24 : 8,
                backgroundColor: activeMainIndex === index ? '#8a64a3' : '#d8b4e2'
              }}
              transition={{ duration: 0.3 }}
              className="h-1.5 rounded-full" 
            />
          ))}
        </div>

        {/* Items Destacados */}
        <h2 className="font-nunito font-black text-3xl text-bonbon-dark mb-6 tracking-tight leading-tight">
          Joyas de la Corona <br />
          <span className="text-bonbon-main text-xl font-bold">& Items Destacados</span>
        </h2>

        <div className="flex gap-1 mb-8 bg-bonbon-pale/30 backdrop-blur-sm p-1.5 rounded-full w-full max-w-sm mx-auto border border-bonbon-pale text-center shadow-inner">
          {['nuevos', 'descuento'].map((tabItem) => {
            const isActive = tab === tabItem;
            return (
              <button
                key={tabItem}
                onClick={() => changeTab(tabItem)}
                className={`relative flex-1 font-bold text-sm py-3 rounded-full capitalize transition-colors duration-300 z-10 ${isActive ? 'text-white' : 'text-bonbon-dark/50 hover:text-bonbon-main'}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="tabUnderline"
                    className="absolute inset-0 bg-gradient-to-r from-bonbon-main to-bonbon-dark rounded-full z-[-1]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {tabItem === 'nuevos' ? 'Nuevos agregados' : 'En descuento'}
              </button>
            );
          })}
        </div>

        <div className="relative w-screen -mx-6 mb-4">
          <AnimatePresence mode="wait">
            <motion.div 
              key={tab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              
              ref={featuredScrollRef}
              onScroll={handleFeaturedScroll}
              className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pl-6 gap-4 pr-10 pb-4 pt-2"
            >
              {featured.map((p) => (
                <div 
                  key={p.id} 
                  className="snap-center shrink-0 w-[70vw] max-w-[260px] relative hover:scale-[1.02] transition-transform duration-300"
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
                backgroundColor: activeFeaturedIndex === index ? '#8a64a3' : '#d8b4e2'
              }}
              transition={{ duration: 0.3 }}
              className="h-1.5 rounded-full" 
            />
          ))}
        </div>

      </div>
    </section>
  );
}