import Image from 'next/image'
import React from 'react'
import cosyImg from '../public/assets/cosy.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Link from 'next/link'
import CosyGallery from '../components/CosyGallery'

const Cosy = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[70vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[70vh] z-10' />
          <Image
            src={cosyImg}
            className='absolute h-full z-1'
            alt='cosy'
            style={{objectFit: 'cover'}}
            width='1920'
            height='1080'
            priority
          />
      </div>

      <div className='max-w-[80%] mx-auto py-20 grid md:grid-cols-5 gap 8 pt-8'>
        <div className='col-span-4'>
          <p className='uppercase text-xl tracking-widest text-[#01647C] py-10'>La chambre Cosy</p>
          <p className='md:pr-16 mb-8'>
            Alliance du taupe et du turquoise pour cette chambre cocooning avec deux lits séparés ou joints. <br />
            La salle de bain propose une douche et un wc dans une ambiance aux couleurs de la chambre.
          </p>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 h-auto'>
          <div className="p-2">
            <p className='text-center font-bold pb-2'>Tarifs</p>
            <div className='grid grid-cols-2 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> 105 € / nuit</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> Petit déjeuner inclus</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> Parking gratuit</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='mr-2'/> Wifi gratuit</p>
            </div>
          </div>
        </div>
        <Link href='/#rooms'>
          <p className='text-center mt-10 w-24 py-2 bg-[#01647C] rounded-lg text-white text-lg cursor-pointer hover:scale-105 hover:text-gray-300 hover:underline duration-300'>Retour</p>
        </Link>
      </div>
      <div className='max-w-[80%] mx-auto'>
        <p className='text-xs pr-10 italic text-gray-600'>
          * Prix petit déjeuner compris pour 2 personnes maxi
        </p>
        <p className='text-xs pr-10 italic text-gray-600'>
          * Possibilité d'ajouter un lit pour enfant jusqu 'à 10 ans uniquement pour les chambres 1 et 2 (+ 40 €  par lit)
        </p>
        <p className='text-xs pr-10 italic text-gray-600'>
          * Petit déjeuner supplémentaire 7€
        </p>
        <p className='text-xs pr-10 italic text-gray-600'>
          * Animaux non acceptés
        </p>
        <p className='text-xs pr-10 italic text-gray-600'>
          * Etablissement non fumeur
        </p>
        <p className='text-xs pr-10 italic text-gray-600'>
          * CB acceptée
        </p>
      </div>
      <CosyGallery />
    </div>
  )
}

export default Cosy
