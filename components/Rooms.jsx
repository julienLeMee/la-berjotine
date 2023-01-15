import React from 'react'
import RoomItem from './RoomItem'
import cosyImg from '../public/assets/cosy.jpg'
import vintageImg from '../public/assets/vintage.jpg'
import artDecoImg from '../public/assets/art-deco.jpg'

const Projects = () => {
  return (
    <div id='projects' className='w-full p-2'>
      <div className='max-w-[1100px] mx-auto'>
        <p className='text-xl tracking-widest uppercase text-[#01647C]'>Chambres</p>
        <p className='py-4'>
          A l'étage un salon vous permettra de profiter d'un moment de lecture ou de détente.
          Toutes les chambres possèdent une salle de bain et un wc privatif.
          Un ascenceur est à disposition des clients les moins habiles pour accèder aux chambres.
        </p>
        <div className='grid md:grid-cols-3 gap-8'>

          <RoomItem
            title='Cosy'
            backgroundImg={cosyImg}
            projectUrl='/cosy'
          />
          <RoomItem
            title='Vintage'
            backgroundImg={vintageImg}
            projectUrl='/vintage'
          />
          <RoomItem
            title='Art Deco'
            backgroundImg={artDecoImg}
            projectUrl='/art-deco'
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
