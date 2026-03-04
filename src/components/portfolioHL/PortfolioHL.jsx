import React from 'react'
import './portfolioHL.css'
import { FaRegCircleDot } from 'react-icons/fa6'

import game1 from '../../assets/GIFTEST.gif'   
import game2 from '../../assets/GifSpaceInvadersGame.gif'
import game3 from '../../assets/starfell.png'

const game = [
  {
    id:1,
    image: game1 ,
    title: 'Brickey Game',
    github: 'https://github.com/brillbray/Brickey-Game',
    coreLoop: "Coreloop and contribution:",
    coreDetails: "Hit 5 Points to Enemy Goal ",
    contribution: "Create animation for text and bouncing ball above text",
    contribution2: "Program for bounce the ball, etc",
  },
  {
    id:2,
    image: game2 ,
    title: 'Space Invaders Game',
    github: 'https://github.com/brillbray/SpaceInvadersGame',
    coreLoop: "Coreloop:",
    coreDetails: "Shoot the invaders",
    coreDetails2: "Don't die a round for higher score",
    coreDetails3: "User timing needed"
  },
  {
    id:3,
    image: game3 ,
    title: 'Star Fell Games (On Going)',
    github: '',
    coreLoop: "Contribution (Programming):",
    coreDetails: "Game Mechanic Programming by me (On Progress)",
    coreDetails2: "VN Dialogue System by me",
    coreDetails3: "Turn Based System of fighting scene by me"
  },
]


const PortofolioHL = () => {
  return (
    <section id='portHL-Section'>

      <h1 id='portoHL-h1'>Game Projects</h1>
      <div className="container portfolioHL__container">
        {
         game.map(({id, image, title, github, coreLoop, coreDetails, coreDetails2, coreDetails3, contribution, contribution2}) => {
           return(
              <article className="portfolioHL__item">
              <div className="portfolioHL__item-image">
                <img src={image}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn btn-primary btn-mid' target="_blank">Github</a>
                </div>   
                <p>{coreLoop}</p>                 
         
                <p className='portfolioHL__details-icon'><FaRegCircleDot style={{
                  position: 'relative',
                  left: '0',
                  marginRight: '10px',
               }} />{coreDetails}
               </p>
                <p className='portfolioHL__details-icon'><FaRegCircleDot style={{
                  position: 'relative',
                  left: '0',
                  marginRight: '10px',
               }} />{contribution}{coreDetails2}
               </p>
               <p className='portfolioHL__details-icon'><FaRegCircleDot style={{
                  position: 'relative',
                  left: '0',
                  marginRight: '10px',
               }} />{contribution2}{coreDetails3}
               </p>
          
              </article>
            )
          })      
        }
      </div>
    </section>
  )
}

export default PortofolioHL