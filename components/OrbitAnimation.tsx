import React from 'react';

export const OrbitAnimation: React.FC = () => {
  return (
    <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center pointer-events-none">
      {/* Sun */}
      <div className="absolute w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-[0_0_60px_rgba(255,165,0,0.6)] z-20 animate-pulse"></div>

      {/* Orbit 1: Mercury */}
      <div className="absolute border border-white/10 rounded-full w-[140px] h-[140px] md:w-[200px] md:h-[200px] animate-spin" style={{ animationDuration: '6s' }}>
        <div className="absolute top-[15%] right-[15%] w-3 h-3 bg-gray-400 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
      </div>

      {/* Orbit 2: Venus */}
      <div className="absolute border border-white/10 rounded-full w-[190px] h-[190px] md:w-[280px] md:h-[280px] animate-spin" style={{ animationDuration: '10s' }}>
        <div className="absolute top-[50%] -left-[6px] w-4 h-4 bg-yellow-200 rounded-full shadow-[0_0_10px_rgba(255,255,0,0.3)]"></div>
      </div>

      {/* Orbit 3: Earth */}
      <div className="absolute border border-white/10 rounded-full w-[240px] h-[240px] md:w-[360px] md:h-[360px] animate-spin" style={{ animationDuration: '16s' }}>
        <div className="absolute bottom-[10%] right-[15%] w-5 h-5 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(0,100,255,0.4)]"></div>
      </div>
      
       {/* Orbit 4: Mars */}
      <div className="absolute border border-white/10 rounded-full w-[290px] h-[290px] md:w-[440px] md:h-[440px] animate-spin" style={{ animationDuration: '24s' }}>
        <div className="absolute top-[0%] left-[50%] w-4 h-4 bg-red-500 rounded-full shadow-[0_0_10px_rgba(255,50,50,0.4)]"></div>
      </div>

      {/* Decorative Outer Ring */}
      <div className="absolute border border-dashed border-white/5 rounded-full w-[340px] h-[340px] md:w-[540px] md:h-[540px] animate-spin" style={{ animationDuration: '60s' }}></div>
    </div>
  );
};