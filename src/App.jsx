// src/App.jsx
import BackgroundDecorations from './components/BackgroundDecorations';
import HeroSection from './sections/HeroSection';
import ShowcaseSection from './sections/ShowcaseSection';
import FeaturedCarousel from './sections/FeaturedCarousel';
import AboutSection from './sections/AboutSection';
import MenuSection from './sections/MenuSection';
import DynamicForm from './sections/DynamicForm';
import Footer from './sections/Footer';

function App() {
  return (
    <main className="relative overflow-hidden">
      
      {/* EL SECRETO: Lo pones aquí arriba una sola vez */}
      <BackgroundDecorations tone="purple" />
      
      {/* Y debajo van todas tus secciones normales */}
      <HeroSection />
      <ShowcaseSection />
      <FeaturedCarousel />
      <AboutSection />
      <MenuSection />
      <DynamicForm />
      <Footer />
      
    </main>
  );
}

export default App;