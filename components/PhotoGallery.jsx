import Image from 'next/image'
import React from 'react'

const PhotoGallery = ({ images, room }) => {
  return (
    <section className='py-24 sm:py-32'>
      <div className='site-container'>
        <div className='mb-10'>
          <p className='eyebrow'>En images</p>
          <h2 className='section-title'>Visitez la chambre.</h2>
        </div>
        <div className='grid auto-rows-[190px] grid-cols-2 gap-3 sm:auto-rows-[240px] lg:grid-cols-4'>
          {images.map((image, index) => (
            <div key={image.src} className={`relative overflow-hidden rounded-2xl bg-[#e8dfd2] ${index === 0 ? 'col-span-2 row-span-2' : ''}`}>
              <Image src={image} alt={`${room} — photo ${index + 1}`} fill className='object-cover transition duration-700 hover:scale-105' sizes={index === 0 ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 1024px) 50vw, 25vw'} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PhotoGallery
