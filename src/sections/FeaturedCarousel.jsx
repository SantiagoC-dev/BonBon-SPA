// src/sections/FeaturedCarousel.jsx
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Tus imágenes exactas
import cupcake1 from '../assets/1.png'; 
import cupcake2 from '../assets/2.webp'; 

const PRODUCTS = [
  {
    id: 1,
    title: 'Ramo de',
    subtitle: 'cupcakes florales',
    desc: 'Cupcakes de chocolate rellenos y decorados con buttercream suizo.',
    img: cupcake1,
  },
  {
    id: 2,
    title: 'Caja de',
    subtitle: 'cupcakes especiales',
    desc: 'Deliciosa receta de zanahoria decorados con buttercream de queso crema.',
    img: cupcake2,
  }
];

export default function FeaturedCarousel() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.children[0].offsetWidth;
      const index = Math.round(scrollLeft / itemWidth);
      setActiveIndex(index);
    }
  };

  return (
    /* Aumentamos pt-20 en móviles y sm:pt-28 lg:pt-32 en pantallas grandes para darle mucho aire arriba */
    <section className="relative z-10 w-full pt-20 pb-12 sm:pt-28 lg:pt-32 sm:pb-16">
      
      {/* ==========================================
          TÍTULO DE LA SECCIÓN
          ========================================== */}
      <div className="max-w-[1200px] mx-auto px-6 mb-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-nunito font-black text-3xl sm:text-4xl text-bonbon-dark tracking-tight"
        >
          Productos que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A64A3] to-[#4A2559]">aman!</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[13px] sm:text-[15px] font-bold text-gray-400 mt-2 tracking-wide uppercase"
        >
          Los favoritos de nuestros clientes
        </motion.p>
      </div>

      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 gap-6 py-4"
      >
        {PRODUCTS.map((prod) => (
          <div 
            key={prod.id} 
            className="snap-center shrink-0 w-[88vw] max-w-[400px] relative flex items-center min-h-[240px] bg-white/50 backdrop-blur-md rounded-[2.5rem] p-6 sm:p-8 border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
          >
            {/* Lado Izquierdo: Textos */}
            <div className="w-[55%] z-30 relative">
              <h2 className="font-nunito font-black text-3xl sm:text-4xl text-bonbon-dark leading-[1.05] tracking-tight">
                {prod.title}
              </h2>
              <h3 className="font-nunito font-bold text-lg sm:text-xl text-bonbon-main leading-tight mt-1 mb-3">
                {prod.subtitle}
              </h3>
              
              <hr className="w-12 border-t-[3px] border-bonbon-main/40 my-3" />
              
              <p className="text-xs sm:text-[14px] font-bold text-bonbon-dark/85 leading-relaxed pr-1">
                {prod.desc}
              </p>
            </div>

            {/* Lado Derecho: Imagen */}
            <div className="absolute right-[-10%] sm:right-[-5%] top-1/2 -translate-y-1/2 w-[55%] sm:w-[50%] max-w-[200px] z-20 pointer-events-none">
              <motion.img
                initial={{ opacity: 0, x: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1.1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.1 }}
                src={prod.img}
                alt={prod.title}
                className="w-full h-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Contenedor de Paginación Mejorado */}
      <div className="flex flex-col items-center mt-4 sm:mt-6">
        
        {/* Texto sutil para indicar interacción */}
        <div className="flex items-center gap-1 text-[9px] font-black text-bonbon-dark/50 uppercase tracking-widest mb-3">
          <span>Desliza</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </div>

        {/* Cápsula de los puntitos */}
        <div className="flex justify-center gap-3 bg-white/60 backdrop-blur-md px-4 py-2.5 rounded-full shadow-md border border-white/50">
          {PRODUCTS.map((_, index) => (
            <motion.div 
              key={index}
              initial={false}
              animate={{
                width: activeIndex === index ? 28 : 8,
                backgroundColor: activeIndex === index ? '#8a64a3' : '#d8b4e2'
              }}
              transition={{ duration: 0.3 }}
              className="h-2 rounded-full"
            />
          ))}
        </div>
        
      </div>

    </section>
  );
}