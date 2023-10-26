import React from 'react'
import './footer.css'
import {RxInstagramLogo} from 'react-icons/rx'
import {FaTwitter} from 'react-icons/fa'
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

        <a href="https://instagram.com/brillbray"><RxInstagramLogo/></a>
        <a href="https://twitter.com"><FaTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; BRILL PORTFOLIO WEBSITE. All rights reserved.
        </small>

      </div>
    </footer>
    
  )
}

export default Footer