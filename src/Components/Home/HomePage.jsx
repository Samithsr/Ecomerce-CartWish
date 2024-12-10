import React from 'react'

import iphone from '../../assets/iPhone-14-pros.jpg'
import mac from '../../assets/mac.jpg'
import HeroSection from './HeroSection'
import FeaturedProducts from './FeaturedProducts'

const HomePage = () => {
  return (
    <div>
        <HeroSection  title="Buy iPhone 14 Pro"
        subtitle="Experience the power of the latest iPhone 14 with our most pro camera ever." 
        link="/"
        image={iphone} />
        

        <FeaturedProducts />
        {/* { Hero Section } */}

        <HeroSection  title="Build the ultimate setup"
        subtitle="You can add Studio Display and colour-matched  Magic accessories to your bag after configure your Mac mind." 
        link="/"
        image={mac} />
    </div>
  )
}

export default HomePage