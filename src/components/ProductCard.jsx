// src/components/ProductCard.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductCard({ name, description, price, oldPrice, image, Icon, badge }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-[320px] cursor-pointer group"
      style={{ perspective: 1200 }} // Aumentamos la perspectiva para un giro más natural
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        // Forzamos el renderizado 3D estricto para Safari/iOS
        style={{ transformStyle: 'preserve-3d', WebkitTransformStyle: 'preserve-3d' }} 
      >
        
        {/* =======================
            CARA FRONTAL 
            ======================= */}
        <div 
          /* Actualizado a Glassmorphism Premium */
          className="absolute inset-0 bg-white/70 backdrop-blur-md rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(74,37,89,0.06)] border border-white/60 flex flex-col"
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            // EL TRUCO ANTI-FANTASMA: Empujamos la cara frontal 1 pixel hacia adelante
            transform: 'rotateY(0deg) translateZ(1px)' 
          }}
        >
          {/* ETIQUETA NUEVO/OFERTA - Estilo Píldora Flotante Unificado */}
          {badge && (
            <div 
              className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase z-10 bg-gradient-to-r from-[#8A64A3] to-[#4A2559] text-white shadow-[0_4px_12px_rgba(74,37,89,0.25)]"
              style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
            >
              {badge}
            </div>
          )}
          
          {/* IMAGEN */}
          <div className="relative w-full h-44 overflow-hidden bg-[#FCF5F9]">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[#8A64A3]/40">
                {Icon && <Icon className="w-12 h-12" />}
              </div>
            )}
          </div>
          
          {/* CONTENIDO FRONTAL */}
          <div className="p-4 text-center flex-1 flex flex-col justify-center items-center gap-1.5">
            <h3 className="font-nunito font-black text-[17px] text-[#3A1D47] leading-tight line-clamp-1">{name}</h3>
            
            <p className="text-[10px] font-black text-[#8A64A3]/60 uppercase tracking-widest flex items-center justify-center gap-1 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              Toca para info
            </p>
            
            {/* PRECIOS (Actual y Anterior Tachado) */}
            <div className="mt-auto flex items-baseline justify-center gap-2">
              <p className="font-nunito font-black text-[22px] text-[#4A2559] flex items-baseline gap-0.5">
                ${price} <span className="text-[10px] font-bold text-[#4A2559]/50 uppercase tracking-wide">MXN</span>
              </p>
              
              {oldPrice && (
                <p className="font-bold text-[13px] text-[#8A64A3]/50 line-through decoration-[#8A64A3]/40 decoration-2 mb-[2px]">
                  ${oldPrice}
                </p>
              )}
            </div>
          </div>
        </div>


        {/* =======================
            CARA TRASERA 
            ======================= */}
        <div 
          className="absolute inset-0 bg-[#FCF9FF] rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(74,37,89,0.06)] border border-[#E2D1EB] p-5 flex flex-col justify-center items-center text-center"
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            // EL TRUCO ANTI-FANTASMA: Empujamos la cara trasera 1 pixel hacia atrás
            transform: 'rotateY(180deg) translateZ(1px)' 
          }}
        >
          <h3 className="font-nunito font-black text-lg text-[#3A1D47] mb-2 leading-tight mt-3">
            Detalles
          </h3>
          
          <div className="w-10 h-1 bg-gradient-to-r from-[#8A64A3] to-[#4A2559] rounded-full mb-4" />
          
          <p className="text-[13px] font-semibold text-[#6A527A] mb-4 leading-relaxed px-1">
            {description}
          </p>
          
          {/* ACTUALIZADO EL AVISO DE ALÉRGENOS A LA PALETA MORADA */}
          <div className="bg-white px-3 py-2.5 rounded-xl border border-[#E2D1EB] shadow-sm w-full mb-4 mt-auto">
            <p className="text-[10px] font-black text-[#8A64A3] uppercase tracking-wider flex items-center justify-center gap-1 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3Z" />
              </svg>
              Aviso Alérgenos
            </p>
            <p className="text-[9px] font-bold text-[#6A527A]/80 leading-tight">
              Contiene lácteos y gluten. Preparado en equipo que procesa nueces.
            </p>
          </div>
          
          <p className="text-[12px] font-black text-[#8A64A3] uppercase tracking-widest flex items-center justify-center gap-1.5 pb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            Volver
          </p>
        </div>

      </motion.div>
    </div>
  );
}