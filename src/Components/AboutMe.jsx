import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        Software Engineer based in London
      </p>

      <div className="about-me__body">
        <p>
          Software Engineer proficient in frontend and backend, currently
          working with TypeScript, TailwindCSS, React.js, Next.js, Node.js,
          Shadcn UI, Prisma and Git to create a one stop site for all your AI
          needs
        </p>
        <p>BA in Computing and History from the University of Kent.</p>

        <h2 className="section__title section__title--about">Tools & Tech</h2>
        <p>
          <b>Languages:</b> JavaScript, TypeScript, Python, HTML, CSS,
          PostgreSQL
        </p>
        <p>
          <b>Frameworks:</b> React.js, Next.js,
        </p>
        <p>
          <b>Libraries:</b> Node.js, Express.js, Redux
        </p>
        <p>
          <b>Testing: </b> Mocha & Chai, Jest
        </p>
        <p>
          <b>Tools:</b> Git, Vercel, Clerk, Stripe
        </p>
      </div>
    </section>
  );
}
