import React from 'react';
import { AiFillCar } from 'react-icons/ai';
import { MdOutlineLocalParking } from 'react-icons/md';
import { BiTrain } from 'react-icons/bi';
import mapImg from './../public/assets/map.png';
import contactImg from '../public/assets/ig-img-3.jpg'
import Image from 'next/image';

const Contact = () => {
  return (
    <>
      <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]' />
        <div className=' text-white z-[2]'>
          <h1 className='text-5xl'>CONTACT</h1>
        </div>
      </div>
      <div className='w-full h-full py-20 flex items-center'>
        <div className='max-w-[80%] m-auto md:grid grid-cols-3 gap-8'>
          <div className='col-span-2'>
            <p className='uppercase text-xl tracking-widest text-[#01647C] mb-8'>Contact</p>
            <p className='py-3 text-xl'>Adresse : Rue du Calvaire 71120 Charolles</p>
            <p className='py-3 text-xl'>Téléphone : 06 87 33 40 27 / 03 85 24 10 35</p>
            <p className='py-3 text-xl'>Mail : laberjotine@gmail.com</p>
          </div>
          <div className='max-w-[80%] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 duration-300'>
          <Image src={contactImg} alt="" />
          {/* <img src='https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80' alt="" /> */}
        </div>
        </div>
      </div>
      <div className='w-full md:h-screen p-2 flex items-center'>
        <div className='max-w-[80%] m-auto md:grid grid-cols-3 gap-8'>
          <div className='col-span-2'>
            <p className='uppercase text-xl tracking-widest text-[#01647C] mb-8'>Plan d'accès</p>
            <div className="flex items-center py-4">
              <div className='w-10 h-10 mr-10 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-[#5651e5] ease-in duration-300'>
                <AiFillCar />
              </div>
              <p className='py-3 text-xl mb-4'>En voiture : <br /> Coordonnées GPS - Latitude : 46.433333 - Longitude : 4.283333</p>
            </div>
            <div className="flex items-center py-4">
              <div className='w-10 h-10 mr-10  rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-[#5651e5] ease-in duration-300'>
                <BiTrain />
            </div>
              <p className='py-3 text-xl mb-4'>En train : Gare TGV de Mâcon ou Montchanin (45 minutes en voiture)</p>
            </div>
            <div className="flex items-center py-4">
              <div className='w-10 h-10 mr-10  rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-[#5651e5] ease-in duration-300'>
                <MdOutlineLocalParking />
              </div>
              <p className='py-3 text-xl mb-4'>
                Se garer : Deux parkings proches de la maison vous permettront de vous garer : parking du tennis ou du cinéma situé à 100 mètres de la maison. <br />
                Possibilité de se stationner temporairement devant la maison pour décharger les bagages.
              </p>
            </div>
          </div>
        </div>
      </div>
          <div className='max-w-[80%] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 duration-300 mb-20'>
            <Image src={mapImg} alt="" />
            {/* <img src='https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80' alt="" /> */}
          </div>
    </>
  );
}

export default Contact;
