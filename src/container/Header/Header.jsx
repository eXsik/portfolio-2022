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
          I'm a web developer and graphic designer. I specialize in designing and coding websites, mobile apps and web apps. I'm focused on building accessible, modern, beautiful and fast products.
        </p>

        <div className="app__flex app__header-button-container">
          <a className="button button--primary" href="#skills">
            Check my Work
          </a>

          <a className="button button--secondary" href="#contact">
            Contact me
          </a>
        </div>`

      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');
