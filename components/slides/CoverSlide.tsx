import React from 'react';
import { SlideProps } from '../../types';
import { Recycle } from 'lucide-react';

export const CoverSlide: React.FC<SlideProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 bg-gradient-to-br from-brand-dark via-gray-900 to-gray-900">
      <div className="mb-8 animate-bounce">
        <Recycle size={120} className="text-brand-primary" />
      </div>
      
      <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
        {data.title}
      </h1>
      
      <h2 className="text-2xl md:text-3xl text-brand-light font-light mb-12 max-w-2xl">
        {data.subtitle}
      </h2>

      <div className="border-t border-gray-600 pt-8 mt-8">
        <div className="text-xl font-semibold text-white">
          {data.extraData.authors.join(' & ')}
        </div>
        <div className="text-gray-400 mt-2">
          {data.extraData.institution} • {data.extraData.date}
        </div>
      </div>
    </div>
  );
};