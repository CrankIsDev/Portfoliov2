import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header.js';
import Cursor from './components/cursor/Cursor.js';
import Project from './components/project/Project.js';

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
