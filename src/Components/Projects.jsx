import React from 'react'
import './Projects.css'


export default function Projects() {
   
   return (
    <section className="my-projects" id="projects">
    <h2 className="section__title section__title--projects">Projects</h2>
    <p className="section__subtitle section__subtitle--projects">A selection of my projects</p>
    
    <div className="portfolio">
        <div className="portfolio__item">
        <a href="https://calum09.github.io/Film-Finder/" >
            <img src="Images/Film Guide.png" alt="Film Finder" className="portfolio__img"/>
        </a>
        <h3>Film Finder</h3>
        <p className="portfolio-description"><strong>JavaScript, HTML & CSS</strong> - Film Finder is a web app that uses the OMDB api to display information about the film you have searched.</p>
        </div>

        <div className="portfolio__item">
        <a href="https://calum09.github.io/WeatherApp/">
            <img src="Images/weather-app.png" alt="Weather App" className="portfolio__img"/>
        </a>
        <h3>Weather App</h3>
        <p className="portfolio-description"><strong>JavaScript, HTML & CSS</strong> - A weather app created using the Open Weather API to display the current weather in a given city.</p>
        </div>

        <div className="portfolio__item">
        <a href="https://calum09.github.io/Login-Page/">
            <img src="Images/login-page.png" alt="Login Page" className="portfolio__img"/>
        </a>
        <h3>Login Page</h3>
        <p className="portfolio-description"><strong>HTML & CSS</strong> - A login landing page.</p>
        </div>

    </div>
</section> 
   )
}
