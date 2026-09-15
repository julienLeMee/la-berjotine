import React from 'react'
import PhotoGallery from './PhotoGallery'
import image1 from '../public/assets/vintageGallery/vintageGallery-1.jpg'
import image2 from '../public/assets/vintageGallery/vintageGallery-2.jpg'
import image3 from '../public/assets/vintageGallery/vintageGallery-5.jpg'
import image4 from '../public/assets/vintageGallery/vintageGallery-4.jpg'
import image5 from '../public/assets/vintageGallery/vintageGallery-6.jpg'

const VintageGallery = () => <PhotoGallery room='Chambre Vintage' images={[image1, image2, image3, image4, image5]} />

export default VintageGallery
