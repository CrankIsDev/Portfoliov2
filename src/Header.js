import React, { Component } from 'react';
import './Header.css';
import Paint from './Paint.js';

class Header extends Component {
  render() {
    return (
      <div className="page">
      <div className="mixed"></div>
      <div className="seal">
        <div className="blackColor"></div>
        <div className="nameColor">BlackColor</div>
        <div className="lid"></div>
      </div>
      <Paint />
        <header className="hero">
         <h1><span>S</span><span>t</span><span>a</span><span>n</span></h1>
          <p>
             <span className="h">Based near Paris</span>
             <span className="h">Junior Front-End Developer</span>
          </p>
        </header>
      </div>
    );
  }
}
  
export default Header;