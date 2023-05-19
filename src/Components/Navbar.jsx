import React from 'react';
import './Navbar.css'


export default function Navbar() {

    function handleClickHamburger(e) {
        e.preventDefault();
        document.body.classList.toggle('nav-open');
    }

    function handleClickNavLink(e) {
        e.preventDefault;
        const navLinks = document.querySelectorAll('.nav__link')
        navLinks.forEach(link => {
                document.body.classList.remove('nav-open');
        })

    }

    return ( 
    <header>
        <div className="logo">
            <svg fill="#000000" width="50" height="50" margin="5px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.11,23.52l1.42-1.41C5.14,18.72,3.37,17,2.39,16L8.53,9.89A1,1,0,1,0,7.11,8.47L.29,15.29A1.05,1.05,0,0,0,0,16a1,1,0,0,0,.3.71Z"></path> <path d="M31.71,15.29c-.1-.09-6.82-6.82-6.82-6.82L23.48,9.89c3.38,3.38,5.15,5.16,6.13,6.09l-6.13,6.13a1,1,0,0,0,.7,1.71,1,1,0,0,0,.71-.3l6.82-6.81A1,1,0,0,0,32,16,1,1,0,0,0,31.71,15.29Z"></path> <path d="M13.27,27.91a1,1,0,0,0,1-.76L19.7,5.33a1,1,0,0,0-1.94-.48L12.3,26.67A1,1,0,0,0,13,27.88,1,1,0,0,0,13.27,27.91Z"></path> </g></svg>
        </div>
        <button className="nav-toggle" aria-label="toggle navigation" onClick={handleClickHamburger}>
            <span className="hamburger"></span>
        </button>
        <nav className="nav ">
            <ul className="nav__list">
                <li className="nav__item"><a href="#home" className="nav__link" onClick={handleClickNavLink}>Home</a></li>
                <li className="nav__item"><a href="#about" className="nav__link" onClick={handleClickNavLink}>About me</a></li>
                <li className="nav__item"><a href="#projects" className="nav__link" onClick={handleClickNavLink}>Projects</a></li>
                <li className="nav__item"><a href="#contact" className="nav__link" onClick={handleClickNavLink}>Contact</a></li>
            </ul>
        </nav>
    </header>
    )
}