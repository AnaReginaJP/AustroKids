import React from 'react';

export const AboutUs: React.FC = () => {
  return (
    <section id="desarrollo" className="py-24 bg-gradient-to-t from-black to-space-dark relative scroll-mt-28">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Acerca de <span className="text-space-gold">Nosotros</span>
            </h2>
            <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl hover:border-purple-500/30 transition-colors">
            
            {/* Intro */}
            <p className="text-xl text-center text-gray-200 mb-12 italic max-w-3xl mx-auto">
              "Para crear <span className="text-space-gold font-bold">AustroKids</span>, dividimos nuestro trabajo en dos fases críticas: la validación científica y la conexión humana."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Phase 1: Wolfram */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-red-500/20 rounded-lg text-red-400">
                         {/* Mathematical/Wolfram-ish icon */}
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Validación Científica</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-justify">
                  Todo comienza en nuestro entorno de desarrollo aislado con <strong className="text-red-400">Wolfram</strong>. Allí validamos matemáticamente cada órbita y escala. Es nuestro 'laboratorio de la verdad', separado y puro, para garantizar que la física sea exacta.
                </p>
              </div>

              {/* Phase 2: Deployment */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                         {/* Cloud/Web icon */}
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m16 16-4-4-4 4"/></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Plataforma de Alto Rendimiento</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-justify">
                  Pero la ciencia sola no conecta con los niños. Para eso, hemos desplegado una plataforma pública. Nuestra Landing Page, alojada en servidores <strong className="text-blue-400">Vultr</strong> y accesible vía <strong className="text-green-400">GoDaddy</strong>, no es solo informativa.
                </p>
              </div>
            </div>

            {/* Gemini/Capitan Cometa Section */}
            <div className="mt-12 pt-8 border-t border-white/10">
               <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1 space-y-4">
                     <h3 className="text-2xl font-bold text-purple-400">El Puente: Capitán Cometa</h3>
                     <p className="text-gray-300 leading-relaxed text-justify">
                        Allí vive el Capitán Cometa, nuestro Chatbot impulsado por la API de <strong className="text-purple-400">Gemini</strong>.
                     </p>
                     <p className="text-gray-300 leading-relaxed text-justify">
                        Mientras Wolfram asegura que lo que hacemos es cierto, Gemini y Vultr se aseguran de que el niño se divierta y aprenda. El Capitán Cometa recibe a los visitantes y resuelve sus dudas espaciales en tiempo real, sirviendo como el puente entre nuestra ciencia compleja y su curiosidad.
                     </p>
                  </div>
                  <div className="w-full md:w-1/3 flex justify-center items-center">
                     <div className="relative">
                        <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full"></div>
                        <span className="relative text-8xl animate-float">👨‍🚀</span>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};