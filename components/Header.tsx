import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="px-6 py-4 flex justify-between items-center bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <span className="text-3xl">🚀</span>
        <h1 className="text-2xl font-bold tracking-wider text-white">
          Austro<span className="text-space-gold">Kids</span>
        </h1>
      </div>
    </header>
  );
};