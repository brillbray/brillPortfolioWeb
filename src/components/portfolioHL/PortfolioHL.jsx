import React from 'react'
import './portfolioHL.css'

import game1 from '../../assets/GifBrickeyGame.gif'
import game2 from '../../assets/GifSpaceInvadersGame.gif'
import game3 from '../../assets/starfell.png'
const game = [
  {
    id:1,
    image: game1 ,
    title: 'Brickey Game',
    github: 'https://github.com/brillbray/Brickey-Game'
  },
  {
    id:1,
    image: game2 ,
    title: 'Space Invaders Game',
    github: 'https://github.com/brillbray/SpaceInvadersGame'
  },
  {
     id:1,
     image: game3 ,
     title: 'Star Fell Game (On Going)',
     github: ''
   },
]


const PortofolioHL = () => {
  return (
    <section>

      <h1 id='portoHL-h1'>Game Projects</h1>
      <div className="container portfolioHL__containers">
        {
          game.map(({id, image, title, github}) => {
            return(
              <article className="portfolioHL__item">
              <div className="portfolioHL__item-image">
                <img src={image}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolioHL__item-cta">
                <a href={github} className='btnHL-mid' target="_blank">Visit Github</a>        
              </div>   
              </article>
            )
          })      
        }
      </div>
    </section>
  )
}

export default PortofolioHL