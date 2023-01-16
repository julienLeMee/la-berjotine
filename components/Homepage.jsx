import React from 'react';
import Link from 'next/link';

const Homepage = () => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[2]' />
      <div className='p-5 text-white z-[2]'>
        <h1 className='text-5xl'>LA BERJOTINE</h1>
        <p className='py-5 text-xl'>Chambres d'hôtes</p>
        <Link href='/contact'>
          <p className='text-center w-20 py-2 rounded-lg bg-white text-gray-700 text-sm cursor-pointer hover:scale-105 hover:text-[#01647C] duration-300'>Contact</p>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
