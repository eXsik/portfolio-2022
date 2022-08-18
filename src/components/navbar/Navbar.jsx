import React, {Component} from 'react';
import { images } from "../../constants";
import  './Navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <nav className="app__navbar">
        <div className="app__navbar-logo">
            <img src={images.logo} alt="logo" />
        </div>
        <ul className="app__navbar-links">
          {['home', 'about', 'work', 'skills', 'contact'].map(item => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div>
                <a href={`#${item}`}>{item}</a>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
