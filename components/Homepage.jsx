import React from 'react';

const Homepage = () => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]' />
      <div className='p-5 text-white z-[2]'>
        <h1 className='text-5xl'>LA BERJOTINE</h1>
        <p className='py-5 text-xl'>Chambres d'hôtes</p>
        <button className='px-8 py-2 border rounded-lg'>Contact</button>
      </div>
    </div>
  );
}

export default Homepage;
