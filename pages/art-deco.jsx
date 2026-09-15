import React from 'react'
import artDecoImg from '../public/assets/art-deco.jpg'
import ArtDecoGallery from '@/components/ArtDecoGallery'
import RoomPage from '@/components/RoomPage'

const ArtDeco = () => {
  return (
    <RoomPage title='Art Déco' image={artDecoImg} price='140' Gallery={ArtDecoGallery}>
      <p>Le charme du noir et blanc pour cette chambre de style Art Déco, parfaite pour deux personnes avec son grand lit. Ouverte sur la chambre, la salle de bain à l’agencement original propose une douche et des toilettes séparées.</p>
    </RoomPage>
  )
}

export default ArtDeco
