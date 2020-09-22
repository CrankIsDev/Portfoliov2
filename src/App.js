import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Cursor from './Cursor.js';

class App extends Component {
  
  render() {
    return (
      <div>
        <Cursor />
        <Header />
      </div>
    );
  }
}
  
export default App;
