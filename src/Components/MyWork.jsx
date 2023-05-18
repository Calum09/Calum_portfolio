import React from 'react'

export default function MyWork() {
   
   return (
    <section className="my-work" id="work">
    <h2 className="section__title">My work</h2>
    <p className="section__subtitle"></p>
    
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
        
        <a href="#" className="portfolio__item">
            <img src="img/portfolio-04.jpg" alt="" className="portfolio__img"/>
        </a>
        
        <a href="#" className="portfolio__item">
            <img src="img/portfolio-05.jpg" alt="" className="portfolio__img"/>
        </a>
        
        <a href="#" className="portfolio__item">
            <img src="img/portfolio-06.jpg" alt="" className="portfolio__img"/>
        </a>
        
        <a href="#" className="portfolio__item">
            <img src="img/portfolio-07.jpg" alt="" className="portfolio__img"/>
        </a>
        
        <a href="#" className="portfolio__item">
            <img src="img/portfolio-08.jpg" alt="" className="portfolio__img"/>
        </a>
        
        <a href="#" className="portfolio__item">
            <img src="img/portfolio-09.jpg" alt="" className="portfolio__img"/>
        </a>
        
        <a href="#" className="portfolio__item">
            <img src="img/portfolio-10.jpg" alt="" className="portfolio__img"/>
        </a>
    </div>
</section> 
   )
}
