import React from 'react';
import { SlideProps } from '../../types';

export const BulletSlide: React.FC<SlideProps> = ({ data }) => {
  const points = Array.isArray(data.content) ? data.content : [data.content];

  return (
    <div className="h-full p-12 md:p-24 flex flex-col justify-center bg-gray-900 relative overflow-hidden">
      {/* Decorative Icon */}
      <div className="absolute top-10 right-10 opacity-10 transform scale-150">
        {data.extraData?.icon}
      </div>

      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-brand-primary border-b border-gray-700 pb-4 inline-block max-w-3xl">
        {data.title}
      </h2>
      
      <div className="grid grid-cols-1 gap-6 max-w-4xl">
        {points.map((point, idx) => (
          <div 
            key={idx} 
            className="bg-gray-800 p-6 rounded-lg border-l-4 border-brand-primary shadow-lg transform transition-all duration-500 hover:scale-102 hover:bg-gray-750"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <p className="text-xl text-gray-200">{point}</p>
          </div>
        ))}
      </div>
    </div>
  );
};