import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const RoomItem = ({title, backgroundImg, projectUrl, tarifs}) => {
  return (
    <Link href={projectUrl} className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group cursor-pointer overflow-hidden'>
      <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-[#01647C] to-[#04b0db] opacity-0 group-hover:opacity-100 transition-opacity duration-200' />
      <Image className='relative rounded-xl group-hover:opacity-10 h-full object-cover transition-opacity duration-200' src={backgroundImg} width={640} height={360} alt='project' />
      <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] min-w-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{tarifs}</p>
        <p className='text-center py-2 rounded-lg bg-white text-gray-700 text-sm'>Plus d'infos</p>
      </div>
    </Link>
  )
}

export default RoomItem
