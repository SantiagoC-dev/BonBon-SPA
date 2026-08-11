// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BackgroundDecorations from './components/BackgroundDecorations';
import HeroSection from './sections/HeroSection';
import ShowcaseSection from './sections/ShowcaseSection';
import FeaturedCarousel from './sections/FeaturedCarousel';
import AboutSection from './sections/AboutSection';
import MenuSection from './sections/MenuSection';
import DynamicForm from './sections/DynamicForm';
import Footer from './sections/Footer';
import TalleresPage from './sections/TalleresPage';

// 1. Agrupamos toda tu Landing Page en un solo componente
const LandingPage = () => (
  <main className="relative overflow-hidden">
    
    {/* EL SECRETO: Lo pones aquí arriba una sola vez */}
    <BackgroundDecorations tone="purple" />
    
    {/* Y debajo van todas tus secciones normales en el orden que elegiste */}
    <HeroSection />
    <ShowcaseSection />
    <FeaturedCarousel />
    <AboutSection />
    <MenuSection />
    <DynamicForm />
    <Footer />
    
  </main>
);

// 2. Configuramos el enrutador principal
function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal: Muestra toda tu página de inicio */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Ruta secundaria: Muestra únicamente la nueva pantalla de talleres */}
        <Route path="/talleres" element={<TalleresPage />} />
      </Routes>
    </Router>
  );
}

export default App;