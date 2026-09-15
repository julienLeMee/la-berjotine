import React from 'react'
import PhotoGallery from './PhotoGallery'
import image1 from '../public/assets/artDecoGallery/artDecoGallery-1.jpg'
import image2 from '../public/assets/artDecoGallery/artDecoGallery-2.jpg'
import image3 from '../public/assets/artDecoGallery/artDecoGallery-3.jpg'
import image4 from '../public/assets/artDecoGallery/artDecoGallery-6.jpg'
import image5 from '../public/assets/artDecoGallery/artDecoGallery-4.jpg'

const ArtDecoGallery = () => <PhotoGallery room='Chambre Art Déco' images={[image1, image2, image3, image4, image5]} />

export default ArtDecoGallery
