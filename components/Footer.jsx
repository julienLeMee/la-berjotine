import React from 'react'
import Link from 'next/link'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='pt-10'>
      <div className='flex max-w-[80%] mx-auto items-center justify-evenly my-4 sm:w-[80%] border-t p-4 pt-10'>
        <p className='text-sm'>
          13 Rue du Calvaire <br />
          71120 Charolles <br />
          <a className='text-[#01647C]' href="tel:0687334027">06.87.33.40.27</a> <br />
          <a className='text-[#01647C]' href="tel:0385241035">03.85.24.10.35</a>
        </p>
        <Link href="tel:0687324027">
          <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-[#01647C] ease-in duration-300'>
            <BsFillTelephoneFill />
          </div>
        </Link>
        <Link href='mailto:laberjotine@gmail.com' target='_blank'>
          <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-[#01647C] ease-in duration-300'>
            <AiOutlineMail />
          </div>
        </Link>
        <Link href='https://fr-fr.facebook.com/laberjotine/' target='_blank'>
          <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-[#01647C] ease-in duration-300'>
            <FaFacebookF />
          </div>
        </Link>
      </div>
        <p className='text-sm text-center pb-8'>{new Date().getFullYear()} | © La Berjotine tous droits réservés</p>
    </div>
  )
}

export default Footer
