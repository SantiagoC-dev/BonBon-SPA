// src/sections/TalleresPage.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// IMPORTAMOS EL FONDO GLOBAL
import BackgroundDecorations from '../components/BackgroundDecorations';

// TODO: Reemplaza con la imagen real de tu letrero de Canva
import letreroTaller from '../assets/TallerPrueba.png'; 

const WHATSAPP_NUMBER = '525585489414';

// Íconos
const WhatsAppIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const ArrowLeftIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
  </svg>
);

const CalendarEmptyIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
  </svg>
);

export default function TalleresPage() {
  // Configura la fecha de tu próximo evento aquí
  const targetDate = new Date('2026-08-30T10:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Resetea el scroll de la ventana al montar este componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function calculateTimeLeft() {
    const difference = targetDate - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60)
      };
    } else {
      // Si el evento ya pasó
      timeLeft = { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const handleAsistir = () => {
    const mensaje = `¡Hola Bon Bon! Me encantaría asistir al próximo Taller. ¿Me podrían dar más información sobre disponibilidad y métodos de pago, por favor?`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
    window.location.href = url;
  };

  return (
    <main className="relative min-h-screen font-nunito flex flex-col overflow-x-hidden w-full max-w-[100vw]">
      
      {/* FONDO GLOBALIZADO */}
      <BackgroundDecorations tone="purple" />

      <style>{`
        @keyframes waveDriftLeft {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes waveDriftRight {
          0%   { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .wave-back { animation: waveDriftLeft 20s linear infinite; }
        .wave-front { animation: waveDriftRight 15s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .wave-back, .wave-front { animation: none; }
        }
      `}</style>

      {/* NAVEGACIÓN SIMPLE */}
      <header className="relative z-10 w-full max-w-[1200px] mx-auto px-6 py-6 lg:py-10">
        <Link 
          to="/" 
          className="group inline-flex items-center gap-3 text-[#8A64A3] font-bold text-sm lg:text-base hover:text-[#4A2559] transition-colors"
        >
          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white shadow-sm flex items-center justify-center border border-[#E2D1EB] group-hover:-translate-x-1 transition-transform">
            <ArrowLeftIcon className="w-4 h-4 lg:w-5 lg:h-5" />
          </div>
          Volver al inicio
        </Link>
      </header>

      {/* ==========================================
          SECCIÓN 1: PRÓXIMOS TALLERES
          ========================================== */}
      <section className="relative z-10 flex-1 w-full max-w-[1000px] mx-auto px-6 pt-2 lg:pt-4 pb-20 flex flex-col items-center">
        
        <div className="text-center mb-8 lg:mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-black text-4xl sm:text-5xl lg:text-6xl text-[#4A2559] tracking-tight mb-2 lg:mb-3"
          >
            Próximos Talleres
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-sm lg:text-base font-bold text-[#8A64A3] uppercase tracking-widest"
          >
            Aprende y crea con nosotros
          </motion.p>
        </div>

        {/* Tarjeta del Evento Responsiva (Columna en móvil, Fila en desktop) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full bg-white/90 backdrop-blur-md rounded-[2.5rem] lg:rounded-[3rem] shadow-[0_20px_40px_rgba(74,37,89,0.06)] border border-[#E2D1EB] overflow-hidden flex flex-col lg:flex-row items-center"
        >
          {/* LADO IZQUIERDO: IMAGEN DEL LETRERO DE CANVA */}
          <div className="w-full lg:w-1/2 h-full bg-[#FCF9FF] flex justify-center items-center p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#F5EAF1] self-stretch">
            <img 
              src={letreroTaller} 
              alt="Letrero del Taller BonBon" 
              className="w-full max-w-md lg:max-w-lg h-auto object-contain rounded-2xl drop-shadow-md"
              style={{ minHeight: '250px', backgroundColor: '#f3e8f8' }} 
            />
          </div>

          {/* LADO DERECHO: TEXTOS Y CONTADOR */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start relative pb-10 lg:pb-12 pt-0 lg:pt-10 px-6 lg:px-10">
            
            {/* CONTADOR DE DÍAS (Alineado a la izquierda en Desktop, sin traslaparse) */}
            <div className="-mt-8 lg:mt-0 mb-6 lg:mb-8 flex justify-center lg:justify-start relative z-20 w-full">
              <div className="flex gap-2 sm:gap-3 bg-white/95 backdrop-blur-xl border border-[#E2D1EB]/50 p-3 lg:p-4 rounded-3xl shadow-xl lg:shadow-md">
                {Object.entries(timeLeft).map(([unidad, valor]) => (
                  <div key={unidad} className="flex flex-col items-center bg-[#FCF5F9] border border-[#E2D1EB] rounded-2xl w-16 h-16 sm:w-20 sm:h-20 lg:w-20 lg:h-20 justify-center">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-black text-[#4A2559] leading-none">
                      {valor.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-bold text-[#8A64A3] uppercase tracking-wider mt-1 lg:mt-1.5">
                      {unidad}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* TEXTO DESCRIPTIVO */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start w-full">
              <h3 className="text-2xl lg:text-3xl font-black text-[#3A1D47] mb-3 lg:mb-4">
                Taller BonBon:<br className="hidden lg:block"/> Decoración de Pasteles
              </h3>
              <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#6A527A] font-semibold leading-relaxed mb-8 lg:mb-10 max-w-md lg:max-w-full">
                Únete a nuestra sesión piloto y descubre los secretos para lograr un decorado perfecto. Aprenderemos uso de duyas, colorimetría y alisado con buttercream. ¡Incluye todos los materiales, coffee break y te llevas tu pastel a casa!
              </p>

              <motion.button 
                onClick={handleAsistir}
                whileHover={{ scale: 1.03, y: -2, boxShadow: "0px 10px 25px rgba(74,37,89,0.25)" }}
                whileTap={{ scale: 0.96 }}
                className="w-full max-w-xs lg:max-w-[280px] flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#8A64A3] to-[#4A2559] text-white font-black text-[15px] lg:text-[16px] rounded-2xl py-4 transition-all cursor-pointer shadow-[0_8px_15px_rgba(138,100,163,0.3)]"
              >
                <WhatsAppIcon className="w-5 h-5 lg:w-6 lg:h-6" />
                ¡Quiero asistir!
              </motion.button>
            </div>
          </div>
        </motion.div>

      </section>

      {/* ==========================================
          DIVISOR (Olas Animadas hacia sección de pasados)
          ========================================== */}
      <div className="relative z-20 w-full h-[40px] sm:h-[60px] lg:h-[80px] overflow-hidden leading-none pointer-events-none translate-y-[1px]">
        <div className="wave-back absolute inset-0 w-[200%] h-full flex">
          <svg viewBox="0 0 2880 120" className="w-full h-full block" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="0.5" d="M0,60 C288,20 432,20 720,60 C1008,100 1152,100 1440,60 C1728,20 1872,20 2160,60 C2448,100 2592,100 2880,60 V120 H0 Z" />
          </svg>
        </div>
        <div className="wave-front absolute inset-0 w-[200%] h-full flex [filter:drop-shadow(0_-4px_6px_rgba(138,100,163,0.06))]">
          <svg viewBox="0 0 2880 120" className="w-full h-full block" preserveAspectRatio="none">
            <path fill="#ffffff" d="M0,60 C288,100 432,100 720,60 C1008,20 1152,20 1440,60 C1728,100 1872,100 2160,60 C2448,20 2592,20 2880,60 V120 H0 Z" />
          </svg>
        </div>
      </div>

      {/* ==========================================
          SECCIÓN 2: TALLERES PASADOS
          ========================================== */}
      <section className="relative z-20 w-full bg-white py-20 lg:py-28 px-6 flex flex-col items-center">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="font-nunito font-black text-3xl sm:text-4xl lg:text-5xl text-[#4A2559] tracking-tight mb-2 lg:mb-4">
            Talleres Pasados
          </h2>
          <div className="w-16 lg:w-20 h-1.5 lg:h-2 bg-[#E2D1EB] rounded-full mx-auto"></div>
        </div>

        {/* Estado Vacío (Placeholder) Expandido para Desktop */}
        <div className="w-full max-w-[600px] lg:max-w-[800px] border-2 border-dashed border-[#F5EAF1] rounded-[2.5rem] lg:rounded-[3rem] py-16 lg:py-24 px-6 lg:px-12 flex flex-col items-center text-center bg-[#FCF9FF]">
          <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 lg:mb-6 border border-[#E2D1EB]">
            <CalendarEmptyIcon className="w-8 h-8 lg:w-10 lg:h-10 text-[#8A64A3]/50" />
          </div>
          <h3 className="font-bold text-lg lg:text-2xl text-[#6A527A] mb-2 lg:mb-3">Sin eventos pasados por ahora</h3>
          <p className="text-[13.5px] lg:text-[16px] font-semibold text-[#8A64A3]/60 max-w-sm lg:max-w-lg">
            Muy pronto encontrarás aquí la galería de fotos y los hermosos resultados de nuestros alumnos en ediciones anteriores.
          </p>
        </div>
      </section>

    </main>
  );
}