import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/home/HeroSection';
import { MenuGrid } from './components/menu/MenuGrid';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main>
          <HeroSection />
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Popular Dishes
            </h2>
            <MenuGrid />
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;