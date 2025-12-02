import React from 'react';
import { SlideProps } from '../../types';

export const SplitSlide: React.FC<SlideProps> = ({ data }) => {
  const points = Array.isArray(data.content) ? data.content : [data.content];
  const showOverlay = !data.extraData?.noOverlay;

  return (
    <div className="flex flex-col md:flex-row h-full">
      {/* Text Section */}
      <div className="w-full md:w-1/2 p-12 flex flex-col justify-center bg-gray-800">
        <div className="h-1 w-24 bg-brand-primary mb-8"></div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          {data.title}
        </h2>
        <ul className="space-y-6">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start text-lg md:text-xl text-gray-300 leading-relaxed">
              <span className="mr-4 text-brand-primary font-bold">•</span>
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 h-full relative bg-black">
        {showOverlay && (
          <div className="absolute inset-0 bg-brand-dark opacity-40 z-10"></div>
        )}
        <img 
          src={data.image} 
          alt={data.title} 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};