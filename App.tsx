import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SolarSystem } from './components/SolarSystem';
import { ChatBot } from './components/ChatBot';
import { StarBackground } from './components/StarBackground';
import { Footer } from './components/Footer';
import { Features } from './components/Features';
import { AboutUs } from './components/AboutUs';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-space-dark via-[#1a1b4b] to-[#2d1b4e]">
      <StarBackground />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Hero />
          <Features />
          <SolarSystem />
          <AboutUs />
        </main>

        <Footer />
        
        <ChatBot />
      </div>
    </div>
  );
};

export default App;