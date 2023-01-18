import Image from 'next/image';
import React from 'react';
import artDecoGalleryImg1 from '../public/assets/artDecoGallery/artDecoGallery-1.jpg'
import artDecoGalleryImg2 from '../public/assets/artDecoGallery/artDecoGallery-2.jpg'
import artDecoGalleryImg3 from '../public/assets/artDecoGallery/artDecoGallery-3.jpg'
import artDecoGalleryImg4 from '../public/assets/artDecoGallery/artDecoGallery-4.jpg'
import artDecoGalleryImg5 from '../public/assets/artDecoGallery/artDecoGallery-6.jpg'

const ArtDecoGallery = () => {
  return (
    <div className='max-w-[80%] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>Galerie</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Image
            src={artDecoGalleryImg1}
            alt='/'
            style={{ objectFit: 'cover' }}
            width='677'
            height='451'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={artDecoGalleryImg2}
            alt='/'
            width='215'
            height='217'
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={artDecoGalleryImg3}
            alt='/'
            width='215'
            height='217'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={artDecoGalleryImg5}
            alt='/'
            width='215'
            height='217'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={artDecoGalleryImg4}
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
