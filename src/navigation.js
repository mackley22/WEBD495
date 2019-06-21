import React, { Component } from 'react';
import './navigation.css';


/*instead of writing out the href links this function goes through the sections like an array, any section name can be changed at any time and will immediately be updated on the website*/
class Navigation extends Component {
  render() {
      const sections = ['Home', 'About Us', 'Products', 'Contact Us', 'Cart']
      const navLinks = sections.map( section => {
          return (
              <li><a href ={'#' + section}>{section}</a></li>
          )
      });
    return (
        <nav>
        <h2 className="logo">{this.props.logoTitle}</h2>
            <ul>
                {navLinks}
            </ul>
        </nav>
    );
  }
}

export default Navigation;