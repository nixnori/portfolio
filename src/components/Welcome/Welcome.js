import React, { useState } from "react";
import "./Welcome.scss";
import Typing from "react-typing-animation";

const Welcome = () => {
  const [msg, setMsg] = useState([
    "Hi, I'm Nikki.",
    "I'm a web developer.",
    "Welcome to my page!",
  ]);

  return (
    <div className="welcome">
      <div className="welcome__laptop">
        <Typing loop={true} speed={60}>
          <span className="welcome__msg">{msg[0]}</span>
          <Typing.Backspace count={msg[0].length} delay={2000} />
          <span className="welcome__msg">{msg[1]}</span>
          <Typing.Backspace count={msg[1].length} delay={2000} />
          <span className="welcome__msg">{msg[2]}</span>
          <Typing.Backspace count={msg[2].length} delay={3000} />
          <Typing.Reset delay={3000} />
        </Typing>
      </div>
    </div>
  );
};

export default Welcome;
