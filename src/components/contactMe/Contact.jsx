import React, {useRef} from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import LineQR from '../../assets/lineQRcode.png'
import {HiChatAlt2} from 'react-icons/hi'
import {IoLogoWhatsapp} from 'react-icons/io'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {  
    e.preventDefault();

    emailjs.sendForm('service_as0zed2', 'template_i8awil9', form.current, 'MSXzhQVtnxLpM_YNL')
    e.target.reset()
  };
  
  return (
    <section id='contact'>
      <h5>Hit Me Up</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>brillbrizz128@gmail.com</h5>
            <a href="mailto:brillbrizz128@gmail.com" target="_blank">Send An Email</a>
          </article>
          <article className="contact__option">
            <HiChatAlt2 className='contact__option-icon'/>
            <h4>Line ID</h4>
            <h5>bray888</h5>
            <img src={LineQR} className="lineQR"/>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone=089678249846" target="_blank">Send A Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required autoComplete='off'/>
          <input type="email" name='email' placeholder='Email' required autoComplete='off'/>
          <textarea name="message" rows="25" placeholder='Message' required autoComplete='off'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact