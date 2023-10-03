 import React from 'react'
 import './AboutMe.css'


 export default function AboutMe() {
    
    return (

        <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">Software Engineer based out of London</p>
        
        <div className="about-me__body">
            <p>Software Engineer currently proficient in Frontend and Backend, currently working with TypeScript, HTML, TailwindCSS React.js and Next.js to create a one stop site for all your AI needs
               You can check out the progress in my github reprository - https://github.com/Calum09/AI-Expert
            </p>
            <p>BA in Computing and History from the University of Kent.</p>

            <h2 className="section__title section__title--about">Tools & Tech</h2>
            <p> JavaScript/TypeScript | Python | HTML | CSS | TailwindCSS | React.js | Next.js | Redux | Node.js | Express.js | PostgreSQL | Mocha & Chai | Jest |   
               Git & Version Control</p>
        </div>
     
     </section>
    )
 }