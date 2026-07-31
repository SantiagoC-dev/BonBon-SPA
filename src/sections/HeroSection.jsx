// src/sections/HeroSection.jsx
import { motion } from 'framer-motion';
import { ArrowRight } from '../components/Icons';
import bonLogo from '../assets/BonLogo.png'; 

export default function HeroSection() {
  return (
    /* Cambiamos el alto forzado por un padding (pt-28 pb-32) súper estable para móviles */
    <section className="relative pt-28 pb-32 px-6 flex flex-col justify-center items-center overflow-hidden">
      
      <h1 className="sr-only">BonBon repostería</h1>

      <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col items-center text-center">
        
        <motion.img
          src={bonLogo}
          alt="BonBon Repostería"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            y: { duration: 3.5, ease: "easeInOut", repeat: Infinity, delay: 0.2 }
          }}
          className="w-full max-w-[280px] object-contain drop-shadow-lg mb-2" 
        />

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-bonbon-dark/90 font-bold mb-8 px-4 leading-relaxed text-[1.05rem]"
        >
          Pasteles y cupcakes personalizados para endulzar tus momentos especiales.
        </motion.p>

        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(138,100,163,0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-3 bg-gradient-to-r from-bonbon-main to-bonbon-dark text-white font-black text-lg rounded-full px-8 py-4 w-full max-w-[260px] shadow-md cursor-pointer"
        >
          Hacer pedido
          <motion.div
            animate={{ x: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </div>

      {/* Onda blanca anclada firmemente al fondo */}
      <div className="absolute bottom-0 left-0 w-full translate-y-[2px]">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="0.4" d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
          <path fill="#ffffff" d="M0,74.7L60,80C120,85.3,240,96,360,90.7C480,85.3,600,64,720,58.7C840,53.3,960,64,1080,69.3C1200,74.7,1320,74.7,1380,74.7L1440,74.7L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}