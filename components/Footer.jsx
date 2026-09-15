import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import logo from '../public/assets/LogoBerjotine.png'

const Footer = () => {
  return (
    <footer className='bg-[#064b56] text-white'>
      <div className='site-container grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr] md:py-20'>
        <div>
          <Image src={logo} alt='La Berjotine' className='h-auto w-32' />
          <p className='mt-6 max-w-sm text-sm leading-7 text-white/60'>Une maison d’hôtes de caractère au cœur de Charolles, en Bourgogne du Sud.</p>
        </div>
        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.2em] text-[#8fc7ca]'>Adresse</p>
          <address className='mt-5 text-sm not-italic leading-7 text-white/70'>13 rue du Calvaire<br />71120 Charolles<br /><a className='transition hover:text-white' href='tel:0687334027'>06 87 33 40 27</a></address>
        </div>
        <div>
          <p className='text-xs font-semibold uppercase tracking-[0.2em] text-[#8fc7ca]'>Suivez-nous</p>
          <div className='mt-5 flex gap-3'>
            <a href='tel:0687334027' className='grid h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:bg-white hover:text-[#18312f]' aria-label='Téléphoner'><BsFillTelephoneFill /></a>
            <a href='mailto:laberjotine@gmail.com' className='grid h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:bg-white hover:text-[#18312f]' aria-label='Envoyer un e-mail'><AiOutlineMail /></a>
            <a href='https://fr-fr.facebook.com/laberjotine/' target='_blank' rel='noreferrer' className='grid h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:bg-white hover:text-[#18312f]' aria-label='Facebook'><FaFacebookF /></a>
          </div>
        </div>
      </div>
      <div className='border-t border-white/10'>
        <div className='site-container flex flex-col gap-3 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between'>
          <p>© {new Date().getFullYear()} La Berjotine. Tous droits réservés.</p>
          <Link href='/politique-de-cookies' className='transition hover:text-white'>Politique de cookies</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
