import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { ReviewsData } from './ReviewsData'

const Reviews = () => {
  return (
    <section className='bg-[#292f2e] py-24 text-white sm:py-32'>
      <div className='site-container'>
        <div className='mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end'>
          <div>
            <p className='eyebrow text-[#8fc7ca]'>Ils sont venus</p>
            <h2 className='mt-4 max-w-2xl text-4xl leading-tight sm:text-5xl'>Des séjours qui laissent<br />de beaux souvenirs.</h2>
          </div>
          <a href='https://www.booking.com/reviews/fr/hotel/la-berjotine.fr.html' target='_blank' rel='noreferrer' className='group flex w-full items-center rounded-[1.25rem] bg-[#faf8f4] px-3.5 py-3 text-[#18312f] shadow-[0_16px_45px_rgba(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_20px_55px_rgba(0,0,0,0.2)] sm:px-4 lg:w-[calc((100%-2.5rem)/3)]'>
            <span className='grid h-12 w-12 shrink-0 place-items-center rounded-[0.55rem] rounded-bl-none bg-[#003b95] text-lg font-bold text-white shadow-sm'>9,2</span>
            <span className='mx-3.5 h-10 w-px bg-[#18312f]/10 sm:mx-4' />
            <span>
              <strong className='block font-display text-lg font-normal'>Fabuleux</strong>
              <span className='mt-1 block text-[11px] font-semibold uppercase tracking-[0.16em] text-[#65716d]'>9,2 sur 10 · Booking.com</span>
            </span>
            <span className='ml-auto hidden h-8 w-8 shrink-0 place-items-center rounded-full border border-[#18312f]/10 text-[#096b79] transition group-hover:rotate-45 group-hover:bg-[#096b79] group-hover:text-white sm:grid'><FiArrowUpRight size={14} /></span>
          </a>
        </div>

        <div className='grid gap-5 lg:grid-cols-3'>
          {ReviewsData.map((review) => (
            <article key={review.id} className='flex min-h-[310px] flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm sm:p-8'>
              <div className='flex items-center justify-between'>
                <span className='font-display text-3xl text-[#8fc7ca]'>{review.note}<small className='font-sans text-xs text-white/45'>/{review.scale || 10}</small></span>
                <span className='text-xs uppercase tracking-[0.16em] text-white/45'>{review.date}</span>
              </div>
              <h3 className='mt-7 text-2xl'>{review.title}</h3>
              <blockquote className='mt-4 flex-1 text-sm leading-7 text-white/70'>{review.comment.replaceAll("''", '').trim()}</blockquote>
              <div className='mt-6 flex items-center justify-between gap-4'>
                <p className='text-sm font-semibold'>— {review.name}</p>
                <a href={review.sourceUrl} target='_blank' rel='noreferrer' className='text-xs text-white/45 underline underline-offset-4 transition hover:text-white'>Avis {review.source}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
