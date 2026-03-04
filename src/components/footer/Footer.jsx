import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>  
      <a href="#" className='footer__logo'>BRILL</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/brillian-bray-996736265/" target="__blank"><BsLinkedin/></a>
        <a href="https://github.com/brillbray" target="__blank"><BsGithub/></a>
        <a href="https://instagram.com/brillbray" target="__blank"><BsInstagram/></a>
        <a href="https://api.whatsapp.com/send?phone=6289678249846" target="__blank"><BsWhatsapp/></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; BRILL PORTFOLIO WEBSITE. 
        </small>

      </div>
    </footer>
    
  )
}

export default Footer