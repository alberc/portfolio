import React from "react";
import useDarkMode from "use-dark-mode";
import Typewriter from "typewriter-effect";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Icon from "./Icon";
import Toggle from "./Toggle";
import "./App.css";

function App() {
  const darkMode = useDarkMode(false);

  return (
    <main className="main">
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <div className="intro">¡Hola, soy Alberto Caro!</div>
      <div className="tagline">
        <Typewriter
          options={{
            strings: "Full stack dev | React dev | Node dev",
            autoStart: true,
            delay: 60,
            loop: false,
          }}
        />
      </div>

      <div className="icons-social">
        <Icon icon={faTwitter} url="https://twitter.com/alberc_" />
        <Icon icon={faGithub} url="https://github.com/alberc" />
        <Icon icon={faLinkedin} url="https://linkedin.com/in/alberc/" />
        <Icon icon={faEnvelope} url="mailto:albertocarogallego@gmail.com" />
      </div>
    </main>
  );
}

export default App;
