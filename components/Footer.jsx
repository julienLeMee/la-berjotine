import React from 'react'
import Link from 'next/link'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { TbBrandBooking } from 'react-icons/tb'

const Footer = () => {
  return (
    <div className='pt-30'>
      <div className='flex max-w-[80%] mx-auto items-center justify-evenly my-4 sm:w-[80%] border-t p-4'>
        <p>2023 | © La Berjotine tous droits réservés</p>
        <Link href='https://www.booking.com/hotel/fr/la-berjotine.fr.html' target='_blank'>
          <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-[#01647C] ease-in duration-300'>
            <TbBrandBooking />
          </div>
        </Link>
        <Link href='https://fr-fr.facebook.com/laberjotine/' target='_blank'>
          <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-[#01647C] ease-in duration-300'>
            <FaFacebookF />
          </div>
        </Link>
        <Link href='mailto:julemee@gmail.com' target='_blank'>
          <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-[#01647C] ease-in duration-300'>
            <AiOutlineMail />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Footer
