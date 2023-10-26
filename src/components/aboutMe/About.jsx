import React from 'react'
import './about.css'
import ME from '../../assets/profilAnime.png'
import {RiAwardFill} from 'react-icons/ri'
import {FaUserFriends} from 'react-icons/fa'
import {GoBook} from 'react-icons/go'

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
            <h5>Experience</h5>
            <small>0 Years Experience</small>
          </article>

          <article className="about__card">
            <FaUserFriends className='about__icon'/>
            <h5>Clients</h5>
            <small>0 Worldwide</small>
          </article>

          <article className="about__card">
            <GoBook className='about__icon'/>
            <h5>Projects</h5>
            <small>2 Projects Completed</small>
          </article>
        </div>

        <p>Hello, my name is Brillian Braydent, 
          people usually call me Brill. At the moment, 
          i'm studying at Bina Nusantara University (B25)
          majoring in Game Application & Technology.
          <br />
          I like to do coding, especially in game development as a game programmer or game artist, i also
          like to learn other programming languanges, such as framework, etc.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

    
      </div>
    </div>
    </section>
  )
}

export default About