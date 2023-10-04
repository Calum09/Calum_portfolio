import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="my-projects" id="projects">
      <h2 className="section__title section__title--projects">Projects</h2>
      <p className="section__subtitle section__subtitle--projects">
        A selection of my projects
      </p>


      <div className="portfolio">
            <div className="portfolio__item">
          <a href="">
            <img
              src="/Images/Expert.PNG"
              alt="Expert"
              className="portfolio__img"
            />
          </a>
          <h3>Expert</h3>
          <h4>React.js, Next.js, HTML, TailwindCSS, TypeScript, Shadcn UI, CLerk and Prisma</h4>
          <p className="portfolio-description">
            A one stop solution for all your AI needs! Currently under construction, development can be viewed on Github - <a className="social-list__link" href="https://github.com/Calum09/AI-Expert">AI Expert</a>
          </p>
          </div>
        </div>

          <div className="portfolio">
            <div className="portfolio__item">
          <a href="https://shopping-list-calumlav.netlify.app/">
            <img
              src="/Images/Shopping-List.png"
              alt="Shopping List"
              className="portfolio__img"
            />
          </a>
          <h3>Shopping List</h3>
          <h4>JavaScript, HTML & CSS, Firebase</h4>
          <p className="portfolio-description">
            A shopping list tracker to keep your groceries all in one place
          </p>
     </div>
        </div>
             <div className="portfolio">
            <div className="portfolio__item">
          <a href="https://calum09.github.io/Film-Finder/">
            <img
              src="/Images/Film Guide.png"
              alt="Film Finder"
              className="portfolio__img"
            />
          </a>
          <h3>Film Finder</h3>
          <h4>JavaScript, HTML & CSS</h4>
          <p className="portfolio-description">
            Film Finder is a web app that uses the OMDB api to display
            information about the film you have searched
          </p>
     </div>
        </div>
              <div className="portfolio">
            <div className="portfolio__item">
          <a href="https://calum09.github.io/WeatherApp/">
            <img
              src="/Images/weather-app.png"
              alt="Weather App"
              className="portfolio__img"
            />
          </a>
          <h3>Weather App</h3>
          <h4>JavaScript, HTML & CSS</h4>
          <p className="portfolio-description">
            A weather app created using the Open Weather API to display the
            current weather in a given city
          </p>
     </div>
        </div>
             <div className="portfolio">
            <div className="portfolio__item">
          <a href="https://calum09.github.io/Login-Page/">
            <img
              src="/Images/login-page.png"
              alt="Login Page"
              className="portfolio__img"
            />
          </a>
          <h3>Login Page</h3>
          <h4>HTML & CSS</h4>
          <p className="portfolio-description">A login landing page</p>
          </div>
        </div>
    </section>
  );
}
