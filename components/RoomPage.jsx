import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiArrowLeft, FiCheck } from 'react-icons/fi'

const amenities = ['Petit déjeuner inclus', 'Parking gratuit', 'Wifi gratuit']
const notes = [
  'Prix petit déjeuner compris pour 2 personnes maximum',
  "Lit enfant jusqu’à 10 ans dans les chambres Cosy et Art Déco : + 40 €",
  'Petit déjeuner supplémentaire : 7 €',
  'Animaux non acceptés',
  'Établissement non-fumeur',
  'Carte bancaire acceptée',
]

const RoomPage = ({ title, image, price, children, Gallery }) => {
  return (
    <main>
      <section className='relative mt-[76px] h-[62vh] min-h-[480px] overflow-hidden sm:m-5 sm:mt-[96px] sm:rounded-[2rem]'>
        <Image src={image} alt={`Chambre ${title}`} fill className='object-cover' sizes='100vw' priority />
        <div className='absolute inset-0 bg-gradient-to-t from-[#292f2e]/80 via-transparent to-black/10' />
        <div className='site-container absolute inset-x-0 bottom-10 text-white sm:bottom-14'>
          <Link href='/#chambres' className='mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/75 transition hover:text-white'><FiArrowLeft /> Toutes les chambres</Link>
          <h1 className='text-5xl sm:text-7xl'>Chambre <span className='italic text-[#d7eceb]'>{title}</span></h1>
        </div>
      </section>

      <section className='py-20 sm:py-28'>
        <div className='site-container grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-20'>
          <div>
            <p className='eyebrow'>Votre chambre</p>
            <h2 className='section-title'>Une ambiance à part entière.</h2>
            <div className='mt-7 max-w-2xl text-base leading-8 text-[#65716d]'>{children}</div>
            <Link href='/contact' className='button-primary mt-9'>Demander une réservation</Link>
          </div>

          <aside className='soft-card p-7 sm:p-8'>
            <p className='text-xs font-semibold uppercase tracking-[0.2em] text-[#65716d]'>À partir de</p>
            <p className='mt-2 font-display text-5xl text-[#096b79]'>{price} € <span className='font-sans text-sm text-[#65716d]'>/ nuit</span></p>
            <div className='my-6 h-px bg-[#18312f]/10' />
            <ul className='space-y-4'>
              {amenities.map((amenity) => <li key={amenity} className='flex items-center gap-3 text-sm'><span className='grid h-7 w-7 place-items-center rounded-full bg-[#dcebec] text-[#096b79]'><FiCheck /></span>{amenity}</li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section className='bg-white py-12'>
        <div className='site-container'>
          <p className='mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#65716d]'>Informations pratiques</p>
          <div className='grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3'>
            {notes.map((note) => <p key={note} className='flex gap-3 text-sm leading-6 text-[#65716d]'><span className='text-[#096b79]'>—</span>{note}</p>)}
          </div>
        </div>
      </section>

      <Gallery />
    </main>
  )
}

export default RoomPage
