import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <div className="header">
            <div className="brand">
                <h3 className="app-title">JEMD</h3>
            </div>
            <ul className="nav-list right">
                <li className="nav-listItem active-nav-item">Dictionary</li>
                <li className="nav-listItem">Test</li>
                <li className="nav-listItem">Login</li>
            </ul>
        </div>
    );
  }
}

export default Header;
