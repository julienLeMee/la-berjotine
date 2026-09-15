import React from 'react'
import cosyImg from '../public/assets/cosy.jpg'
import CosyGallery from '../components/CosyGallery'
import RoomPage from '@/components/RoomPage'

const Cosy = () => {
  return (
    <RoomPage title='Cosy' image={cosyImg} price='125' Gallery={CosyGallery}>
      <p>Alliance du taupe et du turquoise pour cette chambre cocooning avec deux lits séparés ou joints. La salle de bain propose une douche et des toilettes dans une ambiance assortie à la chambre.</p>
    </RoomPage>
  )
}

export default Cosy
