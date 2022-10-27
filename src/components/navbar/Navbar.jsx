import React, { useState } from "react";
import { images } from "../../constants";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from 'react-icons/hi'; 
import { motion } from 'framer-motion'; 

export default function Navbar() {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={images.logo} alt="logo" />
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
                whileInView={{ x: [300, 0] }}
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
