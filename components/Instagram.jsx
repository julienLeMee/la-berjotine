import React from 'react'
import IgImg1 from '../public/assets/ig-img-1.jpg'
import IgImg2 from '../public/assets/ig-img-2.jpg'
import IgImg3 from '../public/assets/ig-img-3.jpg'
import IgImg4 from '../public/assets/ig-img-4.jpg'
import IgImg5 from '../public/assets/ig-img-5.jpg'
import IgImg6 from '../public/assets/ig-img-6.jpg'
import InstagramImg from './InstagramImg'

const Instagram = () => {
  return (
    <div className='max-w-[80%] mx-auto text-center py-24'>
      <p className='text-xl font-bold'>Follow me on Instagram</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
        <InstagramImg socialImg={IgImg1} />
        <InstagramImg socialImg={IgImg2} />
        <InstagramImg socialImg={IgImg3} />
        <InstagramImg socialImg={IgImg4} />
        <InstagramImg socialImg={IgImg5} />
        <InstagramImg socialImg={IgImg6} />
      </div>
    </div>
  )
}

export default Instagram
