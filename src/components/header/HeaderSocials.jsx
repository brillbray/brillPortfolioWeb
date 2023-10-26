import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GoLogoGithub} from 'react-icons/go'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/brillian-bray-996736265/" target="__blank"><BsLinkedin/></a>
        <a href="https://github.com/brillbray" target="__blank"><GoLogoGithub/></a>
        <a href="https://instagram.com/brillbray" target="__blank"><BsInstagram/></a>
        <a href="https://api.whatsapp.com/send?phone=089678249846" target="__blank"><BsWhatsapp/></a>
    </div>

  )
}

export default HeaderSocials