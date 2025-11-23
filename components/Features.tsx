import React from 'react';

export const Features: React.FC = () => {
  const features = [
    {
      title: "Lanzamiento de Asteroides",
      desc: "Una simulación de física divertida donde los niños lanzan objetos espaciales para entender la gravedad.",
      icon: "☄️"
    },
    {
      title: "Gravedad Realista",
      desc: "Cada planeta tiene su propia fuerza gravitacional. ¡Descubre por qué saltas más alto en la Luna!",
      icon: "⚖️"
    },
    {
      title: "Aprendizaje Interactivo",
      desc: "Sin textos aburridos. Todo se aprende experimentando, jugando y observando reacciones.",
      icon: "🎮"
    }
  ];

  return (
    <section className="py-16 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-white mb-12">
          Lo que incluye el <span className="text-space-gold">Proyecto</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-space-light/50 p-8 rounded-xl border border-white/5 hover:border-purple-500/50 transition-colors text-center">
              <div className="text-5xl mb-4">{f.icon}</div>
              <h4 className="text-xl font-bold text-purple-200 mb-3">{f.title}</h4>
              <p className="text-gray-300 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};