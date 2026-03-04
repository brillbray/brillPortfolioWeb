import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { FaArtstation } from "react-icons/fa";
import { SiSketchfab } from "react-icons/si";


const HeaderSocials = () => {
  return (
    
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/brillian-braydent/" target="__blank"><BsLinkedin/></a>
        <a href="https://github.com/brillbray" target="__blank"><BsGithub/></a>
        <a href="https://instagram.com/brillbray" target="__blank"><BsInstagram/></a>
        {/* <a href="https://api.whatsapp.com/send?phone=6289678249846" target="__blank"><BsWhatsapp/></a> */}
        <a href="https://www.artstation.com/brillbray" target="__blank"><FaArtstation/></a>
        <a href="https://sketchfab.com/brillbrizz128" target="__blank"><SiSketchfab/></a>
    </div>
    

  )
}

export default HeaderSocials