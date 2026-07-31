// src/components/ProductCard.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductCard({ name, description, price, image, Icon, badge }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const badgeColor = badge === 'Oferta' ? 'bg-red-500' : 'bg-bonbon-main';

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
          className="absolute inset-0 bg-white rounded-3xl overflow-hidden shadow-sm border border-[#eedcff]/50 flex flex-col"
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            // EL TRUCO ANTI-FANTASMA: Empujamos la cara frontal 1 pixel hacia adelante
            transform: 'rotateY(0deg) translateZ(1px)' 
          }}
        >
          {/* ETIQUETA NUEVO/OFERTA */}
          {badge && (
            <div 
              className={`absolute top-[18px] right-[-35px] w-[130px] text-center text-white text-[10px] font-black py-1 ${badgeColor} shadow-md uppercase tracking-wider`}
              style={{ 
                transform: 'rotate(45deg)', // Rotación limpia sin variables de Tailwind
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
              }}
            >
              {badge}
            </div>
          )}
          
          {image ? (
            <img src={image} alt={name} className="w-full h-44 object-cover bg-bonbon-pale" />
          ) : (
            <div className="w-full h-44 bg-bonbon-pale/50 flex items-center justify-center text-bonbon-main/40">
              {Icon && <Icon className="w-12 h-12" />}
            </div>
          )}
          
          <div className="p-3 text-center flex-1 flex flex-col justify-center items-center gap-1.5">
            <h3 className="font-extrabold text-[15px] text-bonbon-dark leading-tight line-clamp-1">{name}</h3>
            
            <p className="text-[10px] font-black text-bonbon-main/60 uppercase tracking-widest flex items-center justify-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              Toca para info
            </p>
            
            {/* PRECIO + MXN CHIQUITO */}
            <p className="font-black text-2xl text-bonbon-main mt-0.5 flex items-baseline justify-center gap-1">
              ${price} <span className="text-[10px] font-bold text-bonbon-main/50 uppercase tracking-wide">MXN</span>
            </p>
          </div>
        </div>


        {/* =======================
            CARA TRASERA (INFO LIMPÍSIMA)
            ======================= */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-bonbon-pale/80 to-white rounded-3xl overflow-hidden shadow-md border border-bonbon-main/20 p-5 flex flex-col justify-center items-center text-center"
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            // EL TRUCO ANTI-FANTASMA: Empujamos la cara trasera 1 pixel hacia atrás
            transform: 'rotateY(180deg) translateZ(1px)' 
          }}
        >
          {/* Ya no hay "cintas falsas" aquí atrás, dejamos el diseño limpio */}

          <h3 className="font-black text-lg text-bonbon-dark mb-2 leading-tight mt-3">
            Ingredientes y Detalles
          </h3>
          
          <div className="w-10 h-1 bg-bonbon-main/30 rounded-full mb-3" />
          
          <p className="text-[13px] font-bold text-bonbon-dark/80 mb-4 leading-relaxed px-1">
            {description}
          </p>
          
          <div className="bg-white px-3 py-2.5 rounded-xl border border-red-100 shadow-sm w-full mb-4">
            <p className="text-[10px] font-black text-red-400 uppercase tracking-wider flex items-center justify-center gap-1 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3Z" />
              </svg>
              Aviso Alérgenos
            </p>
            <p className="text-[9px] font-bold text-gray-500 leading-tight">
              Contiene lácteos y gluten. Preparado en equipo que procesa nueces.
            </p>
          </div>
          
          <p className="text-[13px] font-black text-bonbon-main uppercase tracking-widest mt-auto flex items-center justify-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            Volver
          </p>
        </div>

      </motion.div>
    </div>
  );
}