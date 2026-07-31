// src/sections/Footer.jsx
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../components/Icons';
import pastelImg from '../assets/Pastel.png';

export default function Footer() {
  return (
    /* 
      El z-20 y el bg-[#3a1c42] actúan como un muro. 
      Taparán el BackgroundDecorations global para que el footer quede limpio.
    */
    <footer className="relative z-20 bg-[#3a1c42] px-6 pb-12 flex flex-col items-center">
      
      <div className="relative -mt-24 sm:-mt-32 z-30 mb-8 pointer-events-none">
        <img 
          src={pastelImg} 
          alt="Pastel decorado de BonBon" 
          className="w-56 sm:w-64 h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)]"
        />
      </div>

      <div className="flex gap-5 mb-10 relative z-10">
        <a 
          href="#" 
          aria-label="Facebook" 
          className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all duration-300 shadow-lg border border-white/5"
        >
          <FacebookIcon className="w-6 h-6" />
        </a>
        <a 
          href="#" 
          aria-label="Instagram" 
          className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all duration-300 shadow-lg border border-white/5"
        >
          <InstagramIcon className="w-6 h-6" />
        </a>
        <a 
          href="#" 
          aria-label="Twitter" 
          className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all duration-300 shadow-lg border border-white/5"
        >
          <TwitterIcon className="w-6 h-6" />
        </a>
      </div>

      <div className="text-center text-white/80 space-y-2 relative z-10">
        <h3 className="font-nunito font-black text-2xl text-white tracking-wide">
          BonBon Repostería
        </h3>
        <p className="text-sm font-semibold italic text-white/70">
          "Endulzando tus momentos especiales"
        </p>
        
        <div className="w-16 h-[2px] bg-white/20 mx-auto my-4 rounded-full"></div>
        
        <p className="text-[10px] font-bold tracking-widest uppercase text-white/40 pt-2">
          © {new Date().getFullYear()} BonBon. Todos los derechos reservados.
        </p>
      </div>

    </footer>
  );
}