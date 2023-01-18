import React from 'react';
import Link from 'next/link';

const Homepage = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover'>
      <img src='/assets/berjotine-homepage-2.jpg' alt='homepage' className='absolute top-0 left-0 right-0 bottom-0 z-[1] w-full h-screen object-cover' />
      {/* <img src='/assets/slider/slider-5.jpg' alt='homepage' className='absolute top-0 left-0 right-0 bottom-0 z-[1] w-full h-screen object-cover' /> */}
      <div className='absolute z-[2]' />
        <div className='max-w-[80%] text-white z-[2]'>
          <div>
          <h1 style={{textShadow: '0 0 10px #01647C'}} className='text-5xl md:text-6xl lg:text-6xl'>LA BERJOTINE</h1>
          <p style={{textShadow: '0 0 10px #01647C'}} className='my-5 text-xl'>Un coin de paradis au coeur du charolais</p>
          </div>
          <div className="w-24">
            <Link href='/contact'>
              <p className='text-center w-auto py-2 rounded-lg bg-white text-gray-700 text-sm cursor-pointer hover:scale-105 hover:text-[#01647C] duration-300'>Réserver</p>
            </Link>
          </div>
        </div>
    </div>
  );
}

export default Homepage;
