import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black/40 text-center text-gray-400 text-sm">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()} AustroKids.</p>
        <p className="mt-2">
          Hecho con 💜 y polvo de estrellas. Impulsado por <span className="text-space-gold font-bold">Gemini API</span>.
        </p>
      </div>
    </footer>
  );
};