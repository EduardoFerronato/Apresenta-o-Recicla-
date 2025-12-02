import React from 'react';
import { SlideData, SlideType } from '../types';
import { CoverSlide } from './slides/CoverSlide';
import { SplitSlide } from './slides/SplitSlide';
import { BulletSlide } from './slides/BulletSlide';
import { TechStackSlide } from './slides/TechStackSlide';
import { FlowSlide } from './slides/FlowSlide';
import { Recycle } from 'lucide-react';

interface SlideRendererProps {
  slide: SlideData;
  isActive: boolean;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({ slide, isActive }) => {
  // Styles for transition
  const baseClass = `absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform ${
    isActive ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-full -z-10'
  }`;

  // Helper to wrap generic slides if needed
  const renderContent = () => {
    switch (slide.type) {
      case SlideType.COVER:
        return <CoverSlide data={slide} isActive={isActive} />;
      case SlideType.SPLIT:
        return <SplitSlide data={slide} isActive={isActive} />;
      case SlideType.BULLETS:
        return <BulletSlide data={slide} isActive={isActive} />;
      case SlideType.TECH_STACK:
        return <TechStackSlide data={slide} isActive={isActive} />;
      case SlideType.FLOWCHART:
        return <FlowSlide data={slide} isActive={isActive} />;
      case SlideType.CLOSING:
        return (
           <div className="flex flex-col items-center justify-center h-full text-center px-8 bg-brand-primary text-gray-900">
             <Recycle size={100} className="mb-8 text-white animate-spin-slow" />
             <h2 className="text-6xl font-bold text-white mb-6">{slide.title}</h2>
             <p className="text-2xl font-medium mb-8 text-white/90">{slide.subtitle}</p>
             <p className="text-2xl">{slide.extraData?.contact}</p>
           </div>
        );
      default:
        return <div>Unknown Slide Type</div>;
    }
  };

  return (
    <div className={isActive ? "absolute inset-0 w-full h-full opacity-100 transition-opacity duration-500" : "hidden"}>
      {renderContent()}
    </div>
  );
};