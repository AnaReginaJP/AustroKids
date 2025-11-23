import React from 'react';
import { OrbitAnimation } from './OrbitAnimation';

export const Hero: React.FC = () => {
  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('desarrollo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="flex flex-col md:flex-row items-center justify-between min-h-[90vh] px-6 md:px-12 lg:px-24 relative overflow-hidden pt-10 md:pt-0">
      
      {/* Text Content */}
      <div className="w-full md:w-1/2 z-10 text-center md:text-left space-y-6 animate-float">
        <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-sm font-bold tracking-wide uppercase text-space-gold mb-2">
          ¡Bienvenidos exploradores!
        </div>
        <h2 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg">
          Descubre los Secretos del <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Sistema Solar
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 max-w-xl mx-auto md:mx-0">
          Ponte tu traje de astronauta y prepárate para un viaje increíble a través de las estrellas y planetas.
        </p>
        
        <div className="flex gap-4 justify-center md:justify-start mt-8">
          <button 
            onClick={scrollToAbout}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full font-bold text-lg shadow-lg shadow-purple-500/30 transition-all transform hover:scale-105 flex items-center gap-2 cursor-pointer"
          >
            Empezar Viaje 🪐
          </button>
        </div>
      </div>
      
      {/* Animation Content */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0 relative z-0">
         <div className="scale-75 md:scale-100">
            <OrbitAnimation />
         </div>
      </div>
      
    </section>
  );
};