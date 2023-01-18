import Image from 'next/image';
import React from 'react';
import vintageGalleryImg1 from '../public/assets/vintageGallery/vintageGallery-1.jpg'
import vintageGalleryImg2 from '../public/assets/vintageGallery/vintageGallery-2.jpg'
import vintageGalleryImg3 from '../public/assets/vintageGallery/vintageGallery-5.jpg'
import vintageGalleryImg4 from '../public/assets/vintageGallery/vintageGallery-4.jpg'
import vintageGalleryImg5 from '../public/assets/vintageGallery/vintageGallery-6.jpg'

const VintageGallery = () => {
  return (
    <div className='max-w-[80%] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>Galerie</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Image
            src={vintageGalleryImg1}
            alt='/'
            style={{ objectFit: 'cover' }}
            width='677'
            height='451'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={vintageGalleryImg2}
            alt='/'
            width='215'
            height='217'
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={vintageGalleryImg3}
            alt='/'
            width='215'
            height='217'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={vintageGalleryImg4}
            alt='/'
            width='215'
            height='217'
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src={vintageGalleryImg5}
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

export default VintageGallery;
