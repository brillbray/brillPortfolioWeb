import React from 'react'
import './about.css'
import ME from '../../assets/fotoDepan.png'
import {RiAwardFill} from 'react-icons/ri'
import { MdOutlinePendingActions } from "react-icons/md";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME}/>
          </div>
        </div>   
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <RiAwardFill className='about__icon'/>
            <h5>4 Game Projects</h5>
            <small>Done</small>
          </article>
          {/* <article className="about__card">
            <MdOutlinePendingActions className='about__icon'/> vc
            <h5>1 Game Pending</h5>
            <small>Star Fell</small>
          </article>    */}
        </div>
          {/* <p>Currently, i am still majoring Game Application & Technology as a student at Bina Nusantara University (Binus). 
            In Game / Animation Development, i also have an internship experience for 1 year at Nouverior Animation Studios as 3D Artist. 
            For 3D Development, i mostly use Blender, Autodesk Maya, Adobe Substance 3D Painter. 
            But on the other hand, i also finished some simple game projects as a Game Programmer, 
            the game engine i use is Unreal Engine & Unity. I also can develop a simple website using ReactJS. 
        </p> */}
        <p>
          Hi, my name is Brillian Braydent. Bachelor of Science from Bina Nusantara University (Binus) 
          with 1 year experienced internship as 3D Artist / Technical Artist at Nouverior Animation Studio.
          I use Blender, Autodesk Maya, Zbrush, Adobe Substance 3D Painter, Marmoset Toolbag 5, and Adobe Photoshop for 
          3D production and render showcase. But on the other hand, i also finished some simple game projects by
          using Unity Game Engine as Game Programmer and my solo final thesis game project by using Unreal Engine 5.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    
      </div>
    </div>
    </section>
  )
}

export default About