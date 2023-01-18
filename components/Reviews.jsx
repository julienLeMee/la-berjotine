import React from 'react'
import { ReviewsData } from './ReviewsData'

const Reviews = () => {
  return (
    <div className='max-w-[80%] mx-auto py-24'>
        <p className='text-xl font-bold text-center py-4'>L'établissement La Berjotine - Maison d'hôtes accueille des clients Booking.com depuis le 5 août 2015.</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 mr-2'>
        {ReviewsData.map((review) => (
            <div key={review.id} className='w-full rounded-lg shadow-lg shadow-gray-400 p-3 m-2'>
              <div className="flex items-center justify-between p-4">
                <h1 className='w-12 text-center rounded-lg text-white shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 bg-[#01647C] ease-in duration-300'>{review.note}</h1>
                <div className="flex flex-col">
                  <h2 className='text-bold text-lg'>{review.name}</h2>
                  <p className='text-xs text-gray-500'>{review.date}</p>
                </div>
              </div>
              <h3 className='p-4 text-bold text-xl'>{review.title}</h3>
              <p className='p-4 text-sm'>{review.comment}</p>
            </div>
        ))}
      </div>
    </div>
    // <div className='max-w-[80%] mx-auto py-24'>
    //   <p className='text-xl font-bold'>L'établissement La Berjotine - Maison d'hôtes accueille des clients Booking.com depuis le 5 août 2015.</p>
    //   <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4 w-full'>
    //   {ReviewsData.map((review) => (
    //     <div key={review.id} className='shadow-lg shadow-gray-400 p-3 m-2 w-[250px]'>
    //       <div className="flex items-center justify-between p-2">
    //         <h1 className='w-12 text-center rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:text-[#01647C] ease-in duration-300'>{review.note}</h1>
    //         <h2 className='text-bold text-lg'>{review.name}</h2>
    //       </div>
    //       <h3>{review.title}</h3>
    //       <p>{review.comment}</p>
    //       <p>{review.date}</p>
    //     </div>
    //   ))}
    //     </div>
    // </div>
  )
}

export default Reviews
