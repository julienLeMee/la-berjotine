import Image from 'next/image';
import React from 'react';
import cosyGalleryImg1 from '../public/assets/cosyGallery/cosyGallery-1.jpg'
import cosyGalleryImg2 from '../public/assets/cosyGallery/cosyGallery-2.jpg'
import cosyGalleryImg3 from '../public/assets/cosyGallery/cosyGallery-3.jpg'
import cosyGalleryImg4 from '../public/assets/cosyGallery/cosyGallery-4.jpg'
import cosyGalleryImg5 from '../public/assets/cosyGallery/cosyGallery-6.jpg'

const CosyGallery = () => {
  return (
    <div className='max-w-[1100px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>Galerie</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Image
            className='w-full h-full'
            src={cosyGalleryImg1}
            alt='/'
            style={{ objectFit: 'cover' }}
            width='677'
            height='451'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={cosyGalleryImg3}
            alt='/'
            width='215'
            height='217'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={cosyGalleryImg5}
            alt='/'
            width='215'
            height='217'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={cosyGalleryImg2}
            alt='/'
            width='215'
            height='217'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={cosyGalleryImg4}
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

export default CosyGallery;
