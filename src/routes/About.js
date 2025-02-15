 import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero2Img from '../Components/Hero2Img'
import AboutContent from '../Components/AboutContent'
 
 const About = () => {
   return (
     <div>
      <Navbar/>
      <Hero2Img heading="ABOUT." text="I'm a Java Full Stack Developer."/>
      <AboutContent/>
      <Footer/>
     </div>
   )
 }
 
 export default About