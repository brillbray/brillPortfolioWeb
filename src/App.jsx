import React from 'react';
import ReactDOM from "react-dom/client";
import Header from  './components/header/Header';
import Navbar from './components/navbar/Navbar';
import About from './components/aboutMe/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contactMe/Contact';
import Footer from './components/footer/Footer';
import reportWebVitals from "./reportWebVitals";


const App = ReactDOM.createRoot(document.getElementById("App"));
App.render(
  <React.StrictMode>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer /> 
  </React.StrictMode>
);

reportWebVitals();

export default App