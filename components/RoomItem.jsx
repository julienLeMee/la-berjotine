import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'

const RoomItem = ({ title, image, href, price, description }) => {
  return (
    <Link href={href} className='group overflow-hidden rounded-[2rem] bg-white shadow-[0_15px_45px_rgba(24,49,47,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_65px_rgba(24,49,47,0.15)]'>
      <div className='relative aspect-[4/5] overflow-hidden'>
        <Image src={image} alt={`Chambre ${title}`} fill className='object-cover transition duration-700 group-hover:scale-105' sizes='(max-width: 768px) 100vw, 33vw' />
        <div className='absolute inset-0 bg-gradient-to-t from-[#292f2e]/80 via-transparent to-transparent' />
        <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
          <div className='mb-3 flex items-end justify-between'>
            <h3 className='text-4xl'>{title}</h3>
            <span className='grid h-11 w-11 place-items-center rounded-full border border-white/35 bg-white/15 backdrop-blur-sm transition group-hover:rotate-45 group-hover:bg-white group-hover:text-[#18312f]'><FiArrowUpRight size={20} /></span>
          </div>
          <p className='text-sm leading-6 text-white/75'>{description}</p>
        </div>
      </div>
      <div className='flex items-center justify-between px-6 py-5'>
        <span className='text-xs font-semibold uppercase tracking-[0.18em] text-[#65716d]'>À partir de</span>
        <span className='font-display text-xl text-[#096b79]'>{price} <span className='font-sans text-xs text-[#65716d]'>/ nuit</span></span>
      </div>
    </Link>
  )
}

export default RoomItem
