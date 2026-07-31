export default function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* 1. DEFINICIÓN DE FORMAS */}
          
          {/* Conejito (Intacto, como pediste) */}
          <g id="bunny">
            <circle cx="0" cy="5" r="9" />
            <ellipse cx="-4" cy="-5" rx="3.5" ry="9" transform="rotate(-15 -4 -5)" />
            <ellipse cx="4" cy="-5" rx="3.5" ry="9" transform="rotate(15 4 -5)" />
          </g>
          
          {/* Estrella "Gordita y Redonda" (Bordes internos más anchos y puntas redondeadas) */}
          <polygon 
            id="star5" 
            points="0,-9 3.5,-3 9.5,-2.5 4.5,2 6.5,8.5 0,4.5 -6.5,8.5 -4.5,2 -9.5,-2.5 -3.5,-3" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinejoin="round" 
          />
          
          {/* Destello/Sparkle */}
          <path id="sparkle4" d="M 0,-10 Q 0,0 10,0 Q 0,0 0,10 Q 0,0 -10,0 Q 0,0 0,-10 Z" />

          {/* 2. EL PATRÓN CON PALETA DE COLORES VARIADA */}
          <pattern
            id="bonbonPattern"
            width="300"
            height="300"
            patternUnits="userSpaceOnUse"
          >
            {/* Zona Superior */}
            <use href="#bunny" transform="translate(60, 40) scale(1.1) rotate(10)" fill="#9b6bb0" opacity="0.35" />
            {/* Nota: En las estrellas usamos 'color' además de 'fill' para que el borde redondeado tome el mismo tono */}
            <use href="#star5" transform="translate(180, 50) scale(1.1) rotate(-15)" fill="#c49bde" opacity="0.45" color="#c49bde" />
            <use href="#sparkle4" transform="translate(260, 80) scale(0.8) rotate(15)" fill="#7c4f91" opacity="0.3" />
            <circle cx="120" cy="90" r="3.5" fill="#d1b3e6" opacity="0.5" />

            {/* Zona Media */}
            <use href="#star5" transform="translate(50, 160) scale(0.8) rotate(25)" fill="#84579c" opacity="0.35" color="#84579c" />
            <use href="#sparkle4" transform="translate(140, 150) scale(1) rotate(5)" fill="#c49bde" opacity="0.4" />
            <use href="#bunny" transform="translate(240, 170) scale(0.9) rotate(-15)" fill="#af80c7" opacity="0.4" />
            <circle cx="200" cy="120" r="3" fill="#9b6bb0" opacity="0.35" />
            <circle cx="30" cy="230" r="4" fill="#7c4f91" opacity="0.25" />

            {/* Zona Inferior */}
            <use href="#bunny" transform="translate(130, 260) scale(1) rotate(-5)" fill="#7c4f91" opacity="0.3" />
            <use href="#star5" transform="translate(260, 270) scale(0.75) rotate(45)" fill="#af80c7" opacity="0.45" color="#af80c7" />
            <use href="#sparkle4" transform="translate(60, 280) scale(0.7) rotate(-10)" fill="#c49bde" opacity="0.4" />
            <circle cx="210" cy="240" r="2.5" fill="#9b6bb0" opacity="0.4" />
          </pattern>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#bonbonPattern)" />
      </svg>
    </div>
  );
}