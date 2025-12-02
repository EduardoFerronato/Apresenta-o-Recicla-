import React from 'react';
import { SlideProps } from '../../types';

export const TechStackSlide: React.FC<SlideProps> = ({ data }) => {
  const items = data.extraData?.items || [];

  return (
    <div className="h-full flex flex-col items-center justify-center p-8 bg-gray-900">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-4">{data.title}</h2>
        <p className="text-2xl text-gray-400">{data.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {items.map((item: any, idx: number) => (
          <div key={idx} className="flex items-center p-8 bg-gray-800 rounded-xl shadow-xl hover:shadow-brand-primary/20 transition-all border border-gray-700">
            <div className="p-4 bg-gray-700 rounded-full text-brand-accent mr-6">
              {React.cloneElement(item.icon, { size: 32 })}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{item.name}</h3>
              <p className="text-lg text-brand-primary mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};