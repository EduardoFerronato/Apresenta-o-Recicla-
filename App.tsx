import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants';
import { SlideRenderer } from './components/SlideRenderer';
import { Controls } from './components/Controls';

const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gray-900 text-white selection:bg-brand-primary selection:text-white">
      {/* Main Slide Area */}
      <main className="w-full h-full pb-16"> {/* Padding bottom for controls */}
        {SLIDES.map((slide, index) => (
          <SlideRenderer 
            key={slide.id} 
            slide={slide} 
            isActive={index === currentSlideIndex} 
          />
        ))}
      </main>

      {/* Navigation & Overlay */}
      <Controls 
        current={currentSlideIndex} 
        total={SLIDES.length} 
        onNext={nextSlide} 
        onPrev={prevSlide} 
      />
    </div>
  );
};

export default App;