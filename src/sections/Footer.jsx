// src/sections/Footer.jsx
import { FacebookIcon, InstagramIcon } from '../components/Icons';
import pastelImg from '../assets/Pastel.png';

// Ícono de TikTok
const TikTokIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function Footer() {
  return (

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
          href="https://www.facebook.com/profile.php?id=61591267478986" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook" 
          className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all duration-300 shadow-lg border border-white/5"
        >
          <FacebookIcon className="w-6 h-6" />
        </a>
        <a 
          href="https://www.instagram.com/_booonn__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram" 
          className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all duration-300 shadow-lg border border-white/5"
        >
          <InstagramIcon className="w-6 h-6" />
        </a>
        <a 
          href="https://www.tiktok.com/@boonn309?is_from_webapp=1&sender_device=pc" 
          target="_blank"
          rel="noopener noreferrer" 
          aria-label="TikTok" 
          className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all duration-300 shadow-lg border border-white/5"
        >
          <TikTokIcon className="w-6 h-6" />
        </a>
      </div>

      <div className="text-center text-white/80 space-y-2 relative z-10">
        <h3 className="font-nunito font-black text-2xl text-white tracking-wide">
          Bon Bon
        </h3>
        <p className="text-sm font-semibold italic text-white/70">
          "Endulzando tus momentos especiales"
        </p>
        
        <div className="w-16 h-[2px] bg-white/20 mx-auto my-4 rounded-full"></div>
        
        <p className="text-[10px] font-bold tracking-widest uppercase text-white/40 pt-2">
          © {new Date().getFullYear()} Bon Bon. Todos los derechos reservados.
        </p>
      </div>

    </footer>
  );
}