import React from 'react'
import VintageGallery from '@/components/vintageGallery'
import vintageImg from '../public/assets/vintage.jpg'
import RoomPage from '@/components/RoomPage'

const Vintage = () => {
  return (
    <RoomPage title='Vintage' image={vintageImg} price='150' Gallery={VintageGallery}>
      <p>Découvrez la grande chambre de la maison, aux inspirations résolument années 70, où la douceur du gris se mêle au jaune flamboyant. Avec deux lits séparés ou joints, elle propose une salle de bain spacieuse avec baignoire d’angle et toilettes indépendantes.</p>
    </RoomPage>
  )
}

export default Vintage
