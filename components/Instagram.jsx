import React from 'react'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import IgImg1 from '../public/assets/ig-img-1.jpg'
import IgImg2 from '../public/assets/ig-img-2.jpg'
import IgImg3 from '../public/assets/ig-img-3.jpg'
import IgImg4 from '../public/assets/ig-img-4.jpg'
import IgImg5 from '../public/assets/ig-img-5.jpg'
import IgImg6 from '../public/assets/ig-img-6.jpg'
import InstagramImg from './InstagramImg'

const photos = [IgImg1, IgImg2, IgImg3, IgImg4, IgImg5, IgImg6]

const Instagram = () => {
  return (
    <section className='py-24 sm:py-32'>
      <div className='site-container'>
        <div className='mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end'>
          <div>
            <p className='eyebrow'>Quelques détails</p>
            <h2 className='section-title'>La maison en images.</h2>
          </div>
          <Link href='/contact' className='group flex items-center gap-3 text-sm font-semibold text-[#096b79]'>Organiser mon séjour <FiArrowRight className='transition-transform group-hover:translate-x-1' /></Link>
        </div>
        <div className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6'>
          {photos.map((photo, index) => <InstagramImg key={photo.src} socialImg={photo} index={index} />)}
        </div>

        <div className='mt-20 overflow-hidden rounded-[2rem] bg-[#dcebec] px-6 py-12 text-center sm:px-12 sm:py-16'>
          <p className='eyebrow'>Votre parenthèse à Charolles</p>
          <h2 className='mx-auto mt-4 max-w-2xl text-4xl leading-tight sm:text-5xl'>Envie de poser vos valises à La Berjotine ?</h2>
          <p className='mx-auto mt-5 max-w-xl leading-7 text-[#65716d]'>Contactez-nous directement pour connaître les disponibilités et préparer votre séjour.</p>
          <Link href='/contact' className='button-primary mt-8'>Nous contacter</Link>
        </div>
      </div>
    </section>
  )
}

export default Instagram
