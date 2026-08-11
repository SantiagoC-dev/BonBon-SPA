// src/sections/DynamicForm.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// TODO: reemplaza con el número real de WhatsApp (ej. 525500000000)
const WHATSAPP_NUMBER = '525521105157';

// Íconos
const WhatsAppIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const ChevronDownIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

export default function DynamicForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    categoria: '',
    tamanoPastel: '', panPastel: '', rellenoPastel: '',
    cantidadRamo: '', saborRamo: '', rellenoRamo: '',
    cantidadCaja: '', saborCaja: '', rellenoCaja: '',
    presentacionZanahoria: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, categoria } = formData;
    
    const catText = {
      'pastel': 'Pastel personalizado',
      'ramo': 'Ramo de Cupcakes',
      'caja': 'Caja de cupcakes',
      'zanahoria': 'Caja de cupcakes de Zanahoria'
    }[categoria];

    let mensaje = `¡Hola Bon Bon! Mi nombre es *${nombre}*.\nMe interesa hacer un pedido de *${catText}*:\n\n`;

    if (categoria === 'pastel') {
      mensaje += `- Tamaño: ${formData.tamanoPastel}\n`;
      mensaje += `- Pan: ${formData.panPastel}\n`;
      mensaje += `- Relleno: ${formData.rellenoPastel}\n`;
    } 
    else if (categoria === 'ramo') {
      mensaje += `- Cantidad: ${formData.cantidadRamo}\n`;
      mensaje += `- Sabor: ${formData.saborRamo}\n`;
      mensaje += `- ¿Lleva relleno?: ${formData.rellenoRamo}\n`;
    }
    else if (categoria === 'caja') {
      mensaje += `- Cantidad: ${formData.cantidadCaja}\n`;
      mensaje += `- Sabor: ${formData.saborCaja}\n`;
      mensaje += `- ¿Lleva relleno?: ${formData.rellenoCaja}\n`;
    }
    else if (categoria === 'zanahoria') {
      mensaje += `- Presentación: ${formData.presentacionZanahoria}\n`;
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  // Configuración de animación súper ligera
  const formAnimation = {
    initial: { opacity: 0, scaleY: 0.9, originY: 0, marginTop: 0 },
    animate: { opacity: 1, scaleY: 1, marginTop: '1.25rem' },
    exit: { opacity: 0, scaleY: 0.9, marginTop: 0 },
    transition: { duration: 0.2, ease: "easeOut" }
  };

  return (
    <section id="formulario-pedido" className="relative z-10 w-full pt-20 pb-32 px-6 flex flex-col items-center overflow-hidden">
      
      {/* MOTOR CSS NATIVO PARA OLAS DEL FOOTER */}
      <style>{`
        @keyframes formWaveDriftLeft {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes formWaveDriftRight {
          0%   { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .form-wave-bottom-back { animation: formWaveDriftRight 22s linear infinite; }
        .form-wave-bottom-front { animation: formWaveDriftLeft 16s linear infinite; }
      `}</style>

      <div className="w-full max-w-[400px] relative z-10">
        
        {/* TÍTULO */}
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-nunito font-black text-3xl sm:text-4xl text-[#4A2559] tracking-tight mb-1"
          >
            Haz tu pedido
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[12px] sm:text-[13px] font-black text-[#8A64A3] uppercase tracking-[0.2em]"
          >
            Cotización rápida
          </motion.p>
        </div>

        {/* TARJETA DEL FORMULARIO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full bg-white/70 backdrop-blur-xl border border-white/80 rounded-[2.5rem] shadow-[0_20px_40px_rgba(74,37,89,0.08)] p-7 sm:p-9"
        >
          {/* El layout prop permite animar el tamaño del contenedor suavemente cuando se añaden campos */}
          <motion.form layout onSubmit={handleSubmit} className="space-y-5">
            
            {/* INPUT NOMBRE - text-[16px] OBLIGATORIO PARA EVITAR ZOOM EN iPHONE */}
            <motion.div layout>
              <label className="text-[11.5px] font-black text-[#4A2559] block mb-2 pl-1 uppercase tracking-wider">Tu Nombre</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej. María Pérez"
                required
                className="w-full rounded-2xl border-2 border-white/60 bg-white/50 px-4 py-3.5 text-[16px] font-bold text-[#4A2559] focus:outline-none focus:bg-white focus:border-[#8A64A3] transition-all shadow-sm placeholder:text-[#8A64A3]/50"
              />
            </motion.div>

            {/* SELECT PRINCIPAL - text-[16px] OBLIGATORIO PARA EVITAR ZOOM EN iPHONE */}
            <motion.div layout>
              <label className="text-[11.5px] font-black text-[#4A2559] block mb-2 pl-1 uppercase tracking-wider">¿Qué deseas pedir?</label>
              <div className="relative">
                <select
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleChange}
                  required
                  className="w-full appearance-none rounded-2xl border-2 border-white/60 bg-white/50 px-4 py-3.5 pr-10 text-[16px] font-bold text-[#4A2559] focus:outline-none focus:bg-white focus:border-[#8A64A3] transition-all shadow-sm cursor-pointer"
                >
                  <option value="" disabled>Selecciona una opción...</option>
                  <option value="pastel">Pastel personalizado</option>
                  <option value="ramo">Ramo de Cupcakes</option>
                  <option value="caja">Caja de cupcakes</option>
                  <option value="zanahoria">Cupcakes de Zanahoria</option>
                </select>
                <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A64A3] pointer-events-none" />
              </div>
            </motion.div>

            {/* RUTAS DINÁMICAS ANIMADAS LIGERAS */}
            <AnimatePresence mode="popLayout">
              
              {/* PASTEL */}
              {formData.categoria === 'pastel' && (
                <motion.div {...formAnimation} className="space-y-3 border-l-4 border-[#8A64A3] pl-4 py-1">
                  {['tamanoPastel', 'panPastel', 'rellenoPastel'].map((field, idx) => {
                    const placeholders = ['Tamaño...', 'Sabor del pan...', 'Relleno...'];
                    const options = [
                      ['10 cm', '18 cm', '21 cm', '20 cm (Forma de corazón)'],
                      ['Vainilla', 'Chocolate'],
                      ['Sin relleno', 'Ganache semi amargo', 'Ganache blanco', 'Dulce de leche']
                    ];
                    return (
                      <div className="relative" key={field}>
                        {/* text-[16px] para evitar zoom */}
                        <select name={field} value={formData[field]} onChange={handleChange} required className="w-full appearance-none rounded-xl border border-white/60 bg-white/60 px-4 py-3 pr-10 text-[16px] font-semibold text-[#6A527A] focus:outline-none focus:bg-white focus:border-[#8A64A3] shadow-sm cursor-pointer">
                          <option value="" disabled>{placeholders[idx]}</option>
                          {options[idx].map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                        <ChevronDownIcon className="absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8A64A3]/50 pointer-events-none" />
                      </div>
                    );
                  })}
                  <div className="bg-white/60 px-4 py-2.5 rounded-xl border border-white/60 shadow-sm">
                    <p className="text-[10.5px] font-black italic text-[#8A64A3]">* Decorado con buttercream de merengue suizo</p>
                  </div>
                </motion.div>
              )}

              {/* RAMO */}
              {formData.categoria === 'ramo' && (
                <motion.div {...formAnimation} className="space-y-3 border-l-4 border-[#8A64A3] pl-4 py-1">
                  {['cantidadRamo', 'saborRamo', 'rellenoRamo'].map((field, idx) => {
                    const placeholders = ['Cantidad...', 'Sabor...', '¿Llevan relleno?'];
                    const options = [['7 pz', '12 pz', '19 pz'], ['Vainilla', 'Chocolate', 'Mixto'], ['Sí', 'No']];
                    return (
                      <div className="relative" key={field}>
                        <select name={field} value={formData[field]} onChange={handleChange} required className="w-full appearance-none rounded-xl border border-white/60 bg-white/60 px-4 py-3 pr-10 text-[16px] font-semibold text-[#6A527A] focus:outline-none focus:bg-white focus:border-[#8A64A3] shadow-sm cursor-pointer">
                          <option value="" disabled>{placeholders[idx]}</option>
                          {options[idx].map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                        <ChevronDownIcon className="absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8A64A3]/50 pointer-events-none" />
                      </div>
                    );
                  })}
                  <div className="bg-white/60 px-4 py-2.5 rounded-xl border border-white/60 shadow-sm">
                    <p className="text-[10.5px] font-black italic text-[#8A64A3]">* Decorados con buttercream de merengue suizo</p>
                  </div>
                </motion.div>
              )}

              {/* CAJA */}
              {formData.categoria === 'caja' && (
                <motion.div {...formAnimation} className="space-y-3 border-l-4 border-[#8A64A3] pl-4 py-1">
                  {['cantidadCaja', 'saborCaja', 'rellenoCaja'].map((field, idx) => {
                    const placeholders = ['Cantidad...', 'Sabor...', '¿Llevan relleno?'];
                    const options = [['4 pz', '6 pz', '12 pz'], ['Vainilla', 'Chocolate', 'Mixto'], ['Sí', 'No']];
                    return (
                      <div className="relative" key={field}>
                        <select name={field} value={formData[field]} onChange={handleChange} required className="w-full appearance-none rounded-xl border border-white/60 bg-white/60 px-4 py-3 pr-10 text-[16px] font-semibold text-[#6A527A] focus:outline-none focus:bg-white focus:border-[#8A64A3] shadow-sm cursor-pointer">
                          <option value="" disabled>{placeholders[idx]}</option>
                          {options[idx].map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                        <ChevronDownIcon className="absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8A64A3]/50 pointer-events-none" />
                      </div>
                    );
                  })}
                  <div className="bg-white/60 px-4 py-2.5 rounded-xl border border-white/60 shadow-sm">
                    <p className="text-[10.5px] font-black italic text-[#8A64A3]">* Decorados con buttercream de merengue suizo</p>
                  </div>
                </motion.div>
              )}

              {/* ZANAHORIA */}
              {formData.categoria === 'zanahoria' && (
                <motion.div {...formAnimation} className="space-y-3 border-l-4 border-[#8A64A3] pl-4 py-1">
                  <div className="relative">
                    <select name="presentacionZanahoria" value={formData.presentacionZanahoria} onChange={handleChange} required className="w-full appearance-none rounded-xl border border-white/60 bg-white/60 px-4 py-3 pr-10 text-[16px] font-semibold text-[#6A527A] focus:outline-none focus:bg-white focus:border-[#8A64A3] shadow-sm cursor-pointer">
                      <option value="" disabled>Presentación...</option>
                      <option value="Caja de 4 pz">Caja de 4 pz</option>
                      <option value="Caja de 6 pz">Caja de 6 pz</option>
                      <option value="Caja de 12 pz">Caja de 12 pz</option>
                    </select>
                    <ChevronDownIcon className="absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8A64A3]/50 pointer-events-none" />
                  </div>
                  <div className="bg-white/60 px-4 py-2.5 rounded-xl border border-white/60 shadow-sm">
                    <p className="text-[10.5px] font-black italic text-[#8A64A3]">* Decorados con buttercream de queso crema</p>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>

            <motion.button 
              layout
              type="submit" 
              whileHover={{ scale: 1.03, y: -2, boxShadow: "0px 10px 25px rgba(74,37,89,0.25)" }}
              whileTap={{ scale: 0.96 }}
              className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#8A64A3] to-[#4A2559] text-white font-black text-[15px] rounded-2xl py-4 mt-6 transition-all cursor-pointer shadow-[0_8px_15px_rgba(138,100,163,0.3)]"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Enviar WhatsApp
            </motion.button>
            
          </motion.form>
        </motion.div>
      </div>

      {/* ==========================================
          OLA INFERIOR (Transición al Footer Oscuro)
          ========================================== */}
      <div className="absolute bottom-0 left-0 w-full h-[40px] sm:h-[60px] overflow-hidden leading-none pointer-events-none translate-y-[1px]">
        {/* Capa trasera de la ola inferior */}
        <div className="form-wave-bottom-back absolute inset-0 w-[200%] h-full flex">
          <svg viewBox="0 0 2880 120" className="w-full h-full block" preserveAspectRatio="none">
            <path fill="#3A1C42" fillOpacity="0.4" d="M0,60 C288,100 432,100 720,60 C1008,20 1152,20 1440,60 C1728,100 1872,100 2160,60 C2448,20 2592,20 2880,60 V120 H0 Z" />
          </svg>
        </div>
        {/* Capa delantera sólida (mismo color que tu footer) */}
        <div className="form-wave-bottom-front absolute inset-0 w-[200%] h-full flex">
          <svg viewBox="0 0 2880 120" className="w-full h-full block" preserveAspectRatio="none">
            <path fill="#3A1C42" d="M0,60 C288,20 432,20 720,60 C1008,100 1152,100 1440,60 C1728,20 1872,20 2160,60 C2448,100 2592,100 2880,60 V120 H0 Z" />
          </svg>
        </div>
      </div>
      
    </section>
  );
}