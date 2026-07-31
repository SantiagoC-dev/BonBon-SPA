// src/components/Icons.jsx
// Set de iconos reutilizables. Todos heredan color con `currentColor`,
// así que se controlan con clases de texto de Tailwind (ej: text-bonbon-dark).

export function BunnyFace({ className }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="currentColor" aria-hidden="true">
      <ellipse cx="20" cy="24" rx="12" ry="11" />
      <ellipse cx="9" cy="8" rx="4.5" ry="13" transform="rotate(-20 9 8)" />
      <ellipse cx="31" cy="8" rx="4.5" ry="13" transform="rotate(20 31 8)" />
      <circle cx="15" cy="22" r="1.6" fill="white" />
      <circle cx="25" cy="22" r="1.6" fill="white" />
    </svg>
  );
}

export function BunnyOutline({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="15" rx="6.5" ry="6" />
      <path d="M7.5 9C6.5 5 8 2 9.5 2s2 3.5 1 7" />
      <path d="M16.5 9c1-4-.5-7-2-7s-2 3.5-1 7" />
      <circle cx="9.5" cy="14.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="14.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function StarOutline({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12,3 14.7,9.3 21.5,9.9 16.3,14.3 17.9,21 12,17.3 6.1,21 7.7,14.3 2.5,9.9 9.3,9.3" />
    </svg>
  );
}

export function CupcakeOutline({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 11c-.5-3 1.8-5 4-5s4.5 2 4 5" />
      <path d="M6 11h12l-1.3 8.2a2 2 0 0 1-2 1.8H9.3a2 2 0 0 1-2-1.8L6 11Z" />
      <path d="M6 11a2 2 0 0 1 0-4h12a2 2 0 0 1 0 4" />
    </svg>
  );
}

export function ArrowRight({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function PersonSilhouette({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7v1H4v-1Z" />
    </svg>
  );
}

export function CakeOutline({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20h16" />
      <path d="M5 20v-4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4" />
      <path d="M7 15v-3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3" />
      <path d="M12 11V7" />
      <circle cx="12" cy="5" r="1.3" />
    </svg>
  );
}

export function CroissantOutline({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 15c1-6 6-10 11-10 4 0 7 3 7 6 0 5-6 9-12 9-3 0-6-2-6-5Z" />
      <path d="M8 9c1 2 1 5 0 7M12 7c1.3 2.5 1.3 6 0 9M16 7c1 2 1 5 .3 7.5" />
    </svg>
  );
}

export function FacebookIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1Z" />
    </svg>
  );
}

export function InstagramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="16.5" cy="7.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TwitterIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.2-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.9 3.7A11.5 11.5 0 0 1 3.6 4.9a4.1 4.1 0 0 0 1.2 5.4c-.6 0-1.2-.2-1.7-.5v.1c0 2 1.4 3.6 3.2 4a4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.8A8.1 8.1 0 0 1 2 18.6a11.4 11.4 0 0 0 6.3 1.9c7.5 0 11.7-6.4 11.7-11.9v-.5c.8-.6 1.5-1.3 2-2.2Z" />
    </svg>
  );
}