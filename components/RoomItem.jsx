import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const RoomItem = ({title, backgroundImg, projectUrl, skills}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#01647C] to-[#04b0db]'>
      <Image className='rounded-xl group-hover:opacity-10 h-full object-cover' src={backgroundImg} width={640} height={360} alt='project' />
      <div className='hidden min-w-[80px] group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{skills}</p>
        <Link href={projectUrl}>
          <p className='text-center py-2 rounded-lg bg-white text-gray-700 text-sm cursor-pointer hover:scale-105 hover:text-[#01647C] duration-300'>More info</p>
        </Link>
      </div>
    </div>
  )
}

export default RoomItem
