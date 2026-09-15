import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { AiFillCar, AiOutlineMail } from 'react-icons/ai'
import { BiTrain } from 'react-icons/bi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { MdOutlineLocalParking, MdPlace } from 'react-icons/md'
import mapImg from '../public/assets/map.png'

const contactLinks = [
  { href: 'tel:0687334027', label: 'Téléphone', value: '06 87 33 40 27', icon: BsFillTelephoneFill },
  { href: 'mailto:laberjotine@gmail.com', label: 'E-mail', value: 'laberjotine@gmail.com', icon: AiOutlineMail },
  { href: 'https://fr-fr.facebook.com/laberjotine/', label: 'Facebook', value: 'La Berjotine', icon: FaFacebookF, external: true },
]

const directions = [
  { title: 'En voiture', text: 'GPS : 46.433333, 4.283333', icon: AiFillCar },
  { title: 'En train', text: 'Gares TGV de Mâcon ou Montchanin, puis 45 minutes en voiture.', icon: BiTrain },
  { title: 'Se garer', text: 'Parkings du tennis et du cinéma à environ 100 mètres de la maison.', icon: MdOutlineLocalParking },
]

const Contact = () => {
  return (
    <main>
      <Head>
        <title>Contact et réservation — La Berjotine</title>
        <meta name='description' content='Contactez La Berjotine, maison d’hôtes à Charolles, pour préparer votre séjour.' />
      </Head>

      <section className='relative mt-[76px] h-[52vh] min-h-[430px] overflow-hidden sm:m-5 sm:mt-[96px] sm:rounded-[2rem]'>
        <Image src='/assets/berjotine-homepage-2.jpg' alt='La Berjotine à Charolles' fill className='object-cover object-center' sizes='100vw' priority />
        <div className='absolute inset-0 bg-[#292f2e]/60' />
        <div className='site-container relative z-10 flex h-full flex-col items-center justify-center text-center text-white'>
          <p className='text-xs font-semibold uppercase tracking-[0.24em] text-white/70'>Préparer votre séjour</p>
          <h1 className='mt-5 text-5xl sm:text-7xl'>Parlons de votre <span className='italic text-[#d7eceb]'>escapade.</span></h1>
          <p className='mt-5 max-w-xl leading-7 text-white/75'>Pour connaître les disponibilités ou poser une question, contactez-nous directement.</p>
        </div>
      </section>

      <section className='py-20 sm:py-28'>
        <div className='site-container'>
          <div className='grid gap-5 md:grid-cols-3'>
            {contactLinks.map(({ href, label, value, icon: Icon, external }) => (
              <a key={label} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className='soft-card group p-7 transition duration-300 hover:-translate-y-1'>
                <span className='grid h-12 w-12 place-items-center rounded-full bg-[#dcebec] text-[#096b79]'><Icon size={20} /></span>
                <p className='mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#65716d]'>{label}</p>
                <p className='mt-2 font-display text-xl transition group-hover:text-[#096b79]'>{value}</p>
              </a>
            ))}
          </div>

          <div className='mt-20 grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20'>
            <div>
              <p className='eyebrow'>Nous trouver</p>
              <h2 className='section-title'>Au cœur de Charolles.</h2>
              <a href='https://www.google.com/maps/place/13+Rue+du+Calvaire+71120+Charolles' target='_blank' rel='noreferrer' className='mt-8 flex items-start gap-4 text-lg leading-8 transition hover:text-[#096b79]'>
                <span className='mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#dcebec] text-[#096b79]'><MdPlace /></span>
                13 rue du Calvaire<br />71120 Charolles
              </a>
              <div className='mt-10 space-y-6'>
                {directions.map(({ title, text, icon: Icon }) => (
                  <div key={title} className='flex gap-4 border-t border-[#18312f]/10 pt-6'>
                    <Icon className='mt-1 shrink-0 text-[#096b79]' size={22} />
                    <div><h3 className='font-sans text-sm font-semibold'>{title}</h3><p className='mt-1 text-sm leading-6 text-[#65716d]'>{text}</p></div>
                  </div>
                ))}
              </div>
            </div>

            <a href='https://www.google.com/maps/place/13+Rue+du+Calvaire+71120+Charolles' target='_blank' rel='noreferrer' className='group relative block aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#e8dfd2] shadow-[0_18px_55px_rgba(24,49,47,0.12)]'>
              <Image src={mapImg} alt="Plan d’accès à La Berjotine" fill className='object-cover transition duration-700 group-hover:scale-105' sizes='(max-width: 1024px) 100vw, 55vw' />
              <span className='absolute bottom-5 left-5 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#096b79] shadow-lg'>Ouvrir dans Google Maps</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
