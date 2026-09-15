import Image from 'next/image'
import React from 'react'

const InstagramImg = ({ socialImg, index }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[#e8dfd2] ${index % 2 ? 'translate-y-4' : ''}`}>
      <div className='relative aspect-square'>
        <Image src={socialImg} alt={`Un détail de La Berjotine ${index + 1}`} fill className='object-cover transition duration-700 hover:scale-105' sizes='(max-width: 768px) 50vw, 17vw' />
      </div>
    </div>
  )
}

export default InstagramImg
