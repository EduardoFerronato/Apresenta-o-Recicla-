import React from 'react';
import { SlideProps } from '../../types';

export const BulletSlide: React.FC<SlideProps> = ({ data }) => {
  const points = Array.isArray(data.content) ? data.content : [data.content];
  const hasImage = !!data.image;

  if (hasImage) {
    return (
      <div className="flex flex-col md:flex-row h-full w-full bg-gray-900">
        {/* Content Section */}
        <div className="w-full md:w-3/5 p-8 md:p-16 flex flex-col justify-center relative z-10">
           {/* Decorative Icon */}
            <div className="absolute top-6 right-6 opacity-10 transform scale-100">
                {data.extraData?.icon}
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-brand-primary border-b border-gray-700 pb-4 inline-block">
                {data.title}
            </h2>

            <div className="flex flex-col gap-4 overflow-y-auto max-h-[70vh] pr-2 custom-scrollbar">
                {points.map((point, idx) => (
                <div 
                    key={idx} 
                    className="bg-gray-800 p-4 md:p-5 rounded-lg border-l-4 border-brand-primary shadow-lg transform transition-all duration-500 hover:translate-x-2"
                    style={{ transitionDelay: `${idx * 100}ms` }}
                >
                    <p className="text-lg md:text-xl text-gray-200 leading-snug">{point}</p>
                </div>
                ))}
            </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-2/5 relative hidden md:block h-full">
            <div className="absolute inset-0 bg-gradient-to-l from-gray-900/80 to-transparent z-10" />
            <img 
                src={data.image} 
                alt={data.title} 
                className="w-full h-full object-cover opacity-80"
            />
        </div>
      </div>
    );
  }

  // Original Layout (Centered without image)
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