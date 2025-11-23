import React from 'react';
import { PLANETS } from '../constants';

export const SolarSystem: React.FC = () => {
  return (
    <section id="planetas" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4 text-space-gold">Explora el Contenido Educativo</h3>
          <p className="text-lg text-gray-300">Conoce los planetas que los niños podrán estudiar en detalle dentro de la plataforma.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PLANETS.map((planet) => (
            <div 
              key={planet.name}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden w-full text-left"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors"></div>
              
              <div className="flex flex-col items-center text-center z-10 relative">
                <div className={`${planet.size} ${planet.color} rounded-full shadow-lg shadow-black/50 mb-4 flex items-center justify-center text-4xl transform group-hover:scale-110 transition-transform duration-500 animate-float`} style={{animationDuration: `${3 + Math.random()}s`}}>
                   <span className="drop-shadow-md">{planet.icon}</span> 
                </div>
                
                <h4 className="text-2xl font-bold mb-2 group-hover:text-space-gold transition-colors">{planet.name}</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {planet.description}
                </p>
                
                <div className="mt-2 text-xs text-purple-300 bg-purple-900/30 px-3 py-1 rounded-full border border-purple-500/30">
                   Gravedad: {planet.gravity}x
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};