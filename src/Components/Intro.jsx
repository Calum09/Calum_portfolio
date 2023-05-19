import React from 'react';
import './Intro.css'


export default function Intro() {

    return ( 
        <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
            Hi, I'm <strong> Calum </strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">Software Engineer</p>
        <img src="Images/Calum.JPG" alt="a picture of Calum Laverick smiling" className="intro__img"/>
    </section>
    )
}