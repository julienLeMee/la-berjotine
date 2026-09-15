import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { useRouter } from 'next/router'
import navLogoImg from '../public/assets/LogoBerjotine2.png'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/#about', label: 'La maison' },
  { href: '/#chambres', label: 'Chambres' },
  { href: '/contact', label: 'Contact' },
]

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = nav ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [nav])

  const isActive = (href) => href === '/contact' && router.pathname === '/contact'

  return (
    <header className={`fixed inset-x-0 top-0 z-[100] border-b bg-[#faf8f4] transition-all duration-300 ${scrolled ? 'border-[#18312f]/10 shadow-[0_8px_30px_rgba(24,49,47,0.08)]' : 'border-[#18312f]/5'}`}>
      <nav className='site-container flex h-[76px] items-center justify-between' aria-label='Navigation principale'>
        <Link href='/' className='relative z-10 w-[70px]' aria-label='La Berjotine — accueil'>
          <Image src={navLogoImg} alt='La Berjotine' className='h-auto w-full' priority />
        </Link>

        <div className='hidden items-center gap-1 md:flex'>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-[#096b79] ${isActive(link.href) ? 'text-[#096b79]' : 'text-[#18312f]'}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href='/contact' className='button-primary ml-3 px-5 py-2.5'>
            Réserver
          </Link>
        </div>

        <button
          type='button'
          onClick={() => setNav(true)}
          className='grid h-11 w-11 place-items-center rounded-full border border-[#18312f]/15 bg-white text-[#18312f] md:hidden'
          aria-label='Ouvrir le menu'
          aria-expanded={nav}
        >
          <AiOutlineMenu size={22} />
        </button>
      </nav>

      <div className={`fixed inset-0 z-[110] bg-[#292f2e]/45 backdrop-blur-sm transition-opacity duration-300 md:hidden ${nav ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`} onClick={() => setNav(false)}>
        <div
          className={`ml-auto flex h-full w-[86%] max-w-sm flex-col bg-[#f7f4ee] p-7 shadow-2xl transition-transform duration-300 ${nav ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className='flex items-center justify-between'>
            <Image src={navLogoImg} alt='La Berjotine' className='h-auto w-[72px]' />
            <button type='button' onClick={() => setNav(false)} className='grid h-11 w-11 place-items-center rounded-full border border-[#18312f]/15 bg-white' aria-label='Fermer le menu'>
              <AiOutlineClose size={21} />
            </button>
          </div>

          <div className='mt-12 flex flex-col'>
            {links.map((link, index) => (
              <Link key={link.href} href={link.href} onClick={() => setNav(false)} className='border-b border-[#18312f]/10 py-4 font-display text-3xl text-[#18312f]'>
                <span className='mr-3 font-sans text-xs text-[#096b79]'>0{index + 1}</span>{link.label}
              </Link>
            ))}
          </div>

          <Link href='/contact' onClick={() => setNav(false)} className='button-primary mt-8 w-full'>Demander une réservation</Link>

          <div className='mt-auto'>
            <p className='mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#65716d]'>Nous joindre</p>
            <div className='flex gap-3'>
              <a href='tel:0687334027' className='grid h-11 w-11 place-items-center rounded-full bg-white text-[#096b79]' aria-label='Téléphoner'><BsFillTelephoneFill /></a>
              <a href='mailto:laberjotine@gmail.com' className='grid h-11 w-11 place-items-center rounded-full bg-white text-[#096b79]' aria-label='Envoyer un e-mail'><AiOutlineMail /></a>
              <a href='https://fr-fr.facebook.com/laberjotine/' target='_blank' rel='noreferrer' className='grid h-11 w-11 place-items-center rounded-full bg-white text-[#096b79]' aria-label='Facebook'><FaFacebookF /></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
