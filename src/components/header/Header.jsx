// import React from 'react'
// import './header.css'
// // import '../portfolio/portfolio.css'
// import threeDPortoWeap1_gif from '../..//assets/3D/Props/Barrett_RenderShowcase.gif'
// import CTA from './CTA'
// import HeaderSocials from './HeaderSocials'
// import {FiPhoneCall} from 'react-icons/fi'
// import ME from '../../assets/fotoDepan.png'

// // import PortofolioHL from '../portfolioHL/PortfolioHL' 

// const Header = () => {
//   return (  
//       <div className="container header__container">
         
//         <h5>Hello, I'm</h5>
//         <h1>Brillian Braydent</h1>
//         <h4 className="text-light">1 Year of Experienced as 3D Artist | Game Developer</h4>
      
        
//         <div className="profilePhoto">
//           <img src={ME}/>
//         </div>
//         <CTA/>
//         <HeaderSocials/>
        
//         <img src={threeDPortoWeap1_gif} alt="" />
//         <a href="#3D" className="scroll__down">Scroll Down</a>
        
//         {/* <a href="#3D" className="scroll__downs">3D</a> */}
//         {/* <a href="#gameprojects" className="scroll__down">Scroll Down to Game Project</a> */}

//         <a href="#contact">
//           <div class="chat-me-scroll">
//             <div class="cms-text">
//               <FiPhoneCall></FiPhoneCall>
//               <span>Contact Me</span>
//             </div>
//         </div>
//         </a>
          
//       </div>
//   )
// }

// export default Header
import React from 'react'
import './header.css'
// import '../portfolio/portfolio.css'
import threeDPortoWeap1_gif from '../../assets/3D/Props/Barrett_RenderShowcase.gif'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import {FiPhoneCall} from 'react-icons/fi'
import ME from '../../assets/fotoDepan.png'
import PortfolioGrid from '../portfolioGrid/PortfolioGrid'

const Header = () => {
  return (
    <div className="container header__container">

      {/* LEFT SIDE */}
      <div className="header__left">
        <h5>Hello, I'm</h5>
        <h1>Brillian Braydent</h1>
        <h4 className="text-light">
          1 Year of Experienced as 3D Artist | Game Developer
        </h4>

        <div className="profilePhoto">
          <img src={ME}/>
        </div>

        <CTA />
        <HeaderSocials />
      </div>

      {/* RIGHT SIDE */}
      <div className="header__right">
        <PortfolioGrid />
        <a href="#3D" className="scroll__down">Scroll Down To Details</a>
      </div>

      {/* FLOATING CONTACT */}
      <a href="#contact">
        <div className="chat-me-scroll">
          <div className="cms-text">
            <FiPhoneCall />
            <span>Contact Me</span>
          </div>
        </div>
      </a>

    </div>
  )
}

export default Header