// src/components/CakeTower.jsx
// Ilustracion plana del pastel de 3 pisos flotante del footer.

export default function CakeTower({ className }) {
  return (
    <svg viewBox="0 0 160 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="140" width="140" height="48" rx="12" fill="#FFFDF8" />
      <rect x="10" y="140" width="140" height="14" rx="7" fill="#8a64a3" />
      <rect x="35" y="90" width="90" height="48" rx="12" fill="#FFFDF8" />
      <rect x="35" y="90" width="90" height="14" rx="7" fill="#b892d1" />
      <rect x="55" y="45" width="50" height="43" rx="12" fill="#FFFDF8" />
      <rect x="55" y="45" width="50" height="14" rx="7" fill="#8a64a3" />
      <g transform="translate(80 38)">
        <circle cx="0" cy="-5" r="4" fill="#eedcff" />
        <circle cx="5" cy="-1" r="4" fill="#eedcff" />
        <circle cx="-5" cy="-1" r="4" fill="#eedcff" />
        <circle cx="3" cy="4" r="4" fill="#eedcff" />
        <circle cx="-3" cy="4" r="4" fill="#eedcff" />
        <circle cx="0" cy="0" r="3.5" fill="#8a64a3" />
      </g>
    </svg>
  );
}