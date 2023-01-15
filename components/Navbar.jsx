import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import navLogoImg from './../public/assets/berjotine-logo.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [color, setColor] = useState('transparent')
  const [textColor, setTextColor] = useState('white')

  const handleNav = () => {
    setNav(!nav)
  }

 useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 50) {
        setColor('#ffffff')
        setTextColor('#000000')
      } else {
        setColor('transparent')
        setTextColor('#ffffff')
      }
    }
    window.addEventListener('scroll', changeColor)
  }, [])


  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
      <div className='max-w-[1100px] m-auto flex items-center justify-between p-2 text-white'>
        <Link href='/'>
          <Image src={navLogoImg} width={80} height={50} alt='logo' />
        </Link>
        <ul style={{color: `${textColor}`}} className='hidden sm:flex'>
          <li className='p-4'>
            <Link className='hover:text-gray-300 hover:underline' href='/'>Home</Link>
          </li>
          <li className='p-4'>
            <Link className='hover:text-gray-300 hover:underline' href='/#about'>À propos</Link>
          </li>
          <li className='p-4'>
            <Link className='hover:text-gray-300 hover:underline' href='/#chambres'>Chambres</Link>
          </li>
          <li className='p-4'>
            <Link className='hover:text-gray-300 hover:underline' href='/#tarifs'>Tarifs</Link>
          </li>
          <li className='p-4'>
            <Link className='hover:text-gray-300 hover:underline' href='/contact'>Contact</Link>
          </li>
        </ul>
        <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
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

export default Navbar
