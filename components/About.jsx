import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full py-40 flex items-center mb-2 md:mb-10'>
      <div className='max-w-[1100px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#01647C]'>À propos</p>
          <h2 className='py-4'>UN COIN DE PARADIS AU COEUR DU CHAROLAIS</h2>
          <p className='py-2 text-gray-600'>A deux pas du centre ville de Charolles</p>
          <p className='py-2 text-gray-600'>
            La Berjotine vous propose 3 chambres aux charmes très différents, au coeur d'une maison du 18 ème siècle. <br />
            Entièrement renovée, elle allie ancien et modernité. Une décoration toute en nuances de couleurs, qui crée une ambiance pour chaque espace. Bientôt un jardin et sa terrasse couverte agrémenteront l'espace extérieur.</p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 duration-300'>
          <img src='https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80' alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
