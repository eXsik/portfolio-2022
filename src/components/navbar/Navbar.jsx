import React, { useState } from "react";
import { images } from "../../constants";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from 'react-icons/hi'; 
import { motion } from 'framer-motion'; 

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 200 ) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener('scroll', changeColor);

  return (
    <nav className={ color ? 'app__navbar app__navbar-bg' : 'app__navbar'}>
        <div className="app__navbar-logo">
          <img src={images.qbaLogoWhite} alt="logo" />
        </div>
        <ul className="app__navbar-links">
          {["home", "about", "work", "skills", "contact"].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div></div>
              <a href={`#${item}`} title={item}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)}></HiMenuAlt4>

          {toggle && (
              <motion.div
                whileInView={{ x: [300, 0], opacity: [0, 1] }}
                transition={{duration: 0.85, ease: "easeOut" }} 
              >
                <HiX onClick={() => setToggle(false)}></HiX>
                <ul>

                  {["home", "about", "work", "skills", "contact"].map((item) => (
                    <li key={item}>
                      <a href={`#${item}`} title={item} onClick={() => setToggle(false)}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
          )}
        </div>
      </nav>
  )
}
