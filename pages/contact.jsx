import React from 'react';
import { AiFillCar } from 'react-icons/ai';
import { MdOutlineLocalParking } from 'react-icons/md';
import { BiTrain } from 'react-icons/bi';
import mapImg from './../public/assets/map.png';
import contactImg from '../public/assets/ig-img-3.jpg'
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdPlace } from 'react-icons/md'

const Contact = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]' />
        <div className=' text-white z-[2]'>
          <h1 className='text-5xl'>CONTACT</h1>
        </div>
        <div className='flex items-center justify-center my-4 w-full sm:w-[80%] z-10'>
                <Link className='p-4' href="tel:0687324027" target='_blank'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 bg-white/70 text-[#01647C] ease-in duration-300'>
                    <BsFillTelephoneFill />
                  </div>
                </Link>
                <Link className='p-4' href='mailto:laberjotine@gmail.com' target='_blank'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 bg-white/70 text-[#01647C] ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link className='p-4' href='https://fr-fr.facebook.com/laberjotine/' target='_blank'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 bg-white/70 text-[#01647C] ease-in duration-300'>
                    <FaFacebookF />
                  </div>
                </Link>
              </div>
      </div>
      <div className='w-full h-full py-20 flex items-center'>
        <div className='max-w-[80%] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
            <p className='uppercase text-xl tracking-widest text-[#01647C] mb-8'>Contact</p>
            <div className="flex items-center py-4">
              <div className='w-10 h-10 mr-10 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-[#01647C] ease-in duration-300'>
                <MdPlace />
              </div>
              <p className='py-3 text-xl mb-4'>
                Adresse : <br />
                <a className='text-[#01647C]' href="https://www.google.com/maps/place/13+Rue+du+Calvaire+71120+Charolles">13 Rue du Calvaire <br /> 71120 Charolles</a>
              </p>
            </div>
            <div className="flex items-center py-4">
              <div className='w-10 h-10 mr-10  rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-[#01647C] ease-in duration-300'>
                <BsFillTelephoneFill />
              </div>
              <p className='py-3 text-xl mb-4'>
                Téléphone : <br />
                <a className='text-[#01647C]' href="tel:0687324027" onClick={(event) => event.preventDefault()} >06.87.33.40.27</a> <br />
                <a className='text-[#01647C]' href="tel:0385241035" onClick={(event) => event.preventDefault()} >03.85.24.10.35</a>
              </p>
            </div>
            <div className="flex items-center py-4">
              <div className='w-10 h-10 mr-10  rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-[#01647C] ease-in duration-300'>
                <AiOutlineMail />
              </div>
              <p className='py-3 text-xl mb-4'>Mail : <br />
                <a className='text-[#01647C]' href="mailto:laberjotine@gmail.com">laberjotine@gmail.com</a> <br />
              </p>
            </div>
          </div>
          <div className='max-w-[80%] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 duration-300'>
            <Image src={contactImg} alt="" />
          </div>
        </div>
      </div>
      <div className='w-full md:h-screen p-2 flex items-center'>
        <div className='max-w-[80%] m-auto md:grid grid-cols-3 gap-8'>
          <div className='col-span-2'>
            <p className='uppercase text-xl tracking-widest text-[#01647C] mb-8'>Plan d'accès</p>
            <div className="flex items-center py-4">
              <div className='w-10 h-10 mr-10 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-[#01647C] ease-in duration-300'>
                <AiFillCar />
              </div>
              <p className='py-3 text-xl mb-4'>En voiture : <br /> Coordonnées GPS - Latitude : 46.433333 - Longitude : 4.283333</p>
            </div>
            <div className="flex items-center py-4">
              <div className='w-10 h-10 mr-10  rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-[#01647C] ease-in duration-300'>
                <BiTrain />
              </div>
              <p className='py-3 text-xl mb-4'>En train : Gare TGV de Mâcon ou Montchanin (45 minutes en voiture)</p>
            </div>
            <div className="flex items-center py-4">
              <div className='w-10 h-10 mr-10  rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-[#01647C] ease-in duration-300'>
                <MdOutlineLocalParking />
              </div>
              <p className='py-3 text-xl mb-4'>
                Se garer : Deux parkings proches de la maison vous permettront de vous garer : parking du tennis ou du cinéma situé à 100 mètres de la maison. <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-[80%] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 duration-300 mb-20'>
        <Image src={mapImg} alt="" />
      </div>
    </>
  );
}

export default Contact;
