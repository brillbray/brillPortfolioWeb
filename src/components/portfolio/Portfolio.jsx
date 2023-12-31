import React from 'react'
import './portfolio.css'
import draw1 from '../../assets/Dragon2D.png'
import draw2 from '../../assets/Fruit2D.png'
// import 2dDraw3 from '../../assets/2dDraw3.png'
// import draw4 from '../../assets/portfolio2.png'
// import draw5 from '../../assets/portfolio2.png'

import webPorto1 from '../../assets/porto1.png'
import webPorto2 from '../../assets/porto2.png'

import game1 from '../../assets/GifBrickeyGame.gif'
import game2 from '../../assets/GifSpaceInvadersGame.gif'
import game3 from '../../assets/starfell.png'
import threeDPorto1 from '../../assets/Sword - 3D.jpg'
const game = [
  {
    id:1,
    image: game1 ,
    title: 'Brickey Game',
    github: 'https://github.com/brillbray/Brickey-Game'
  },
  {
    id:2,
    image: game2 ,
    title: 'Space Invaders Game',
    github: 'https://github.com/brillbray/SpaceInvadersGame'
  },
  {
    id:3,
    image: game3 ,
    title: 'Star Fell Games (On Going)',
    github: ''
  },
  // {
  //   id:4,
  //   image: game1 ,
  //   title: 'game1',
  //   github: 'https://github.com/brillbray/GamesPortofolios'
  // },
  // {
  //   id:5,
  //   image: game1 ,
  //   title: 'game1',
  //   github: 'https://github.com/brillbray/GamesPortofolios'
  // }
]

const webPorto = [
  {
    id:1,
    image: webPorto1 ,
    title: 'A guitar shop website',
    github: 'https://github.com/brillbray/GuitarWebBrill.git'
  },
  {
    id:2,
    image: webPorto2,
    title: 'Motorcyle shop website',
    github: 'https://github.com/brillbray/guitarPortoBrill'
  },
  // {
  //   id:3,
  //   image: webPorto1,
  //   title: 'webPorto1',
  //   github: 'https://github.com'
  // },
  // {
  //   id:4,
  //   image: webPorto2,
  //   title: 'webPorto2',
  //   github: 'https://github.com'
  // },
  // {
  //   id:5,
  //   image: webPorto1,
  //   title: 'webPorto1',
  //   github: 'https://github.com'
  // }
]

const draw = [
  {
    id:1,
    image: draw1 ,
    title: 'Dragon',
    github: 'https://github.com'
  },
  {
    id:2,
    image: draw2,
    title: 'Fruit',
    github: 'https://github.com'
  },
  // {
  //   id:3,
  //   image: draw1,
  //   title: 'draw1',
  //   github: 'https://github.com'
  // },
  // {
  //   id:4,
  //   image: draw2,
  //   title: 'draw2',
  //   github: 'https://github.com'
  // },
  // {
  //   id:5,
  //   image: draw1,
  //   title: 'draw1',
  //   github: 'https://github.com'
  // }
]


const threeD = [
  {
    id:1,
    image: threeDPorto1 ,
    title: 'Sword',
  },
  
]
const Portofolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <h1 id='porto-h1'>Game Projects</h1>
      <div className="container portfolio__container">
        {
          game.map(({id, image, title, github}) => {
            return(
              <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn btn-primary btn-mid' target="_blank">Github</a>
              </div>   
              </article>
            )
          })
        }
      </div>
      <h1 id='porto-h1'>Website Projects</h1>
      <div className="container portfolio__container">
        {
          webPorto.map(({id, image, title, github}) => {
            return(
              <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image}/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn btn-primary btn-mid' target="_blank">Github</a>
              </div>   
              </article>
            )
          })
        }
      </div>
      <h1 id='porto-h1'>2D Drawing Projects</h1>
      <div className="container portfolio__container">
        {
          draw.map(({id, image, title}) => {
            return(
              <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image}/>
              </div>
              <h3>{title}</h3>
             
              </article>
            )
          })
        }
      </div>

       <h1 id='porto-h1'>3D Modelling Mini Projects</h1>
      <div className="container portfolio__container">
        {
          threeD.map(({id, image, title}) => {
            return(
              <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image}/>
              </div>
              <h3>{title}</h3>        
              </article>
            )
          })
        }
      </div>

     
    </section>
  )
}

export default Portofolio