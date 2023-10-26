import React from 'react'
import './navbar.css'
import {FiHome} from 'react-icons/fi'
import {CiUser} from 'react-icons/ci'
import {SlNotebook} from 'react-icons/sl'
import {RiServiceFill} from 'react-icons/ri'
import {MdContactPage} from 'react-icons/md'
import {useState } from 'react'

const Navbar = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FiHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><CiUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><RiServiceFill/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><SlNotebook/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdContactPage/></a>
    </nav>
  )
 }

export default Navbar