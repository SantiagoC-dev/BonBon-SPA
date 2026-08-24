// src/sections/DeliveryPolicies.jsx
import { motion } from 'framer-motion';

// Ícono de destello para el separador
const SparkleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

// Íconos premium y limpios para cada método de entrega
const HomeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.99 8.994a.75.75 0 1 1-1.06 1.06L12 5.284 3.54 13.895a.75.75 0 0 1-1.06-1.06l8.99-8.994Z" />
    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
  </svg>
);

const ShieldCarIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M3.375 10.5C2.062 10.5 1.012 11.528 1 12.812A2.992 2.992 0 0 0 3 15.75v5.25c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75v-1.5h12v1.5a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 0 .75-.75v-5.25a2.992 2.992 0 0 0 2-2.938c-.012-1.284-1.062-2.312-2.375-2.312h-.42l-.527-2.635A3.75 3.75 0 0 0 16.533 6H7.467a3.75 3.75 0 0 0-3.66 2.865L3.28 10.5H3.375ZM6.75 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm10.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
    <path fillRule="evenodd" d="M12 2.25c-1.385 0-2.61.8-3.172 2.046l-.526 1.164a2.25 2.25 0 0 0 2.052 3.165h3.292a2.25 2.25 0 0 0 2.052-3.165l-.526-1.164A3.498 3.498 0 0 0 12 2.25Z" clipRule="evenodd" />
  </svg>
);

const MapPinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
  </svg>
);

const POLICIES = [
  {
    id: 1,
    title: "Recolección",
    desc: "Pasa directamente por tu pedido a nuestra ubicación. Es la opción más rápida, segura y sin ningún costo adicional.",
    icon: HomeIcon,
    delay: 0.1
  },
  {
    id: 2,
    title: "Envío Seguro",
    desc: "Se envía en Uber (costo a cargo del cliente). Nosotros lo custodiamos personalmente para garantizar que tu postre llegue intacto.",
    icon: ShieldCarIcon,
    delay: 0.2
  },
  {
    id: 3,
    title: "Punto Medio",
    desc: "Podemos acordar un punto de entrega intermedio que nos convenga a ambos. (Sujeto a disponibilidad de horario).",
    icon: MapPinIcon,
    delay: 0.3
  }
];

export default function DeliveryPolicies() {
  return (

    <section className="relative z-10 w-full pt-28 sm:pt-32 lg:pt-36 px-6 flex flex-col items-center">
      
      {/* TÍTULO DE LA SECCIÓN */}
      <div className="text-center mb-10">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[12px] sm:text-[14px] font-black text-[#8A64A3] uppercase tracking-[0.2em] mb-2"
        >
          Transparencia y Seguridad
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-nunito font-black text-3xl sm:text-4xl text-[#4A2559] tracking-tight leading-[1.1]"
        >
          Formas de Entrega
        </motion.h2>
      </div>

      {/* CONTENEDOR DE TARJETAS (Columna en móvil, Grid de 3 en PC) */}
      <div className="w-full max-w-[1000px] flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
        {POLICIES.map((policy) => (
          <motion.div
            key={policy.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: policy.delay }}
            className="flex flex-col items-center text-center bg-white/70 backdrop-blur-xl border border-white/80 rounded-[2.5rem] shadow-[0_15px_35px_rgba(74,37,89,0.06)] p-8 hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Ícono Circulo */}
            <div className="w-16 h-16 mb-5 rounded-full bg-[#F4EBF7] flex items-center justify-center text-[#8A64A3]">
              <policy.icon className="w-8 h-8" />
            </div>
            
            <h3 className="font-nunito font-black text-xl text-[#4A2559] mb-3 tracking-wide">
              {policy.title}
            </h3>
            
            <p className="text-[14px] text-[#6A527A] font-semibold leading-relaxed">
              {policy.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="relative flex items-center justify-center gap-3 mt-20 lg:mt-28 mb-4 pointer-events-none w-52 sm:w-72 lg:w-96 mx-auto opacity-80">
        <span className="flex-1 h-px bg-gradient-to-r from-transparent to-[#C9AEDA]" />
        <SparkleIcon className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#8A64A3] shrink-0" />
        <span className="flex-1 h-px bg-gradient-to-l from-transparent to-[#C9AEDA]" />
      </div>

    </section>
  );
}