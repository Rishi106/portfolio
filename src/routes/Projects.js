import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero2Img from '../Components/Hero2Img'
import PricingCard from '../Components/PricingCard'
 import Work from '../Components/Work'

const Projects = () => {
  return (
    <div>
        <Navbar/>
        <Hero2Img heading="PROJECTS" text="Some of my recent work"/>
        <Work/>
        <PricingCard/>
        <Footer/>
    </div>
  )
}

export default Projects