import React from 'react'
import Header from  './components/header/Header'
import PortfolioGrid from './components/portfolioGrid/PortfolioGrid'
import Navbar from './components/navbar/Navbar'
import About from './components/aboutMe/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contactMe/Contact'
import Footer from './components/footer/Footer'
import PortofolioHL from './components/portfolioHL/PortfolioHL'

const App = () => {
  return (
    <>
        <Header />  
        {/* <PortfolioGrid/>   */}
        <Navbar />
        <Portfolio />  
        <Experience />
        <About />      
        <Contact />
        <Footer /> 
    </>
  )
}

export default App