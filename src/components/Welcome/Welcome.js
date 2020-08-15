import React, { useState } from "react";
import "./Welcome.scss";
import Typing from "react-typing-animation";
import Contact from "../Contact/Contact";

const Welcome = () => {
  const [msg] = useState([
    "Hello, there!",
    "How's it going?",
    "Welcome!",
  ]);

  return (
    <section id="home">
      <div className="welcome__laptop">
        <Typing loop={true} speed={60}>
          <span className="welcome__msg">{msg[0]}</span>
          <Typing.Backspace count={msg[0].length} delay={2500} />
          <span className="welcome__msg">{msg[1]}</span>
          <Typing.Backspace count={msg[1].length} delay={2500} />
          <span className="welcome__msg">{msg[2]}</span>
          <Typing.Backspace count={msg[2].length} delay={2500} />
          <Typing.Reset delay={2500} />
        </Typing>
      </div>
      <Contact />
    </section>
  );
};

export default Welcome;
