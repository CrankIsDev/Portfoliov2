import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="page">
        <header className="hero">
         <h1 className="h">Stan</h1>
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