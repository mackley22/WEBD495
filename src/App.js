import React, { Component } from 'react';
import logo from './logo.svg';
import { Container } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="top">Lugnut's Auto Glass Company</h2>
        <nav>
          <ul class ="nav navbar-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Cart</a></li>
          </ul>
        </nav>
        <h3 className="status">UNDER CONSTRUCTION</h3>
      </div>
    );
  }
}

export default App;