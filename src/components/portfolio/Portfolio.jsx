import React from 'react'
import './portfolio.css'
import draw1 from '../../assets/draw1.png'
import draw2 from '../../assets/draw2.png'
// import 2dDraw3 from '../../assets/2dDraw3.png'
// import draw4 from '../../assets/portfolio2.png'
// import draw5 from '../../assets/portfolio2.png'

import webPorto1 from '../../assets/porto1.png'
import webPorto2 from '../../assets/porto2.png'

import game1 from '../../assets/game1.png'

const game = [
  {
    id:1,
    image: game1 ,
    title: 'Brickey Game',
    github: 'https://github.com/brillbray/GamesPortofolios'
  },
  // {
  //   id:2,
  //   image: game1 ,
  //   title: 'game1',
  //   github: 'https://github.com/brillbray/GamesPortofolios'
  // },
  // {
  //   id:3,
  //   image: game1 ,
  //   title: 'game1',
  //   github: 'https://github.com/brillbray/GamesPortofolios'
  // },
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
                {/* <a href={"https://dribble.com/Alien_pixels"} className='btn btn-primary' target="_blank">Open</a> */}
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
                {/* <a href={"https://dribble.com/Alien_pixels"} className='btn btn-primary' target="_blank">Open</a> */}
              </div>   
              </article>
            )
          })
        }
      </div>
      <h1 id='porto-h1'>2D Drawing Projects</h1>
      <div className="container portfolio__container">
        {
          draw.map(({id, image, title, github}) => {
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