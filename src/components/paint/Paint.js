import React, { Component } from 'react';
import './Paint.css';

class Paint extends Component {
  render() {
    return (
      <div className="container">
      <div className="mixed"></div>
          <div className="paint">
            <div className="splash"></div>
          </div>
          <div className="roller">
          <div className="roll"></div>
          <div className="handle"></div>
          <div className="grip"></div>
        </div>
      </div>
    );
  }
}
  
export default Paint;