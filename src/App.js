import React from "react";
import { render } from "react-dom";
import bottomImg from "./images/bottomImage.jpg";
import github from "./images/githubLogo.png";
import LILogo from "./images/linkedInLogo.png";
import emailIcon from "./images/emailicon.png";

import Heading from "./Heading";
import Tabs from "./Tabs";
import TabContent from "./TabContent";
require("./styles.css");

function App() {
  return (
    <div id="mainDiv">
      <Heading>welcome</Heading>
      <Tabs>
        <div label="about">
          <TabContent>
            Hi! I'm <b>Eliza</b>.
            <br />
            <br />I am a <b>product manager</b> with a background in software
            engineering.
            <br />I currently live in <b>San Francisco</b>, but my heart is at
            home in <b>New Zealand</b>.
            <br />
            I love raising products, as they grow from an idea into reality.
            <img id="bottomImage" alt="bg" src={bottomImg} />
          </TabContent>
        </div>
        <div label="links">
          <TabContent>
            Click any of the links below to be directed to my profile:
            <br />
            <br />
            <a href="https://github.com/unit02">
              <img alt="Github logo" class="link-logo" src={github} />
            </a>
            <a href="https://www.linkedin.com/in/elizabeth-orchard-4208079b/">
              <img alt="Linked in logo" class="link-logo" src={LILogo} />
            </a>
            {/* <img alt="github logo" src={github} /> */}
          </TabContent>
        </div>
        <div label="contact">
          <TabContent>
            Send me an email:
            <br />
            <a href="mailto:elizaorchard+website@gmail.com">
              <img alt="Email Icon" class="link-logo" src={emailIcon} />
            </a>
          </TabContent>
        </div>
      </Tabs>
    </div>
  );
}

const container = document.createElement("div");
document.body.appendChild(container);
render(<App />, container);
