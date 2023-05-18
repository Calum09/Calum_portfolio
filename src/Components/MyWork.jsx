import React from 'react'
import './MyWork.css'


export default function MyWork() {
   
   return (
    <section className="my-work" id="work">
    <h2 className="section__title section__title--work">My work</h2>
    <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
    
    <div className="portfolio">
        <a href="https://calum09.github.io/Film-Finder/" className="portfolio__item">
            <img src="Images/Film Guide.png" alt="Film Finder" className="portfolio__img"/>
        </a>
        
        <a href="https://calum09.github.io/WeatherApp/" className="portfolio__item">
            <img src="Images/weather-app.png" alt="Weather App" className="portfolio__img"/>
        </a>
        
        <a href="https://calum09.github.io/Login-Page/" className="portfolio__item">
            <img src="Images/login-page.png" alt="Login Page" className="portfolio__img"/>
        </a>
    </div>
</section> 
   )
}
