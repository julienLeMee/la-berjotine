import Image from 'next/image';
import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id='gallery' className='max-w-[90%] mx-auto mt-10'>
      <h1 className='text-2xl font-bold text-center p-4'>Galerie</h1>
      <div className='relative flex justify-center p-4'>
        <div className='relative w-full max-h-96' style={{ aspectRatio: '1440/600' }}>
          {SliderData.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === current ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.image}
                alt='/'
                fill
                className='object-cover max-h-96'
                priority={index === 0}
              />
            </div>
          ))}
          <FaArrowCircleLeft
            onClick={prevSlide}
            className='absolute top-[50%] left-[30px] translate-y-[-50%] text-white/70 cursor-pointer select-none z-[2]'
            size={50}
          />
          <FaArrowCircleRight
            onClick={nextSlide}
            className='absolute top-[50%] right-[30px] translate-y-[-50%] text-white/70 cursor-pointer select-none z-[2]'
            size={50}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
