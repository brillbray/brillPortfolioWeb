import React from 'react'
import CV from '../../assets/CV Brillian.png'
import resume from '../../assets/Resume_BrillianBraydent_3D Artist.png'
import PortofolioHL from '../portfolioHL/PortfolioHL'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href={resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Chat Me</a>
    </div>           
  )
}   

export default CTA