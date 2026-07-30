function App() {
  return (
    /* 
      Contenedor principal Mobile-First: 
      Lo centramos en pantallas grandes (mx-auto) y le damos un ancho máximo (max-w-md) 
      para que siempre se vea como una app móvil.
    */
    <main className="w-full max-w-md mx-auto min-h-screen bg-bonbon-pale shadow-2xl relative overflow-x-hidden">
      
      {/* Mensaje temporal para confirmar que Tailwind funciona */}
      <div className="flex flex-col items-center justify-center h-screen text-center p-6">
        <h1 className="text-5xl font-black text-bonbon-dark mb-4">
          BonBon <br /> 
          <span className="text-2xl text-bonbon-main">repostería 🐰</span>
        </h1>
        <p className="font-bold text-bonbon-dark bg-white py-2 px-4 rounded-full shadow-sm">
          ¡Entorno limpio y listo! 🚀
        </p>
      </div>

      {/* 
        Aquí iremos importando nuestras secciones en este orden:
        <HeroSection />
        <ShowcaseSection />
        <AboutSection />
        <MenuSection />
        <FeaturedSection />
        <DynamicForm />
        <Footer /> 
      */}

    </main>
  )
}

export default App