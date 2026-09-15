import React from 'react'
import Image from 'next/image'
import { FiCoffee, FiHome, FiMapPin } from 'react-icons/fi'
import aboutImg from '../public/assets/ig-img-3.jpg'

const About = () => {
  return (
    <section id='about' className='bg-white py-24 sm:py-32'>
      <div className='site-container grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24'>
        <div className='relative mx-auto w-full max-w-lg lg:mx-0'>
          <div className='absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-[#096b79]/20 sm:-left-7 sm:-top-7' />
          <div className='relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#e8dfd2]'>
            <Image src={aboutImg} alt="L'enseigne de La Berjotine" fill className='object-cover' sizes='(max-width: 1024px) 90vw, 500px' />
          </div>
        </div>

        <div>
          <p className='eyebrow'>La maison</p>
          <h2 className='section-title max-w-2xl'>Le charme de l’ancien, le confort d’aujourd’hui.</h2>
          <div className='mt-8 space-y-5 text-base leading-8 text-[#65716d]'>
            <p>Cette maison du XVIIIe siècle, entièrement rénovée, abrite trois chambres aux personnalités très différentes. Chacune offre une ambiance unique, dessinée par les couleurs et les objets qui l’habitent.</p>
            <p>À deux pas de la place de l’église de Charolles, La Berjotine est un point de départ idéal pour découvrir les paysages, les saveurs et le patrimoine de la Bourgogne du Sud.</p>
          </div>

          <div className='mt-10 grid gap-4 sm:grid-cols-3'>
            <div className='rounded-2xl bg-[#f7f4ee] p-5'><FiHome className='mb-3 text-[#096b79]' size={22} /><p className='text-sm font-semibold'>3 chambres uniques</p></div>
            <div className='rounded-2xl bg-[#f7f4ee] p-5'><FiCoffee className='mb-3 text-[#096b79]' size={22} /><p className='text-sm font-semibold'>Petit déjeuner inclus</p></div>
            <div className='rounded-2xl bg-[#f7f4ee] p-5'><FiMapPin className='mb-3 text-[#096b79]' size={22} /><p className='text-sm font-semibold'>Au cœur de Charolles</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
