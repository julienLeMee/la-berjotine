import Image from 'next/image'
import React from 'react'
import { RiRadioButtonFill } from 'react-icons/ri'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Link from 'next/link'
import VintageGallery from '../components/VintageGallery'
import vintageImg from '../public/assets/vintage.jpg'

const vintage = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/30 z-10' />
          <Image className='absolute z-1' layout='fill' objectFit='cover' src={vintageImg} alt='cosy' />
      </div>

      <div className='max-w-[80%] mx-auto py-20 grid md:grid-cols-5 gap 8 pt-8'>
        <div className='col-span-4'>
          <p className='uppercase text-xl tracking-widest text-[#01647C] py-10'>La chambre Vintage</p>
          <p className='md:pr-16 mb-8'>
            Découvrez la grande chambre de la maison, aux inspirations résolument années 70, où la douceur du gris se mêle au jaune flamboyant. <br />
            Avec deux lits séparés ou joints, elle propose une salle de bain spacieuse avec baignoire d'angle et wc indépendant.
          </p>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 h-auto'>
          <div className="p-2">
            <p className='text-center font-bold pb-2'>Tarifs</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> 110 € / nuit</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> Petit déjeuner gratuit</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> Parking gratuit</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> Wifi gratuit</p>
            </div>
          </div>
        </div>
        <Link href='/#rooms'>
          <p className='text-center mt-10 w-full py-2 bg-[#01647C] rounded-lg text-white text-lg cursor-pointer hover:scale-105 hover:text-gray-300 hover:underline duration-300'>Retour</p>
        </Link>
      </div>
      <VintageGallery />
    </div>
  )
}

export default vintage
