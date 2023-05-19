 import React from 'react'
 import './AboutMe.css'


 export default function AboutMe() {
    
    return (

        <section className="about-me" id="about">
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">Software Engineer based out of London</p>
        
        <div className="about-me__body">
            <p>4 years of experience in the games industry. With a background in QA testing and digital operations.
            I've worked at top companies including Omeda Studios and Creative Assembly, 
            contributing to the development of the Total War series and Predecessor.
            </p>
            <p>BA in Computing and History from the University of Kent.</p>

            <h2>Tools & Tech</h2>
            <p>JavaScript | Python | HTML | CSS | React.js | Redux | Node.js | Express.js | PostgreSQL | Mocha & Chai | Jest | <br></br>  
               Git & Version Control</p>
        </div>
     
     </section>
    )
 }