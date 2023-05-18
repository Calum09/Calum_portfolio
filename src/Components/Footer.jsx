import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"




export default function Footer() {
   
   return (
    <footer className="footer">
    <a href="mailto:calumlaverick09@gmail.com" className="footer__link">calumlaverick09@gmail.com</a>

    <ul className="social-list">
    <li className="social-list__item">
        <a className="social-list__link" href="https://github.com/Calum09">
        <FontAwesomeIcon icon={faGithub} />
        </a>
    </li>
    <li className="social-list__item">
        <a className="social-list__link" href="https://www.linkedin.com/in/calum-laverick-5a9133162/">
        <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
    </li>
    <li className="social-list__item">
        <a className="social-list__link" href="#">
        <FontAwesomeIcon icon={faGithub} />
        </a>
    </li>
    <li className="social-list__item">
        <a className="social-list__link" href="#">
        <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
    </li>
    </ul>
</footer>
   )
}