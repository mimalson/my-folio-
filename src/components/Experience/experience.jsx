import React from 'react'
import "./experience.css"


const experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>02. Technologies</h2>
      
      <div className=" container experience__container">
        <div className="experience__frontend">
          <div className="experience__content">
            <article className="details">
             
              <div>
                <h4 className='skills'>I've worked with a range of technologies in the web development world. 
                  My technical skills include... 
                  <span className='dotjs'> HTML/CSS/JS[ES4+], ReactJS, NextJS, Boostrap, 
                   Styed component...
                 </span>
                </h4 >
                <h4 className='skills'>and some other dot JS libraries.</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
  </section>
  )
}

export default experience
