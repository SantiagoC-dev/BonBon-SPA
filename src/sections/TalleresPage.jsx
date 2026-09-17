// src/sections/TalleresPage.jsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// IMPORTAMOS EL FONDO GLOBAL
import BackgroundDecorations from '../components/BackgroundDecorations';

// ====== IMPORTACIÓN DE ASSETS ======
// 1. Imágenes del NUEVO taller (Frente y Vuelta)
import TallerNewFront from '../assets/TallerNew.png';
import TallerNewBack from '../assets/TallerNewBack.png';
// 2. Video del taller VIEJO y su miniatura
import VideoViejo from '../assets/Video.MOV';
import TallerPrueba from '../assets/TallerPrueba.png'; 
// ==========================================

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

export default function TalleresPage() {
  // Arreglo de imágenes para el scroll/carrusel
  const posterImages = [TallerNewFront, TallerNewBack];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const carouselRef = useRef(null);

  // ====== FECHA DEL EVENTO: 2 de Octubre 2026 ======
  const targetDate = new Date('2026-10-02T10:00:00').getTime();
  // ==================================================

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isEventStarted, setIsEventStarted] = useState(() => Date.now() >= targetDate);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function calculateTimeLeft() {
    const difference = targetDate - Date.now();
    if (difference <= 0) {
      return { días: 0, horas: 0, minutos: 0, segundos: 0 };
    }
    return {
      días: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    if (isEventStarted) return;

    const interval = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);
      if (Date.now() >= targetDate) {
        setIsEventStarted(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEventStarted]);

  const nextImage = () => {
    setCurrentImgIndex((prev) => (prev + 1) % posterImages.length);
  };

  const prevImage = () => {
    setCurrentImgIndex((prev) => (prev - 1 + posterImages.length) % posterImages.length);
  };

  // Navegación por teclado (accesibilidad) para el carrusel
  const handleCarouselKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevImage();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextImage();
    }
  };

  // Deslizar con el dedo o arrastrar para cambiar de imagen
  const handleDragEnd = (_event, info) => {
    const SWIPE_THRESHOLD = 60;
    if (info.offset.x < -SWIPE_THRESHOLD) {
      nextImage();
    } else if (info.offset.x > SWIPE_THRESHOLD) {
      prevImage();
    }
  };

  const handleAsistir = () => {
    const mensaje = isEventStarted
      ? `¡Hola Bon Bon! Vi que el Taller Otoñal ya finalizó. ¿Me podrían dar información para anotarme a las próximas fechas, por favor?`
      : `¡Hola Bon Bon! Me encantaría inscribirme al Taller de Decoración de Temporada Otoñal y aprovechar el descuento del mes patrio. ¿Me dan info?`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
    window.location.href = url;
  };

  return (
    <main className="relative min-h-screen font-nunito flex flex-col overflow-x-hidden w-full max-w-[100vw]">

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
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <header className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-5 sm:py-6 lg:py-10">
        <Link
          to="/"
          className="group inline-flex items-center gap-2.5 sm:gap-3 text-[#8A64A3] font-bold text-sm lg:text-base hover:text-[#4A2559] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A64A3] rounded-full"
        >
          <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white shadow-sm flex items-center justify-center border border-[#E2D1EB] group-hover:-translate-x-1 transition-transform shrink-0">
            <ArrowLeftIcon className="w-4 h-4 lg:w-5 lg:h-5" />
          </div>
          Volver al inicio
        </Link>
      </header>

      {/* ==========================================
          SECCIÓN 1: PRÓXIMO TALLER
          ========================================== */}
      <section className="relative z-10 flex-1 w-full max-w-[1000px] mx-auto px-4 sm:px-6 pt-2 lg:pt-4 pb-16 sm:pb-20 flex flex-col items-center">

        <div className="text-center mb-8 lg:mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-black text-3xl sm:text-5xl lg:text-6xl text-[#4A2559] tracking-tight mb-2 lg:mb-3 px-2 sm:px-4"
          >
            Próximo Taller
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xs sm:text-base font-bold text-[#8A64A3] uppercase tracking-widest px-4"
          >
            Inscríbete y crea magia otoñal con nosotros
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full bg-white/90 backdrop-blur-md rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] shadow-[0_20px_40px_rgba(74,37,89,0.06)] border border-[#E2D1EB] overflow-hidden flex flex-col lg:flex-row items-stretch lg:items-center"
        >
          {/* === LADO IZQUIERDO: CARRUSEL DE IMÁGENES === */}
          <div className="w-full lg:w-1/2 bg-[#FCF9FF] flex flex-col justify-center items-center p-5 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#F5EAF1] self-stretch relative group">

            <div
              ref={carouselRef}
              tabIndex={0}
              role="group"
              aria-roledescription="carrusel"
              aria-label={`Imágenes del taller, ${currentImgIndex + 1} de ${posterImages.length}`}
              onKeyDown={handleCarouselKeyDown}
              className="relative w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[360px] aspect-[9/16] overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(74,37,89,0.15)] border border-[#E2D1EB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A64A3] focus-visible:ring-offset-2 bg-transparent cursor-grab active:cursor-grabbing"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={currentImgIndex}
                  src={posterImages[currentImgIndex]}
                  alt={`Póster del Taller de Decoración BonBon, imagen ${currentImgIndex + 1} de ${posterImages.length}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={handleDragEnd}
                  draggable={false}
                  className="absolute inset-0 w-full h-full object-contain select-none"
                />
              </AnimatePresence>

              {/* Indicadores de puntos */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
                {posterImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentImgIndex(index)}
                    aria-label={`Ir a la imagen ${index + 1}`}
                    aria-current={index === currentImgIndex}
                    className={`h-2 rounded-full transition-all duration-300 ${index === currentImgIndex ? 'w-5 bg-white' : 'w-2 bg-white/60 hover:bg-white/80'}`}
                  />
                ))}
              </div>
            </div>

            <p className="mt-3 text-[#8A64A3] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-center animate-pulse">
              Desliza para ver más info
            </p>
          </div>

          {/* LADO DERECHO: INFO DEL TALLER */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start relative pb-8 sm:pb-10 lg:pb-12 pt-6 lg:pt-10 px-5 sm:px-8 lg:px-10">

            <div className="mb-6 lg:mb-8 flex justify-center lg:justify-start relative z-20 w-full">
              {isEventStarted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex items-center gap-2.5 sm:gap-3 bg-white/95 backdrop-blur-xl border border-[#8A64A3]/30 px-4 sm:px-6 py-3 sm:py-4 rounded-3xl shadow-md max-w-full"
                >
                  <span className="relative flex h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8A64A3] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 bg-[#4A2559]"></span>
                  </span>
                  <span className="text-lg sm:text-xl lg:text-2xl font-black text-[#4A2559] uppercase tracking-wide leading-tight">
                    ¡Cupos Agotados!
                  </span>
                </motion.div>
              ) : (
                <div
                  className="grid grid-cols-4 gap-1.5 sm:gap-2.5 lg:gap-3 bg-white/95 backdrop-blur-xl border border-[#E2D1EB]/50 p-2.5 sm:p-3.5 lg:p-4 rounded-3xl shadow-md w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] mx-auto lg:mx-0"
                  aria-label="Cuenta regresiva para el inicio del taller"
                >
                  {Object.entries(timeLeft).map(([unidad, valor]) => (
                    <div
                      key={unidad}
                      className="flex flex-col items-center justify-center bg-[#FCF5F9] border border-[#E2D1EB] rounded-xl sm:rounded-2xl aspect-square min-w-0"
                    >
                      <span className="text-base sm:text-2xl lg:text-3xl font-black text-[#4A2559] leading-none tabular-nums">
                        {valor.toString().padStart(2, '0')}
                      </span>
                      <span className="text-[7px] sm:text-[10px] lg:text-[11px] font-bold text-[#8A64A3] uppercase tracking-wider mt-1 lg:mt-1.5 text-center leading-none">
                        {unidad}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="text-center lg:text-left flex flex-col items-center lg:items-start w-full">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#3A1D47] mb-2 lg:mb-3 leading-tight px-1 lg:px-0">
                Taller de Decoración:<br />Temporada Otoñal 🍂
              </h3>

              <div className="inline-block bg-[#F5EDF9] text-[#4A2559] px-4 py-1.5 rounded-full mb-5 border border-[#E2D1EB] max-w-full">
                <p className="text-[11px] sm:text-[13px] font-extrabold flex items-center gap-2 flex-wrap justify-center">
                  🇲🇽 <span className="uppercase tracking-wider">¡Descuento especial por Mes Patrio!</span>
                </p>
              </div>

              <p className="text-sm sm:text-[15px] lg:text-[16px] text-[#6A527A] font-semibold leading-relaxed mb-8 lg:mb-10 max-w-md lg:max-w-full px-1 lg:px-0">
                Aprende a decorar pasteles con los colores y sabores del otoño. Uso de duyas, alisado perfecto y colorimetría otoñal. ¡Incluye materiales, coffee break y te llevas tu creación! <span className="font-bold text-[#8A64A3]">Consulta la segunda imagen para más detalles.</span>
              </p>

              <motion.button
                onClick={handleAsistir}
                whileHover={{ scale: 1.03, y: -2, boxShadow: "0px 10px 25px rgba(74,37,89,0.25)" }}
                whileTap={{ scale: 0.96 }}
                className="w-full max-w-xs lg:max-w-[280px] flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#8A64A3] to-[#4A2559] text-white font-black text-sm sm:text-[15px] lg:text-[16px] rounded-2xl py-3.5 sm:py-4 transition-all cursor-pointer shadow-[0_8px_15px_rgba(138,100,163,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A2559]"
              >
                <WhatsAppIcon className="w-5 h-5 lg:w-6 lg:h-6 shrink-0" />
                {isEventStarted ? 'Info próximas fechas' : 'Quiero mi descuento Otoñal'}
              </motion.button>
            </div>
          </div>
        </motion.div>

      </section>

      {/* Divisor de olas */}
      <div className="relative z-20 w-full h-[32px] sm:h-[60px] lg:h-[80px] overflow-hidden leading-none pointer-events-none translate-y-[1px]">
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
          SECCIÓN 2: TALLERES PASADOS (Video)
          ========================================== */}
      <section className="relative z-20 w-full bg-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 flex flex-col items-center">
        <div className="text-center mb-8 sm:mb-10 lg:mb-16 px-2 sm:px-4">
          <h2 className="font-nunito font-black text-2xl sm:text-4xl lg:text-5xl text-[#4A2559] tracking-tight mb-2 lg:mb-4">
            Nuestra Experiencia
          </h2>
          <div className="w-14 sm:w-16 lg:w-20 h-1.5 lg:h-2 bg-[#E2D1EB] rounded-full mx-auto mb-4"></div>
          <p className="text-sm lg:text-base font-semibold text-[#8A64A3] max-w-md mx-auto leading-relaxed">
            Revive los mejores momentos de nuestro último taller. ¡Mira lo divertido que es aprender en BonBon!
          </p>
        </div>

        {/* Contenedor del video en formato vertical (estilo reel/TikTok) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-[min(88vw,340px)] sm:w-[380px] lg:w-[400px] xl:w-[420px] aspect-[9/16] bg-white rounded-[2rem] sm:rounded-[2.5rem] p-2.5 sm:p-4 shadow-[0_20px_50px_rgba(74,37,89,0.1)] border border-[#E2D1EB] overflow-hidden mx-auto"
        >
          <video
            controls
            playsInline
            preload="metadata"
            poster={TallerPrueba}
            className="w-full h-full object-cover rounded-[1.5rem] sm:rounded-[2rem] bg-[#FCF9FF]"
          >
            <source src={VideoViejo} />
            Tu navegador no soporta la reproducción de este video.{' '}
            <a href={VideoViejo} download className="underline text-[#8A64A3]">
              Descárgalo aquí
            </a>.
          </video>
        </motion.div>
      </section>

    </main>
  );
}