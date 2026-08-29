// src/sections/FeaturedCarousel.jsx
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Tus imágenes exactas
import cupcake1 from '../assets/Ramo.svg'; 
import cupcake2 from '../assets/Caja.png'; 
import pastelImg from '../assets/Pastel.svg'; // Agregamos la imagen para el 3er item

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
    subtitle: 'cupcakes florales',
    desc: 'Deliciosa caja de cupcakes florales rellenos y decorados con buttercream de merengue suizo.',
    img: cupcake2,
  },
  {
    id: 3,
    title: 'Pastel de',
    subtitle: 'chocolate',
    desc: 'Pastel de chocolate personalizado con relleno de ganache blanco decorado con buttercream de merengue suizo.',
    img: pastelImg,
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
    <section className="relative z-10 w-full pt-20 pb-12 sm:pt-28 lg:pt-32 sm:pb-16 overflow-hidden">
      
      {/* ==========================================
          TÍTULO DE LA SECCIÓN
          ========================================== */}
      <div className="max-w-[1200px] mx-auto px-6 mb-10 lg:mb-14 text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-nunito font-black text-3xl sm:text-4xl lg:text-5xl text-bonbon-dark tracking-tight"
        >
          Productos que aman!
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-bonbon-dark/70 font-extrabold mb-2 lg:mb-4 text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed max-w-[90%] mx-auto text-center"
        >
          Los favoritos de nuestros clientes
        </motion.p>
      </div>

      {/* ==========================================
          CARRUSEL RESPONSIVO
          ========================================== */}
      {/* En pantallas grandes centramos el carrusel para que no quede pegado a la izquierda */}
      <div className="w-full lg:max-w-[1400px] mx-auto flex justify-center">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          // Aumentamos el gap y el padding horizontal en desktop para aprovechar el espacio
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 gap-6 py-4 sm:gap-8 sm:px-8 lg:gap-12 lg:px-12 w-full"
        >
          {PRODUCTS.map((prod) => (
            <div 
              key={prod.id} 
              // En desktop (lg) hacemos la tarjeta más ancha para que no se vea apretada
              className="snap-center shrink-0 w-[88vw] max-w-[400px] lg:max-w-[500px] relative flex items-center min-h-[240px] lg:min-h-[280px] bg-white/50 backdrop-blur-md rounded-[2.5rem] p-6 sm:p-8 lg:p-10 border border-white/60"
            >
              {/* Lado Izquierdo: Textos */}
              <div className="w-[55%] lg:w-[60%] z-30 relative">
                <h2 className="font-nunito font-black text-3xl sm:text-4xl lg:text-5xl text-bonbon-dark leading-[1.05] tracking-tight">
                  {prod.title}
                </h2>
                <h3 className="font-nunito font-bold text-lg sm:text-xl lg:text-2xl text-bonbon-main leading-tight mt-1 mb-3 lg:mb-4">
                  {prod.subtitle}
                </h3>
                
                <hr className="w-12 lg:w-16 border-t-[3px] border-bonbon-main/40 my-3 lg:my-5" />
                
                <p className="text-xs sm:text-[14px] lg:text-[15px] font-bold text-bonbon-dark/85 leading-relaxed pr-1 lg:pr-4">
                  {prod.desc}
                </p>
              </div>

              {/* Lado Derecho: Imagen */}
              {/* Ajustamos la posición en desktop para que la imagen se vea proporcionada y no se corte demasiado */}
              <div className="absolute right-[-10%] sm:right-[-5%] lg:right-[-2%] top-1/2 -translate-y-1/2 w-[55%] sm:w-[50%] lg:w-[45%] max-w-[200px] lg:max-w-[240px] z-20 pointer-events-none">
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
      </div>

      {/* ==========================================
          PAGINACIÓN
          ========================================== */}
      <div className="flex flex-col items-center mt-6 lg:mt-10">
        
        {/* Texto sutil para indicar interacción - Oculto en PC porque allí no deslizan con el dedo */}
        <div className="flex lg:hidden items-center gap-1 text-[9px] font-black text-bonbon-dark/50 uppercase tracking-widest mb-3">
          <span>Desliza</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </div>

        {/* Cápsula de los puntitos */}
        <div className="flex justify-center gap-3 bg-white/60 backdrop-blur-md px-4 lg:px-5 py-2.5 lg:py-3 rounded-full shadow-md border border-white/50">
          {PRODUCTS.map((_, index) => (
            <motion.div 
              key={index}
              initial={false}
              animate={{
                width: activeIndex === index ? 28 : 8,
                backgroundColor: activeIndex === index ? '#8a64a3' : '#d8b4e2'
              }}
              transition={{ duration: 0.3 }}
              className="h-2 lg:h-2.5 rounded-full"
            />
          ))}
        </div>
        
      </div>

    </section>
  );
}