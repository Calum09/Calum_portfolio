import React from 'react';

export default function Navbar() {

    return ( 
    <header>
        <div className="logo">
            <svg fill="#000000" width="50" height="50" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.11,23.52l1.42-1.41C5.14,18.72,3.37,17,2.39,16L8.53,9.89A1,1,0,1,0,7.11,8.47L.29,15.29A1.05,1.05,0,0,0,0,16a1,1,0,0,0,.3.71Z"></path> <path d="M31.71,15.29c-.1-.09-6.82-6.82-6.82-6.82L23.48,9.89c3.38,3.38,5.15,5.16,6.13,6.09l-6.13,6.13a1,1,0,0,0,.7,1.71,1,1,0,0,0,.71-.3l6.82-6.81A1,1,0,0,0,32,16,1,1,0,0,0,31.71,15.29Z"></path> <path d="M13.27,27.91a1,1,0,0,0,1-.76L19.7,5.33a1,1,0,0,0-1.94-.48L12.3,26.67A1,1,0,0,0,13,27.88,1,1,0,0,0,13.27,27.91Z"></path> </g></svg>
        </div>
        <button className="nav-toggle" aria-label="toggle navigation">
            <span className="hamburger"></span>
        </button>
        <nav className="nav ">
            <ul className="nav__list">
                <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                <li className="nav__item"><a href="#services" className="nav__link">My Services</a></li>
                <li className="nav__item"><a href="#about" className="nav__link">About me</a></li>
                <li className="nav__item"><a href="#" className="nav__link">My Work</a></li>
            </ul>
        </nav>
    </header>
    )
}