import Image from 'next/image'
import React, { useState } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0)

  if (!Array.isArray(slides) || slides.length === 0) return null

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1)
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1)

  return (
    <section id='gallery' className='py-24 sm:py-32'>
      <div className='site-container'>
        <div className='mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end'>
          <div>
            <p className='eyebrow'>L’esprit des lieux</p>
            <h2 className='section-title'>Ici, le temps ralentit.</h2>
          </div>
          <p className='max-w-md text-sm leading-relaxed text-[#65716d] sm:text-right'>
            Une maison ancienne réinventée avec soin, où chaque pièce mêle histoire, couleurs et confort contemporain.
          </p>
        </div>

        <div className='relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#e8dfd2] sm:aspect-[16/8] lg:rounded-[2.5rem]'>
          {slides.map((slide, index) => (
            <div key={slide.image} className={`absolute inset-0 transition-opacity duration-700 ${index === current ? 'opacity-100' : 'pointer-events-none opacity-0'}`} aria-hidden={index !== current}>
              <Image src={slide.image} alt={`La Berjotine — vue ${index + 1}`} fill className='object-cover' sizes='(max-width: 1280px) 100vw, 1280px' priority={index === 0} />
            </div>
          ))}
          <div className='absolute inset-0 bg-gradient-to-t from-[#292f2e]/60 via-transparent to-transparent' />

          <div className='absolute bottom-5 left-5 right-5 flex items-center justify-between sm:bottom-8 sm:left-8 sm:right-8'>
            <div className='flex gap-2' aria-label={`Photo ${current + 1} sur ${slides.length}`}>
              {slides.map((slide, index) => (
                <button key={slide.image} type='button' onClick={() => setCurrent(index)} className={`h-1.5 rounded-full transition-all ${index === current ? 'w-8 bg-white' : 'w-1.5 bg-white/55 hover:bg-white'}`} aria-label={`Afficher la photo ${index + 1}`} />
              ))}
            </div>
            <div className='flex gap-2'>
              <button type='button' onClick={prevSlide} className='grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition hover:bg-white hover:text-[#18312f]' aria-label='Photo précédente'><FiArrowLeft size={20} /></button>
              <button type='button' onClick={nextSlide} className='grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition hover:bg-white hover:text-[#18312f]' aria-label='Photo suivante'><FiArrowRight size={20} /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider
