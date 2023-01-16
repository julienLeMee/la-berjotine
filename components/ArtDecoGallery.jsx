import Image from 'next/image';
import React from 'react';
import cosyImg from '../public/assets/cosy.jpg'

const ArtDecoGallery = () => {
  return (
    <div className='max-w-[1100px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>Gallerie</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Image
            src={cosyImg}
            alt='/'
            style={{ objectFit: 'cover' }}
            width='677'
            height='451'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={cosyImg}
            alt='/'
            width='215'
            height='217'
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={cosyImg}
            alt='/'
            width='215'
            height='217'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={cosyImg}
            alt='/'
            width='215'
            height='217'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={cosyImg}
            alt='/'
            width='215'
            height='217'
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default ArtDecoGallery;
