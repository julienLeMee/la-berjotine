import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowRight, FiMapPin } from 'react-icons/fi'

const Homepage = () => {
  return (
    <section className='relative h-[min(860px,100svh)] min-h-[650px] overflow-hidden bg-[#faf8f4]'>
      <div className='absolute inset-x-3 bottom-3 top-[88px] overflow-hidden rounded-[1.75rem] sm:inset-x-5 sm:bottom-5 sm:top-[96px] lg:inset-x-8 lg:bottom-8 lg:top-[108px]'>
        <Image
          src='/assets/berjotine-homepage-3.jpg'
          alt='Une chambre élégante de La Berjotine à Charolles'
          fill
          className='object-cover object-center'
          sizes='100vw'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-r from-[#292f2e]/85 via-[#292f2e]/35 to-transparent' />
        <div className='absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10' />
      </div>

      <div className='site-container relative z-10 flex h-full items-center pt-[76px]'>
        <div className='max-w-4xl pb-4 text-white'>
          <p className='mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80 sm:text-sm'>
            <FiMapPin aria-hidden='true' /> Charolles · Bourgogne du Sud
          </p>
          <h1 className='text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl'>
            Une maison d’hôtes<br className='hidden sm:block' />
            <span className='italic text-[#d7eceb]'>pleine de caractère.</span>
          </h1>
          <p className='mt-6 max-w-lg text-base leading-7 text-white/80 sm:text-lg'>
            Trois chambres singulières dans une maison du XVIIIe siècle, au cœur de Charolles et de la douceur du Charolais.
          </p>
          <div className='mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center'>
            <Link href='/contact' className='button-primary bg-white text-[#18312f] hover:bg-[#d7eceb]'>Réserver votre séjour</Link>
            <Link href='/#chambres' className='group inline-flex items-center gap-2 text-sm font-semibold text-white'>Voir les chambres <FiArrowRight className='transition-transform group-hover:translate-x-1' /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Homepage
