import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Cursor from './Cursor.js';
import Project from './Project.js';

class App extends Component {
  
  render() {
    return (
      <div>
        <Cursor />
        <Header />
        <Project />
      </div>
    );
  }
}
  
export default App;
