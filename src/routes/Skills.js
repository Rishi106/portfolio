import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Hero2Img from'../Components/Hero2Img'
 import SkillsData from '../Components/SkillsData'
const Skills = () => {
  return (
    <div>
        <Navbar/>
        <Hero2Img heading="SKILLS." text="My Technical Skills."/>
        <SkillsData/>
        <Footer/>
    </div>
  )
}

export default Skills