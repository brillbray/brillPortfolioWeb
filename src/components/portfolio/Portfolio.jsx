 import React from 'react'
import './portfolio.css'
import { FaRegCircleDot } from 'react-icons/fa6';
import { SiUnrealengine } from "react-icons/si";
import { SiBlender } from "react-icons/si";
import {SiUnity } from "react-icons/si";
import { FaArtstation } from "react-icons/fa";
import { SiSketchfab } from "react-icons/si";
import { IoPeopleSharp } from "react-icons/io5";
// const unrealEngineGame = [game1]
import game1 from '../../assets/MainMenu.png'
import game2 from '../../assets/LimusOutbreak.png'
import game3 from '../../assets/StarfellGIF.gif'
import game4 from '../../assets/GifBrickeyGame.gif'



import pixelArt1 from '../../assets/2D/pxl_firewood.png'


import draw1 from '../../assets/2D/Dragon.png'
import draw2 from '../../assets/2D/2d_fruit1.png'
import draw3 from '../../assets/2D/2d_GojoSatoru_PointingFingerPose.png'

import drawLineArt1 from '../../assets/2D/Sketch/StonePlatform-Spawn.png'
import drawLineArt2 from '../../assets/2D/2d_fruit1.png'

// import draw4 from '../../assets/portfolio2.png'
// import draw5 from '../../assets/portfolio2.png'

// import webPorto1 from '../../assets/TanakaGuitarWeb.gif'
import webPorto2 from '../../assets/porto2.png'

//Small Object and realistic
import threeDPortoWeap1 from '../../assets/3D/Props/Barrett_Rendered.png'
import threeDPortoWeap1_gif from '../../assets/3D/Props/Barrett_RenderShowcase.gif'

import threeDPortoWeap2 from '../../assets/3D/Props/Uzi_RenderAll_TranspBG.png'
import threeDPortoWeap2_gif from '../../assets/3D/Props/UziGun_RenderShowcase.gif'

import threeDPortoWeap3 from '../../assets/3D/Props/M4A1_AllPerspective.png'
import threeDPortoWeap3_gif from '../../assets/3D/Props/M4A1_RenderShowcase.gif'

import threeDPortoWeap4 from '../../assets/3D/Props/Knife1_Render.png'
import threeDPortoWeap4_gif from '../../assets/3D/Props/Knife1_RenderShowcase.gif'

import threeDPortoWeap5 from '../../assets/3D/Props/SmokeGrenade_Render.png'
import threeDPortoWeap5_gif from '../../assets/3D/Props/SmokeGrenade_Render.gif'

// import threeDPortoWeap5 from '../../assets/3D/Props/WarAxe.png'
import threeDPortoProp1 from '../../assets/3D/Props/Guitar_Render.png'
import threeDPortoProp1_gif from '../../assets/3D/Props/Guitar_RenderShowcase.gif'

import threeDPortoProp2 from '../../assets/3D/Props/StylizeShovel_AllPerspective.png'
import threeDPortoProp2_gif from '../../assets/3D/Props/ShovelSowterra_RenderShowcase.gif'


import threeDPortoProp4 from '../../assets/3D/Props/BrokenCart.png'
import threeDPortoProp5 from '../../assets/3D/Props/WellWater_Render.png'
import threeDPortoProp6 from '../../assets/3D/Props/FireHydrant_Render.png'
import threeDPortoProp7 from '../../assets/3D/Props/HumanHand_Render.png'


import threeDPortoEnv1 from '../../assets/3D/Environment/MyRoom_Render.png'
import threeDPortoEnv2 from '../../assets/3D/Environment/LivingRoom_Rev_Render.png'
import threeDPortoEnv3 from '../../assets/3D/Environment/StylizedHouseAtSea.png'
// import threeDPortoEnv3 from '../../assets/3D/Environment/StylizedHouseAtSea.png'

import threeDPortoChar1 from '../../assets/3D/Character/OniMask_Wireframe.png'
import threeDPortoChar1_gif from '../../assets/3D/Character/OniMask_RenderShowcase.gif'

// import threeDPortoChar2 from '../../assets/AnimeCharacter-4K.png'

// FireHydrant_Render.png


const game = [
  {
    id:1,
    image: game1 ,
    title: 'Sowterra (Game for Journal publication - Published in Research Gate & Bio Web of conferences)',
    github: 'https://brillbray.itch.io/sowterra',
    coreLoop: "Coreloop:",
    coreDetails: "Pick up some seed packages on the ground",
    coreDetails2: "Take the shovel and plant the seed into the soil by clicking 'q' key on your keyboard",
    coreDetails3: "Switch the seeds package by scrolling mid-mouse button to up and down, water the plants, and after a seconds you must be able to pick up the result. Make sure you drink the water at the lake to prevent dehydration.",
    teamMember: ' Solo',
    madeby: "Made by using :",
  },
  {
    id:2,
    image: game2 ,
    title: 'Limus Outbreak',
    github: 'https://github.com/brillbray/Limus-Outbreak',
    coreLoop: "Contribution as Lead Game Programmer:",
    coreDetails: "Visual Novel Scripting",
    coreDetails2: "Implement sound for each scene of sentences",
    coreDetails3: "Animate a simple transition and also maintain scene load, etc",
    teamMember: ' 13 People Contributed',
    madeby: "Made by using :",
  },
   {
    id:3,
    image: game3 ,
    title: 'Star Fell',
    github: 'https://github.com/brillbray/Starfell.git',
    coreLoop: "Project Team : 3",
    coreLoop2: "Contribution as Game Programmer:",
    coreDetails: "Game Mechanic Programming",
    coreDetails2: "VN Dialogue System",
    coreDetails3: "Turn-based fighting scene",
    teamMember: ' 3 People Contributed',
    madeby: "Made by using :",
  },
  {
    id:4,
    image: game4 ,
    title: 'Brickey Game',
    github: 'https://github.com/brillbray/Brickey-Game',
    coreLoop: "Coreloop:",
    coreDetails: "Bounce the ball by pressing Arrow Up & Arrow Down",
    contribution: "Hit 5 Points to enemy goal target",
    contribution2: "Don't let the enemy bounce the ball into their target",
    teamMember: ' Solo',
    madeby: "Made by using :",
  },
 
]

const pixelArtPorto = [
  {
    id:1,
    image: pixelArt1 ,
    title: 'Firewood',
  },
]

// const webPorto = [
//   {
//     id:1,
//     image: webPorto1 ,
//     title: 'Tanaka Guitar Web (The information data must be incorrect)',
//     github: 'https://github.com/brillbray/GuitarWebBrill.git'
//   },

// ]

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
  {
    id:3,
    image: draw3,
    title: 'Gojo Satoru',
    github: 'https://github.com'
  },
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

const drawLineArt = [
  {
    id:1,
    image: drawLineArt2 ,
    title: 'StonePlatform-Spawn',
    github: 'https://github.com'
  },
  {
    id:2,
    image: drawLineArt2,
    title: 'DrawLineArt2',
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

const ThreeDProp = [
   {
    id:1,
    image: threeDPortoWeap1,
    title: 'Gun - Barrett M82A1 - Low Poly Asset',
    artstation : "https://www.artstation.com/artwork/bgql8o",
    projectdesc : "This model showcases the iconic Barrett M82A1 anti-materiel rifle in a heavily worn and rusted condition. The rusted surfaces, scratches, and faded metal textures reflect years of military use in harsh environments. Detailed modeling on the body, barrel, and internal components enhances the realistic look of a battlefield-tested heavy rifle that has endured extreme conditions and the passage of time",
    prodTime : "Production Time: 14 days (modeling, UV, texturing, rigging, animation)",
    gifvideo: threeDPortoWeap1_gif,
  },
   {
    id:2,
    image: threeDPortoWeap2,
    title: 'Gun - Uzi - Game Ready Asset',
    artstation : "https://www.artstation.com/artwork/rlkJeE",
    projectdesc : "This 3D object represents a futuristic Uzi-style firearm with a modular, mechanical design and sharp detailing. It features a black and metallic gray color scheme with red accents, giving it an industrial and aggressive look. The model is shown from multiple angles to highlight its overall form, textures, and key components such as the barrel, magazine, grip, and top rail, making it suitable for sci-fi games or visual assets.",
    prodTime : "Production Time: 4 days (modeling, UV, texturing)",
    gifvideo: threeDPortoWeap2_gif,
  },
  {
    id:3,
    image: threeDPortoWeap3,
    title: 'Gun - M4A1- Game Ready Asset',
    artstation : "https://www.artstation.com/artwork/K3G31X",
    projectdesc : "This object is a realistic assault rifle created with a focus on accurate proportions and authentic mechanical details. The design follows real-world weapon references, featuring a clean and precise structure across the barrel, receiver, magazine, grip, and stock. The materials and surface finishes emphasize realism, with subtle wear and metal definition. Overall, it represents a realistic, game-ready weapon asset, not stylized and not sculpted, suitable for realistic games or cinematic environments.",
    prodTime : "Production Time: 3 days (modeling, UV, texturing)",
    gifvideo: threeDPortoWeap3_gif,
  },
  {
    id:4,
    image: threeDPortoWeap4,
    title: 'Stylized Knife - Game Ready Asset',
    artstation : "https://skfb.ly/pFWrN",
    projectdesc: "A stylized curved dagger. The design features a clean metallic blade with subtle wear and glowing cyan engravings for an arcane look, complemented by a simple warm-toned handle to create strong visual contrast.",
    prodTime : "Production Time: 10 days (modeling, UV, texturing)",
    gifvideo: threeDPortoWeap4_gif,
 
  },
  {
    id:5,
    image: threeDPortoWeap5,
    title: 'Smoke Grenade - Game Ready Asset',
    artstation : "https://www.artstation.com/artwork/wrkkkY",
    projectdesc : "The object appears to be a realistic explosive grenade with a compact, cylindrical design. It features a dark green metal body with visible warning labels, including the word “EXPLOSIVE” and hazard symbols, reinforcing its dangerous nature.",
    prodTime : "Production Time: 2.5 days (modeling, UV, texturing)",
    gifvideo: threeDPortoWeap5_gif,
  },
  // {
  //   id: 5,
  //   image: threeDPortoWeap5,
  //   title: 'War Axe',
  // },
  {
    id: 6,
    image: threeDPortoProp2,
    title: 'Stylized Shovel - Game Ready Asset (Sowterra Game)',
    artstation : "https://www.artstation.com/artwork/P63ozn",
    projectdesc: "This object is a stylized shovel, sculpted in ZBrush. It features exaggerated forms and clean shapes that emphasize readability and visual appeal. The metal blade has a bold, simplified design with sculpted wear details, while the handle shows clear stylization in its proportions and grip wrapping. Overall, the shovel reflects a hand-sculpted, game-ready stylized asset, suitable for use in stylized games or illustrative 3D environments.",
    prodTime : "Production Time: 7 days (modeling, UV, texturing)",  
    gifvideo: threeDPortoProp2_gif,
  },
  {
    id: 7,
    image: threeDPortoProp1,
    title: 'Classic Guitar',
    artstation : "https://www.artstation.com/artwork/bgqmLE",
    projectdesc: "A 3D classic guitar model displayed from multiple angles, featuring a warm yellow body with a dark brown back, along with wireframe views that showcase the overall form and clean geometry",
    prodTime : "Production Time: 2 days (modeling, UV, texturing)",
    gifvideo: threeDPortoProp1_gif,
   
  },
  // {
    // id: 8,
    // image: threeDPortoProp3,
    // title: 'Oni Mask',
    // artstation : "https://www.artstation.com/artwork/mAGE9d",
    // projectdesc: "This 3D object is a Japanese Oni mask featuring a fierce and expressive design inspired by traditional folklore. The model emphasizes strong facial features and ornamental details, making it suitable for 3D printing, display pieces, cosplay props, or collectible art.",
    // gifvideo: threeDPortoProp3_gif,
  // },
  // {
  //   id: 9,
  //   image: threeDPortoProp4,
  //   title: 'Broken Cart - Game Ready Asset (Sowterra Game)'
  // },
  // {
  //   id: 10,
  //   image: threeDPortoProp5,
  //   title: 'Well Water - Game Ready Asset (Sowterra Game)'
  // },
  // {
  //   id: 11,
  //   image: threeDPortoProp6,
  //   title: 'Fire Hydrant'
  // },
  // {
    // id: 12,
    // image: threeDPortoProp7,
    // title: 'Stylized Human Hand'
  // },
]

const ThreeDEnv = [
  {
    id: 1,
    image: threeDPortoEnv1,
    title: '3D Isometric Room',
    sketchfab: "https://sketchfab.com/3d-models/isometric-room-diorama-366a5f1f99c645f884f8632183729e62",
  },
  {
    id: 2,
    image: threeDPortoEnv2,
    title: '3D Isometric Room - Living Room'
  },
  {
    id: 3,
    image: threeDPortoEnv3,
    title: '3D Stylized House At Sea'
  },
]

const ThreeDChar = [
  {
    id: 1,
    image: threeDPortoChar1,
    title: 'Oni Mask',
    artstation : "https://www.artstation.com/artwork/mAGE9d",
    projectdesc: "This 3D object is a Japanese Oni mask featuring a fierce and expressive design inspired by traditional folklore. The model emphasizes strong facial features and ornamental details, making it suitable for 3D printing, display pieces, cosplay props, or collectible art.",
    gifvideo: threeDPortoChar1_gif,
  },
 
]


const Portfolio = () => {
  return (
    
    <section id='portfolio'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2>
    <div id="3D">
      <h1 id='porto-h1'>3D Props</h1>
      
      <div className="container portfolio__container">
        {
          ThreeDProp.map(({id, image, title,projectdesc, prodTime, artstation, gifvideo}) => {
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image}/>
              </div>
              <h3>{title}</h3>   
              <p style={{textAlign:'justify'}}>{projectdesc}</p>     
              <p style={{ textAlign: 'center', color: 'var(--color-primary)' }}>
                {prodTime}
              </p> 
              <a 
                href={artstation}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaArtstation
                  style={{
                    cursor: 'pointer',
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.2)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                  
                />
            
              </a>
                  <p style={{textAlign:'center'}}>Artstation</p>
                    <div className="hover-preview-wrapper">
                      <button className="preview-btn">
                        Preview 3D 
                      </button>

                      <div className="hover-preview-window">
                        <img src={gifvideo} alt="3D Preview" />
                      </div>
                    </div>
              </article>
              
            )
            
          })
        }
      </div>
    </div>
      

      <h1 id='porto-h1'>3D Environment</h1>
      <div className="container portfolio__container">
        {
          ThreeDEnv.map(({id, image, title, sketchfab}) => {
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image}/>
              </div>
              <h3>{title}</h3>   
              <a 
                href={sketchfab}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiSketchfab
                  style={{
                    cursor: 'pointer',
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.2)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                />
            
              </a>
                  <p style={{textAlign:'center'}}>Sketchfab</p>     
              </article>
            )
          })
        }
      </div>

      <h1 id='porto-h1'>3D Character</h1>
      <div className="container portfolio__container">
        {
          ThreeDChar.map(({id, image, title,projectdesc, artstation, gifvideo}) => {
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image}/>
              </div>
              <h3>{title}</h3>   
               <p style={{textAlign:'justify'}}>{projectdesc}</p>     
              <a 
                href={artstation}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaArtstation
                  style={{
                    cursor: 'pointer',
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.2)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                  
                />
            
              </a>
                  <p style={{textAlign:'center'}}>Artstation</p>
                    <div className="hover-preview-wrapper">
                      <button className="preview-btn">
                        Preview 3D 
                      </button>

                      <div className="hover-preview-window">
                        <img src={gifvideo} alt="3D Preview" />
                      </div>
                    </div>     
              </article>
            )
          })
        }
      </div>

      <div id="gameprojects">
      <h1 id='porto-h1'>Game Projects</h1>
      <div className="container portfolio__container">
        {
           game.map(({id, image, title, github, coreLoop, coreLoop2, coreDetails, coreDetails2, coreDetails3, contribution, contribution2, teamMember, madeby}) => {
            return(
               <article key={id} className="portfolio__item">
               <div className="portfolio__item-image">
                <img src={image}/>
               </div>
               <h3>{title}</h3>
               <div className="portfolio__item-cta">
                 <a href={github} className='btn btn-primary btn-mid' target="_blank">
                          {id > 1 ? 'Github' : 'Itch. Io'}   
                           {/* {{unrealEngineGame.includes(image) ? 'Github' : 'Itch.io'}} */}
                 </a>
                 { id === 1 && (
              <p>
              </p>
            )}
                </div>   
                <p style={{marginTop:"20px"}}>{coreLoop}</p>                 
                <p style={{marginTop:"20px"}}>{coreLoop2}</p>      
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
                }} 
                />{contribution}{coreDetails2}
                </p>
                <p className='portfolioHL__details-icon'><FaRegCircleDot style={{
                   position: 'relative',
                   left: '0',
                   marginRight: '10px',
                }} />{contribution2}{coreDetails3}
                </p>
             
                <p style={{marginTop: '10px', marginBottom: '0'}}>
                     <IoPeopleSharp />{teamMember}
                </p>
                <p style={{marginTop: '10px', marginBottom: '0'}}>
                  {madeby}
                </p>
               <p
                  className="portfolioHL__details-icon"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginTop: '10px',
                  }}
                >
                  {id === 1 ? (
                    <>
                      <SiUnrealengine
                        style={{
                          position: 'relative',
                          left: '0',
                        }}
                      />
                      <SiBlender
                        style={{
                          position: 'relative',
                          left: '0',
                        }}
                      />
                    </>
                  ) : (       //Kalau id != 1 maka unity
                    <SiUnity
                      style={{
                        position: 'relative',
                        left: '0',
                      }}
                    />
                  )}
                </p>
               </article>
             )
           })  
        }
      </div>
    </div>


      {/* <h1 id='porto-h1'>Pixel Art Mini Projects</h1>
      <div className="container portfolio__container">
        {
          pixelArtPorto.map(({id, image, title}) => {
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image}/>
              </div>
              <h3>{title}</h3>
              </article>
            )
          })
        }
      </div> */}

      {/* <h1 id='porto-h1'>Website Projects</h1>
      <div className="container portfolio__container">
        {
          webPorto.map(({id, image, title, github}) => {
            return(
              <article key={id} className="portfolio__item">
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
      </div> */}
      
      {/* <h1 id='porto-h1'>2D Drawing Projects</h1>
      <div className="container portfolio__container">
      {
          draw.map(({id, image, title}) => {
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image}/>
              </div>
              <h3>{title}</h3> 
              </article>
            )
          })
        }
      </div>  */}

      {/* <h1 id='porto-h1'>2D Drawing Line Art / Sketch Projects</h1>
      <div className="container portfolio__container">
      {
          drawLineArt.map(({id, image, title}) => {
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image}/>
              </div>
              <h3>{title}</h3> 
              </article>
            )
          })
        }
      </div>  */}
      


     
    </section>
  )
}

export default Portfolio