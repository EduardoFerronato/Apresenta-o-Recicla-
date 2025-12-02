import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ControlsProps {
  current: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
}

export const Controls: React.FC<ControlsProps> = ({ current, total, onNext, onPrev }) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-800">
        <div 
          className="h-full bg-brand-primary transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Control Bar */}
      <div className="flex justify-between items-center px-6 py-4 bg-gray-900/90 backdrop-blur-sm border-t border-gray-800">
        <div className="text-gray-400 text-sm font-mono">
          Slide {current + 1} / {total}
        </div>

        <div className="flex space-x-4">
          <button 
            onClick={onPrev}
            disabled={current === 0}
            className="p-2 rounded-full hover:bg-gray-700 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-white"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={onNext}
            disabled={current === total - 1}
            className="p-2 rounded-full hover:bg-brand-primary hover:text-gray-900 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-white"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="text-gray-500 text-sm hidden md:block">
          Recicla+ • 2025
        </div>
      </div>
    </div>
  );
};