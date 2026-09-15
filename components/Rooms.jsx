import React from 'react'
import RoomItem from './RoomItem'
import cosyImg from '../public/assets/cosy.jpg'
import vintageImg from '../public/assets/vintage.jpg'
import artDecoImg from '../public/assets/art-deco.jpg'

const rooms = [
  { title: 'Cosy', image: cosyImg, price: '125 €', href: '/cosy', description: 'Une atmosphère douce et enveloppante, aux nuances taupe et turquoise.' },
  { title: 'Art Déco', image: artDecoImg, price: '140 €', href: '/art-deco', description: 'Le chic graphique du noir et blanc dans une chambre pleine de caractère.' },
  { title: 'Vintage', image: vintageImg, price: '150 €', href: '/vintage', description: 'Une chambre généreuse inspirée des années 70, lumineuse et joyeuse.' },
]

const Rooms = () => {
  return (
    <section id='chambres' className='py-24 sm:py-32'>
      <div className='site-container'>
        <div className='mb-12 max-w-2xl'>
          <p className='eyebrow'>Dormir à La Berjotine</p>
          <h2 className='section-title'>Trois chambres,<br />trois histoires.</h2>
          <p className='mt-6 leading-7 text-[#65716d]'>Toutes nos chambres disposent d’une salle de bain et de toilettes privatives. À l’étage, un salon vous accueille pour lire ou simplement prendre le temps.</p>
        </div>
        <div className='grid gap-6 md:grid-cols-3'>
          {rooms.map((room) => <RoomItem key={room.title} {...room} />)}
        </div>
      </div>
    </section>
  )
}

export default Rooms
