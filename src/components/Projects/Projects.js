import React, { useState } from "react";
import "./Projects.scss";
import munch from "../../assets/images/Munch.png";
import instock from "../../assets/images/InStock.png";
import brainflix from "../../assets/images/Brainflix.png";
import ScrollAnimation from "react-animate-on-scroll";
import Contact from "../Contact/Contact";

const Projects = () => {
  const [projects] = useState([
    {
      image: munch,
      title: "Munch",
      descr:
        "Capstone project designed and developed over the course of 2 weeks. Munch is the perfect app to help you randomly select a restaurant that meets your preferences.",
      techStack: "React Native, Google Maps API, Yelp Fusion API",
    },
    {
      image: instock,
      title: "InStock",
      descr:
        "Collaborative single-sprint project. InStock is a web app that tracks warehouse inventory.",
      techStack: "React, SASS, Node.js, JIRA",
    },
    {
      image: brainflix,
      title: "Brainflix",
      descr:
        "Single page application (SPA) completed over 3 weeks; operates similar to YouTube. ",
      techStack: "React, SASS, Node.js, Express",
    },
  ]);

  return (
    <section id="projects">
      <div className="projects__container">
        <h1 className="projects__header">projects</h1>
        <div className="projects__box">
          {projects.map((proj) => {
            return (
              <div className="projects__item">
                <div>
                  <ScrollAnimation animateIn="flipInX" delay={300} animateOnce={true}>
                    <img
                      className="projects__image"
                      src={proj.image}
                      alt={proj.title}
                    />
                  </ScrollAnimation>
                </div>
                <div className="projects__descr">
                  <h2 className="projects__title">{proj.title}</h2>
                  <p className="projects__text">{proj.descr}</p>
                  <h3 className="projects__ts-header">tech stack / tools</h3>
                  <p className="projects__stack">{proj.techStack}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Contact className="projects__contact" />
      </div>
    </section>
  );
};

export default Projects;
