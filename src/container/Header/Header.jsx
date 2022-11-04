import React from "react";
import { motion } from "framer-motion";

import "./Header.scss";
import { AppWrap } from "../../wrapper";

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div 
        whileInView={{ x: [-100, 0], opacity: [0, 1]}}
        transition={{ duration: 0.5 }}
        className="app__header-info"
        style={{ opacity: 0}}
      >
        <p className="font-secondary app__header-p">
          Hi, my name is
        </p>
        <h1 className="app__header-h1">
          <span>Kuba Skupinski </span>
          <br/>
          <span>I build things for the web.</span>
        </h1>
        <p className="app__header-desc">
          I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
        </p>

        <div className="app__flex app__header-button-container">
          <button className="button--primary">
            Check my Work
          </button>

          <button className="button--secondary">
            Contact me
          </button>
        </div>`

      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');
