import React from 'react'
import RoomItem from './RoomItem'
import cosyImg from '../public/assets/cosy.jpg'
import vintageImg from '../public/assets/vintage.jpg'
import artDecoImg from '../public/assets/art-deco.jpg'

const Projects = () => {
  return (
    <div id='chambres' className='w-full p-2 mb-20'>
      <div className='max-w-[80%] mx-auto'>
        <p className='text-xl tracking-widest uppercase text-[#01647C]'>Chambres</p>
        <p className='py-4'>
          A l'étage un salon vous permettra de profiter d'un moment de lecture ou de détente. <br />
          Toutes les chambres possèdent une salle de bain et un wc privatif.
        </p>
        <div className='grid md:grid-cols-3 gap-8'>

          <RoomItem
            title='Cosy'
            backgroundImg={cosyImg}
            tarifs='115 € / nuit'
            projectUrl='/cosy'
          />
          <RoomItem
            title='Art Deco'
            backgroundImg={artDecoImg}
            tarifs='130 € / nuit'
            projectUrl='/art-deco'
          />
          <RoomItem
            title='Vintage'
            backgroundImg={vintageImg}
            tarifs='140 € / nuit'
            projectUrl='/vintage'
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
