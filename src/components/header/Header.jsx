import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/fotoKarir_edit.png'
import HeaderSocials from './HeaderSocials'
import {FiPhoneCall} from 'react-icons/fi'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Brillian Braydent</h1>
        <h4 className="text-light">Game Programmer | Game Designer</h4>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME}/>
        </div>
        <a href="#about" className="scroll__down">Scroll Down</a>

        <a href="#contact"><div className="chat-me-scroll">Contact Me<FiPhoneCall/></div></a>
      </div>
    </header>
  )
}

export default Header