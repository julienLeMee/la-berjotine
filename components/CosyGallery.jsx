import React from 'react'
import PhotoGallery from './PhotoGallery'
import image1 from '../public/assets/cosyGallery/cosyGallery-1.jpg'
import image2 from '../public/assets/cosyGallery/cosyGallery-3.jpg'
import image3 from '../public/assets/cosyGallery/cosyGallery-6.jpg'
import image4 from '../public/assets/cosyGallery/cosyGallery-2.jpg'
import image5 from '../public/assets/cosyGallery/cosyGallery-4.jpg'

const CosyGallery = () => <PhotoGallery room='Chambre Cosy' images={[image1, image2, image3, image4, image5]} />

export default CosyGallery
