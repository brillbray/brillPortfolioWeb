import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
        <h5>My Skills</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">

        <div className="experience__frontend">
            <h3>Game Development</h3>
          <div className="experience__content">
            
             <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>3D Game Art</h4>
                  {/* <small className='text-light'>Intermediate</small> */}
                </div> 
            </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Unity</h4>
                  {/* <small className='text-light'>Intermediate</small> */}
                </div> 
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Unreal Engine</h4>
                  {/* <small className='text-light'>Intermediate</small> */}
                </div> 
              </article>

              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>2D Game Art</h4>
                  {/* <small className='text-light'>Basic</small> */}
                </div> 
              </article>
            </div>
          </div>

        
         <div className="experience__frontend">
            <h3>3D Software Modelling & Texturing</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Blender</h4>
                  {/* <small className='text-light'>Intermediate</small> */}
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Autodesk Maya</h4>
                  {/* <small className='text-light'>Intermediate</small> */}
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Adobe Substance 3D Painter</h4>
                  {/* <small className='text-light'>Intermediate</small> */}
                </div>
              </article>
               <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Zbrush</h4>
                  {/* <small className='text-light'>Beginner</small> */}
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Marmoset Toolbag 5</h4>
                  {/* <small className='text-light'>Intermediate</small> */}
                </div>
              </article>
            </div>
        </div>
        
        <div className="experience__frontend">
            <h3>2D Software</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Adobe Photoshop</h4>
                  {/* <small className='text-light'>Intermediate</small> */}
                </div>
            </article> 
      
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Clip Studio Paint</h4>
                  {/* <small className='text-light'>Basic</small> */}
                </div>
            </article>                
             <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Adobe Illustrator</h4>
                  {/* <small className='text-light'>Basic</small> */}
                </div>
            </article>
            <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Krita</h4>
                  {/* <small className='text-light'>Basic</small> */}
                </div>
              </article>
            <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>IbisPaint X</h4>
                  {/* <small className='text-light'>Basic</small> */}
                </div>
              </article> 
            </div>
        </div>
          <div className="experience__frontend">
            <h3>Web Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>HTML</h4>
                  {/* <small className='text-light'>Advanced</small> */}
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>CSS</h4>
                  {/* <small className='text-light'>Intermediate</small> */}
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>JavaScript</h4>
                  {/* <small className='text-light'>Basic</small> */}
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>React JS</h4>
                  {/* <small className='text-light'>Intermediate</small> */}
                </div>
              </article>
            </div>
          </div> 
        </div>    
    </section>
  )
}

export default Experience