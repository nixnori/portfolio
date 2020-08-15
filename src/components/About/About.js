import React, { useState } from "react";
import "./About.scss";
import html from "../../assets/images/html.svg";
import css from "../../assets/images/css.svg";
import js from "../../assets/images/javascript.svg";
import sass from "../../assets/images/sass.svg";
import reactJs from "../../assets/images/react.svg";
import node from "../../assets/images/node.svg";
import express from "../../assets/images/express.svg";
import git from "../../assets/images/git.svg";
import Contact from "../Contact/Contact";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  const [tools1] = useState([
    { image: html, text: "html" },
    { image: css, text: "css" },
    { image: js, text: "js" },
    { image: sass, text: "sass" },
  ]);
  const [tools2] = useState([
    { image: reactJs, text: "reactJs" },
    { image: node, text: "node" },
    { image: express, text: "express" },
    { image: git, text: "git" },
  ]);

  return (
    <section id="about">
      <div className="about__container about">
        <ScrollAnimation animateIn="bounceInDown">
          <h1 className="about__header">about</h1>
          <div className="about__text">
            <h4>
              Psych grad. Former Cheerleader. Likes dogs. Kinda funny. Online
              Bob the Builder.
            </h4>
            <p>
              Hi, nice to meet you! My name is <span>Nikki</span> and I'm a{" "}
              <span>web developer</span> based in Toronto.
            </p>
            <p>
              I enjoy collaborating with people in creating solutions that focus
              on <span>user experience</span> and making the web a beautiful
              place. Currently, I'm studying UX design principles to complement
              my web development skills.
            </p>
            <p className="about__last-par">
              If you'd like to learn more about me or my work, feel free to{" "}
              shoot me a message via <span>LinkedIn</span> or send me an <span>email.</span>
            </p>
            <h4>
              Stay safe and don't forget to wash your hands!{" "}
              <span className="about__emoji">😊</span>
            </h4>
          </div>
        </ScrollAnimation>
      </div>
      <div className="about__container">
        <ScrollAnimation animateIn="bounceInRight" delay={900}>
          <h1 className="about__header header2">tools</h1>
          <div className="about__stack">
            <div className="about__tools">
              {tools1.map((tool) => {
                return (
                  <img
                    src={tool.image}
                    className="about__icon"
                    alt={tool.text}
                  ></img>
                );
              })}
            </div>
            <div className="about__tools">
              {tools2.map((tool) => {
                return (
                  <img
                    src={tool.image}
                    className="about__icon"
                    alt={tool.text}
                  ></img>
                );
              })}
            </div>
          </div>
          <div className="about__contact">
            <h1 className="about__contact--header">contact me:</h1>
            <Contact className="about__contact-links" />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default About;
