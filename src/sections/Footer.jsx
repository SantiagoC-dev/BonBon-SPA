// src/sections/Footer.jsx
import { motion } from 'framer-motion';
import { FacebookIcon, InstagramIcon } from '../components/Icons';
import pastelImg from '../assets/FooterCake.svg'; 

// Ícono de TikTok
const TikTokIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative z-20 bg-[#4A2559] px-6 pb-12 pt-12 lg:pt-20 flex flex-col items-center">
      
      {/* Contenedor Principal Responsivo (Columna en Móvil, Fila en Desktop) */}
      <div className="w-full max-w-[1000px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 relative z-10">

        {/* ==========================================
            1. BLOQUE DE MARCA (Izquierda en PC, Abajo en Móvil)
            ========================================== */}
        <div className="order-3 lg:order-1 flex-1 text-center lg:text-left text-white/80 space-y-2 lg:space-y-3">
          <h3 className="font-nunito font-black text-3xl lg:text-4xl text-white tracking-wide">
            Bon Bon
          </h3>
          <p className="text-sm lg:text-base font-semibold italic text-white/70">
            "Endulzando tus momentos especiales"
          </p>
          
          <div className="w-16 h-[2px] bg-white/20 mx-auto lg:mx-0 my-4 lg:my-6 rounded-full"></div>
          
          <p className="text-[10px] lg:text-[11px] font-bold tracking-widest uppercase text-white/40 pt-2 lg:pt-0">
            © {new Date().getFullYear()} Bon Bon.<br className="lg:hidden" /> Todos los derechos reservados.
          </p>
        </div>

        {/* ==========================================
            2. IMAGEN CENTRAL DEL PASTEL (Centro en ambos)
            ========================================== */}
        {/* El margen negativo tira el pastel hacia la ola del formulario superior */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2 flex-1 flex justify-center -mt-32 sm:-mt-36 lg:-mt-48 mb-2 pointer-events-none"
        >
          <img 
            src={pastelImg} 
            alt="Pastel decorado de BonBon" 
            className="w-64 sm:w-72 lg:w-80 h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)]"
          />
        </motion.div>

        {/* ==========================================
            3. REDES SOCIALES (Derecha en PC, Centro en Móvil)
            ========================================== */}
        <div className="order-2 lg:order-3 flex-1 flex justify-center lg:justify-end gap-5 lg:gap-6 w-full">
          <motion.a 
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.facebook.com/profile.php?id=61591267478986" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook" 
            className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/25 transition-colors duration-300 shadow-lg border border-white/10"
          >
            <FacebookIcon className="w-6 h-6 lg:w-7 lg:h-7" />
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.instagram.com/_booonn__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram" 
            className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/25 transition-colors duration-300 shadow-lg border border-white/10"
          >
            <InstagramIcon className="w-6 h-6 lg:w-7 lg:h-7" />
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.tiktok.com/@boonn309?is_from_webapp=1&sender_device=pc" 
            target="_blank"
            rel="noopener noreferrer" 
            aria-label="TikTok" 
            className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/25 transition-colors duration-300 shadow-lg border border-white/10"
          >
            <TikTokIcon className="w-6 h-6 lg:w-7 lg:h-7" />
          </motion.a>
        </div>

      </div>
    </footer>
  );
}