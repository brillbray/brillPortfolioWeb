import React from 'react'
import './about.css'
import ME from '../../assets/pp_karir_new.png'
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
            <h5>2 Game Projects</h5>
            <small>Done</small>
          </article>
          <article className="about__card">
            <FaUserFriends className='about__icon'/>
            <h5>1 Game Pending</h5>
            <small>Star Fell</small>
          </article>   
        </div>
          <p>My name is Brillian Braydent, usually called Brill. Currently, i am majoring in Game Application & Technology as a student at Bina Nusantara University.
            I like to do some simple game project, because i interested as a game progammer, but sometimes i also like to do some art or design a game with my own imagination
            of gameplay. Beside that, i also do some web project in my free time, like HTML, CSS, JS, included ReactJS from JS library.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    
      </div>
    </div>
    </section>
  )
}

export default About