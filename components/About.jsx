import React from 'react'
import Image from 'next/image'
import aboutImg from '../public/assets/ig-img-3.jpg'

const About = () => {
  return (
    <div id='about' className='w-full py-40 flex items-center mb-2 md:mb-10'>
      <div className='max-w-[80%] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#01647C] py-4'>UN COIN DE PARADIS AU COEUR DU CHAROLAIS</p>
          <p className='py-2 pr-10 mb-8 text-gray-600'>
            A deux pas de la place de l'église de Charolles, La Berjotine vous propose 3 chambres aux charmes très différents, dans une maison du 18 ème siècle entièrement renovée. <br />
            Elle allie ancien et modernité avec une décoration toute en nuances de couleurs, qui crée une ambiance pour chaque espace. <br />
          </p>
        </div>
        <div className='max-w-[80%] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 duration-300'>
          <Image src={aboutImg} alt="" />
          {/* <img src='https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80' alt="" /> */}
        </div>
      </div>
    </div>
  )
}

export default About
