import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'
import navLogoImg from './../public/assets/berjotine-logo.png'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Navbar() {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [navBg, setNavBg] = useState('#ecf0f3')
  const [linkColor, setLinkColor] = useState('#1f2937')
  const router = useRouter()

  useEffect(() => {
    if (
      router.asPath === '/portfolio' ||
      router.asPath === '/meetball' ||
      router.asPath === '/haunted-house' ||
      router.asPath === '/star-wars' ||
      router.asPath === '/la-ferme-de-novelle' ||
      router.asPath === '/watchlist'
    ) {
      setNavBg('transparent')
      setLinkColor('#ecf0f3')
    } else {
      setNavBg('#ecf0f3')
      setLinkColor('#1f2937')
    }
  }, [router]) // on surveille la route

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 50) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  }, [])

  return (
    <div style={{backgroundColor: `${navBg}`}} className={ shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100]'}>
      <div className='flex justify-between items-center mx-auto w-[80%] h-full p-2 2xl:px16'>
        <Link href='/'>
          <Image src={navLogoImg} width={80} height={60} alt='logo' />
        </Link>
        <div>
          <ul style={{color: `${linkColor}`}} className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:text-[#01647C]'>Home</li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase hover:text-[#01647C]'>À propos</li>
            </Link>
            <Link href='/#tarifs'>
              <li className='ml-10 text-sm uppercase hover:text-[#01647C]'>Tarifs</li>
            </Link>
            <Link href='/#chambres'>
              <li className='ml-10 text-sm uppercase hover:text-[#01647C]'>Chambres</li>
            </Link>
            <Link href='/contact'>
              <li className='ml-10 text-sm uppercase hover:text-[#01647C]'>Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={ nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}> {/* Mobile Menu, 70% opacity */}
        <div className={ nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45$] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>

          <div>
            <div className='flex items-center justify-between mx-auto w-full'>
              <Link href='/'>
                <Image src={navLogoImg} width={87} height={35} alt='logo' />
              </Link>
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose size={25} />
              </div>
            </div>

          </div>

          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>À propos</li>
              </Link>
              <Link href='/#tarifs'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Tarifs</li>
              </Link>
              <Link href='/#chambres'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>Chambres</li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 pb-20 text-sm'>Contact</li>
              </Link>
            </ul>
            <div className='pt-30'>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <Link href='https://www.linkedin.com/in/julien-le-mee/' target='_blank'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-[#01647C] ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link href='https://github.com/julienLeMee' target='_blank'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-[#01647C] ease-in duration-300'>
                    <FaGithub />
                  </div>
                </Link>
                <Link href='mailto:julemee@gmail.com' target='_blank'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-[#01647C] ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='https://twitter.com/majin__bun' target='_blank'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-[#01647C] ease-in duration-300'>
                    <FaTwitter />
                  </div>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
