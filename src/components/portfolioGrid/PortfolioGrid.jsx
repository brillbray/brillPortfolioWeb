import React from 'react'
import './portfolioGrid.css'

import img1 from '../../assets/3D/Props/Barrett_Rendered.png'
import img2 from '../../assets/3D/Props/Uzi_RenderAll_TranspBG.png'
import img3 from '../../assets/3D/Props/SmokeGrenade_Render.png'
import img4 from '../../assets/3D/Props/StylizeShovel_AllPerspective.png'

import game1 from '../../assets/MainMenu.png'
import game2 from '../../assets/LimusOutbreak.png'
import game3 from '../../assets/StarfellGIF.gif'
import game4 from '../../assets/GifBrickeyGame.gif'

const PortfolioGrid1 =() => {
     return (
    <div className="portfolioGrid--2">
      <img src={img1}/>
      <img src={img2}/>
      <img src={img3}/>
      <img src={img4}/>
    </div>
  )
}

const PortfolioGrid2 =() => {
     return (
    <div className="portfolioGrid--4">
      <img src={game1}/>
      <img src={game2}/>
      <img src={game3}/>
      <img src={game4}/>
    </div>
  )
}


const PortfolioGrid = () => {
  return (
    <>
        <p className="portfolio-title-3d">3D Art</p>
        <PortfolioGrid1 />
        <p className="portfolio-title-game">Game Projects</p>
        <PortfolioGrid2 />
    </>
  )
}

// const PortfolioGrids = () => {
//   return (
//     <div className="portfolioGrid--4">
//       <img src={img1}/>
//       <img src={img2}/>
//       <img src={img3}/>
//       <img src={img4}/>
//     </div>
    
//   )
  
// }



// const PortfolioGrid = () => {
//   return (
//     <div style={{ color: 'red', fontSize: '30px' }}>
//       PORTFOLIO GRID MASUK
//     </div>
//   )
// }

export default PortfolioGrid
