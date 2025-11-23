import React, { useEffect, useRef, useState } from 'react';
import { Planet } from '../types';

interface AsteroidSimulatorProps {
  planet: Planet;
  onClose: () => void;
}

interface Asteroid {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
}

export const AsteroidSimulator: React.FC<AsteroidSimulatorProps> = ({ planet, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas to fill screen
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let animationFrameId: number;
    let asteroids: Asteroid[] = [];
    let particles: Particle[] = [];
    let rotation = 0;

    // Simulation Constants
    const PLANET_RADIUS = 60; // Base visual size
    const GRAVITY_CONSTANT = 0.5 * planet.gravity; // Adjust based on planet data
    
    // Game Loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Draw Planet Halo
      const gradient = ctx.createRadialGradient(cx, cy, PLANET_RADIUS * 0.8, cx, cy, PLANET_RADIUS * 2);
      gradient.addColorStop(0, planet.color.replace('bg-', '').replace('text-', '') || 'rgba(255,255,255,0.2)'); // simplified color logic
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(cx, cy, PLANET_RADIUS * 2, 0, Math.PI * 2);
      ctx.fill();

      // Draw Planet Body
      ctx.save();
      ctx.translate(cx, cy);
      rotation += planet.rotationSpeed;
      ctx.rotate(rotation);
      
      // Draw a simple representation of the planet
      ctx.beginPath();
      ctx.arc(0, 0, PLANET_RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--planet-color') || '#ccc'; 
      // Since we can't easily parse tailwind colors in canvas without a map, let's use a generic fill with the icon
      ctx.fill();
      
      // Draw the icon centered
      ctx.font = `${PLANET_RADIUS}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(planet.icon, 0, 0);
      
      ctx.restore();

      // Update and Draw Asteroids
      asteroids.forEach((asteroid, index) => {
        // Physics: Gravity
        const dx = cx - asteroid.x;
        const dy = cy - asteroid.y;
        const distSq = dx * dx + dy * dy;
        const dist = Math.sqrt(distSq);
        const force = GRAVITY_CONSTANT * 5000 / distSq; // G * M / r^2 (simplified)

        const ax = (dx / dist) * force;
        const ay = (dy / dist) * force;

        asteroid.vx += ax;
        asteroid.vy += ay;
        asteroid.x += asteroid.vx;
        asteroid.y += asteroid.vy;

        // Collision detection with planet
        if (dist < PLANET_RADIUS + asteroid.radius) {
          // Boom
          createExplosion(asteroid.x, asteroid.y, '#FFD700');
          asteroids.splice(index, 1);
          setScore(s => s + 1);
        } else {
            // Draw Asteroid
            ctx.beginPath();
            ctx.arc(asteroid.x, asteroid.y, asteroid.radius, 0, Math.PI * 2);
            ctx.fillStyle = asteroid.color;
            ctx.fill();
            
            // Tail/Trail
            ctx.beginPath();
            ctx.moveTo(asteroid.x, asteroid.y);
            ctx.lineTo(asteroid.x - asteroid.vx * 3, asteroid.y - asteroid.vy * 3);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.stroke();
        }

        // Remove if too far (optimization)
        if (asteroid.x < -100 || asteroid.x > canvas.width + 100 || asteroid.y < -100 || asteroid.y > canvas.height + 100) {
           asteroids.splice(index, 1);
        }
      });

      // Update and Draw Particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;
        if (p.life <= 0) {
            particles.splice(i, 1);
        } else {
            ctx.globalAlpha = p.life;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    const createExplosion = (x: number, y: number, color: string) => {
        for(let i=0; i<10; i++) {
            particles.push({
                x, y,
                vx: (Math.random() - 0.5) * 5,
                vy: (Math.random() - 0.5) * 5,
                life: 1.0,
                color
            });
        }
    };

    // Click handler to launch asteroids
    const handleCanvasClick = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Initial velocity towards planet center, but with some randomness/offset to create orbits
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        const angle = Math.atan2(cy - y, cx - x);
        
        // Add tangential velocity for orbit chance
        const speed = 4;
        const orbitOffset = (Math.random() - 0.5) * 2; // Random variation

        asteroids.push({
            x, y,
            vx: Math.cos(angle + orbitOffset) * speed,
            vy: Math.sin(angle + orbitOffset) * speed,
            radius: Math.random() * 3 + 2,
            color: '#888'
        });
    };

    canvas.addEventListener('mousedown', handleCanvasClick);
    render();

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousedown', handleCanvasClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [planet]);

  return (
    <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center animate-fadeIn">
        <canvas ref={canvasRef} className="absolute inset-0 cursor-crosshair" />
        
        <div className="absolute top-4 left-4 right-4 pointer-events-none flex justify-between items-start">
            <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/20 text-white max-w-md pointer-events-auto">
                <h2 className="text-2xl font-bold text-space-gold mb-2 flex items-center gap-2">
                    {planet.icon} {planet.name}
                </h2>
                <div className="text-sm space-y-1">
                    <p><strong>Gravedad:</strong> {planet.gravity}x (Tierra = 1.0)</p>
                    <p><strong>Misión:</strong> Haz clic en cualquier lugar para lanzar asteroides.</p>
                    <p className="text-gray-400 text-xs mt-2">Observa cómo la gravedad curva su trayectoria.</p>
                </div>
            </div>
            
            <button 
                onClick={onClose}
                className="bg-red-500/80 hover:bg-red-600 text-white rounded-full p-3 pointer-events-auto transition-transform hover:scale-110"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        </div>

        <div className="absolute bottom-8 pointer-events-none">
            <div className="text-4xl font-bold text-white drop-shadow-lg">
                Impactos: <span className="text-space-gold">{score}</span>
            </div>
        </div>
    </div>
  );
};