import React from 'react'
import './portfolioHL.css'

import game1 from '../../assets/GifBrickeyGame.gif'

const game = [
  {
    id:1,
    image: game1 ,
    title: 'Brickey Game',
    github: 'https://github.com/brillbray/GamesPortofolios'
  },
  {
    id:1,
    image: game1 ,
    title: 'Brickey Game',
    github: 'https://github.com/brillbray/GamesPortofolios'
  },
  {
     id:1,
     image: game1 ,
     title: 'Brickey Game',
     github: 'https://github.com/brillbray/GamesPortofolios'
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