// src/sections/DynamicForm.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// TODO: reemplaza con el número real de WhatsApp de tu novia (ej. 525500000000)
const WHATSAPP_NUMBER = '525521105157';

// Icono de WhatsApp para el botón
const WhatsAppIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export default function DynamicForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    categoria: '',
    // Pastel
    tamanoPastel: '', panPastel: '', rellenoPastel: '',
    // Ramo
    cantidadRamo: '', saborRamo: '', rellenoRamo: '',
    // Caja
    cantidadCaja: '', saborCaja: '', rellenoCaja: '',
    // Zanahoria
    presentacionZanahoria: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, categoria } = formData;
    
    // Obtenemos el texto legible de la categoría para el mensaje
    const catText = {
      'pastel': 'Pastel personalizado',
      'ramo': 'Ramo de Cupcakes',
      'caja': 'Caja de cupcakes',
      'zanahoria': 'Caja de cupcakes de Zanahoria'
    }[categoria];

    let mensaje = `¡Hola BonBon! Mi nombre es *${nombre}*.\nMe interesa hacer un pedido de *${catText}*:\n\n`;

    if (categoria === 'pastel') {
      mensaje += `- Tamaño: ${formData.tamanoPastel}\n`;
      mensaje += `- Pan: ${formData.panPastel}\n`;
      mensaje += `- Relleno: ${formData.rellenoPastel}\n`;
      mensaje += `\n*(Incluye cobertura de Buttercream Suizo)*`;
    } 
    else if (categoria === 'ramo') {
      mensaje += `- Cantidad: ${formData.cantidadRamo}\n`;
      mensaje += `- Sabor: ${formData.saborRamo}\n`;
      mensaje += `- ¿Lleva relleno?: ${formData.rellenoRamo}\n`;
      mensaje += `\n*(Decorados con buttercream de merengue suizo)*`;
    }
    else if (categoria === 'caja') {
      mensaje += `- Cantidad: ${formData.cantidadCaja}\n`;
      mensaje += `- Sabor: ${formData.saborCaja}\n`;
      mensaje += `- ¿Lleva relleno?: ${formData.rellenoCaja}\n`;
      mensaje += `\n*(Decorados con buttercream de merengue suizo)*`;
    }
    else if (categoria === 'zanahoria') {
      mensaje += `- Presentación: ${formData.presentacionZanahoria}\n`;
      mensaje += `\n*(Decorados con buttercream de queso crema)*`;
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    /* 
      1. Sin fondo sólido para que se vea el BackgroundDecorations global.
      2. py-20 px-6 para mantener los márgenes responsivos.
    */
    <section className="relative z-10 py-20 px-6 overflow-hidden flex flex-col items-center">
      
      <div className="text-center mb-10 relative z-10">
        <h2 className="font-nunito font-black text-4xl text-bonbon-dark tracking-tight">
          Haz tu pedido
        </h2>
        <p className="text-sm font-extrabold text-bonbon-main/80 uppercase tracking-widest mt-1">
          Cotización rápida
        </p>
      </div>

      {/* 
        Tarjeta Glassmorphism:
        bg-white/70 y backdrop-blur-md permiten que se vea el fondo borroso 
        a través del formulario, dándole el look premium de iOS.
      */}
      <div className="w-full max-w-[400px] bg-white/70 backdrop-blur-md border border-white/80 rounded-[2.5rem] shadow-[0_15px_35px_rgba(138,100,163,0.15)] p-8 relative z-10">
        
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* CAMPOS GLOBALES */}
          <div>
            <label className="text-[13px] font-extrabold text-bonbon-dark/80 block mb-1.5 px-1 uppercase tracking-wider">Tu Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ej. María Pérez"
              required
              className="w-full rounded-2xl border-2 border-white/60 bg-white/50 px-4 py-3.5 text-sm font-bold text-bonbon-dark focus:outline-none focus:bg-white focus:border-bonbon-main transition-all shadow-sm placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="text-[13px] font-extrabold text-bonbon-dark/80 block mb-1.5 px-1 uppercase tracking-wider">¿Qué deseas pedir?</label>
            <select
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border-2 border-white/60 bg-white/50 px-4 py-3.5 text-sm font-bold text-bonbon-dark focus:outline-none focus:bg-white focus:border-bonbon-main transition-all shadow-sm appearance-none cursor-pointer"
            >
              <option value="" disabled>Selecciona una opción...</option>
              <option value="pastel">Pastel personalizado</option>
              <option value="ramo">Ramo de Cupcakes</option>
              <option value="caja">Caja de cupcakes</option>
              <option value="zanahoria">Cupcakes de Zanahoria (especiales)</option>
            </select>
          </div>

          {/* RUTAS DINÁMICAS ANIMADAS */}
          <AnimatePresence mode="sync">
            
            {/* PASTEL */}
            {formData.categoria === 'pastel' && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: '1.25rem' }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="overflow-hidden space-y-3 border-l-4 border-bonbon-main pl-4"
              >
                <select name="tamanoPastel" value={formData.tamanoPastel} onChange={handleChange} required className="w-full rounded-xl border border-[#eedcff] bg-white px-3 py-2.5 text-sm font-semibold text-bonbon-dark shadow-sm">
                  <option value="" disabled>Tamaño...</option>
                  <option value="10 cm">10 cm</option>
                  <option value="18 cm">18 cm</option>
                  <option value="21 cm">21 cm</option>
                  <option value="20 cm (Corazón)">20 cm (Forma de corazón)</option>
                </select>
                <select name="panPastel" value={formData.panPastel} onChange={handleChange} required className="w-full rounded-xl border border-[#eedcff] bg-white px-3 py-2.5 text-sm font-semibold text-bonbon-dark shadow-sm">
                  <option value="" disabled>Sabor del pan...</option>
                  <option value="Vainilla">Vainilla</option>
                  <option value="Chocolate">Chocolate</option>
                </select>
                <select name="rellenoPastel" value={formData.rellenoPastel} onChange={handleChange} required className="w-full rounded-xl border border-[#eedcff] bg-white px-3 py-2.5 text-sm font-semibold text-bonbon-dark shadow-sm">
                  <option value="" disabled>Relleno...</option>
                  <option value="Sin relleno">Sin relleno</option>
                  <option value="Ganache semi amargo">Ganache semi amargo</option>
                  <option value="Ganache blanco">Ganache blanco</option>
                  <option value="Dulce de leche">Dulce de leche</option>
                </select>
                <div className="bg-white/60 px-3 py-2 rounded-lg border border-bonbon-main/20">
                  <p className="text-[10px] font-black italic text-bonbon-main/80">* Incluye cobertura de Buttercream Suizo</p>
                </div>
              </motion.div>
            )}

            {/* RAMO */}
            {formData.categoria === 'ramo' && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: '1.25rem' }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="overflow-hidden space-y-3 border-l-4 border-bonbon-main pl-4"
              >
                <select name="cantidadRamo" value={formData.cantidadRamo} onChange={handleChange} required className="w-full rounded-xl border border-[#eedcff] bg-white px-3 py-2.5 text-sm font-semibold text-bonbon-dark shadow-sm">
                  <option value="" disabled>Cantidad...</option>
                  <option value="7 pz">7 pz</option>
                  <option value="12 pz">12 pz</option>
                  <option value="19 pz">19 pz</option>
                </select>
                <select name="saborRamo" value={formData.saborRamo} onChange={handleChange} required className="w-full rounded-xl border border-[#eedcff] bg-white px-3 py-2.5 text-sm font-semibold text-bonbon-dark shadow-sm">
                  <option value="" disabled>Sabor...</option>
                  <option value="Vainilla">Vainilla</option>
                  <option value="Chocolate">Chocolate</option>
                  <option value="Mixto">Mixto</option>
                </select>
                <select name="rellenoRamo" value={formData.rellenoRamo} onChange={handleChange} required className="w-full rounded-xl border border-[#eedcff] bg-white px-3 py-2.5 text-sm font-semibold text-bonbon-dark shadow-sm">
                  <option value="" disabled>¿Llevan relleno?</option>
                  <option value="Sí">Sí</option>
                  <option value="No">No</option>
                </select>
                <div className="bg-white/60 px-3 py-2 rounded-lg border border-bonbon-main/20">
                  <p className="text-[10px] font-black italic text-bonbon-main/80">* Decorados con buttercream de merengue suizo</p>
                </div>
              </motion.div>
            )}

            {/* CAJA */}
            {formData.categoria === 'caja' && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: '1.25rem' }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="overflow-hidden space-y-3 border-l-4 border-bonbon-main pl-4"
              >
                <select name="cantidadCaja" value={formData.cantidadCaja} onChange={handleChange} required className="w-full rounded-xl border border-[#eedcff] bg-white px-3 py-2.5 text-sm font-semibold text-bonbon-dark shadow-sm">
                  <option value="" disabled>Cantidad...</option>
                  <option value="4 pz">4 pz</option>
                  <option value="6 pz">6 pz</option>
                  <option value="12 pz">12 pz</option>
                </select>
                <select name="saborCaja" value={formData.saborCaja} onChange={handleChange} required className="w-full rounded-xl border border-[#eedcff] bg-white px-3 py-2.5 text-sm font-semibold text-bonbon-dark shadow-sm">
                  <option value="" disabled>Sabor...</option>
                  <option value="Vainilla">Vainilla</option>
                  <option value="Chocolate">Chocolate</option>
                  <option value="Mixto">Mixto</option>
                </select>
                <select name="rellenoCaja" value={formData.rellenoCaja} onChange={handleChange} required className="w-full rounded-xl border border-[#eedcff] bg-white px-3 py-2.5 text-sm font-semibold text-bonbon-dark shadow-sm">
                  <option value="" disabled>¿Llevan relleno?</option>
                  <option value="Sí">Sí</option>
                  <option value="No">No</option>
                </select>
                <div className="bg-white/60 px-3 py-2 rounded-lg border border-bonbon-main/20">
                  <p className="text-[10px] font-black italic text-bonbon-main/80">* Decorados con buttercream de merengue suizo</p>
                </div>
              </motion.div>
            )}

            {/* ZANAHORIA */}
            {formData.categoria === 'zanahoria' && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: '1.25rem' }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="overflow-hidden space-y-3 border-l-4 border-bonbon-main pl-4"
              >
                <select name="presentacionZanahoria" value={formData.presentacionZanahoria} onChange={handleChange} required className="w-full rounded-xl border border-[#eedcff] bg-white px-3 py-2.5 text-sm font-semibold text-bonbon-dark shadow-sm">
                  <option value="" disabled>Presentación...</option>
                  <option value="Caja de 4 pz">Caja de 4 pz</option>
                  <option value="Caja de 6 pz">Caja de 6 pz</option>
                  <option value="Caja de 12 pz">Caja de 12 pz</option>
                </select>
                <div className="bg-white/60 px-3 py-2 rounded-lg border border-bonbon-main/20">
                  <p className="text-[10px] font-black italic text-bonbon-main/80">* Decorados con buttercream de queso crema</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button 
            type="submit" 
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-bonbon-dark to-[#3a1c42] text-white font-black text-lg rounded-2xl py-4 mt-6 shadow-md transition-all cursor-pointer"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Enviar WhatsApp
          </motion.button>
          
        </form>
      </div>

      {/* Divisor hacia el Footer (Ondas que transicionan al color oscuro del footer) */}
      <div className="absolute bottom-0 left-0 w-full translate-y-[1px]">
        <svg viewBox="0 0 1440 120" className="w-full h-auto fill-[#3a1c42]" preserveAspectRatio="none">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,106.7C1248,107,1344,85,1392,74.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}