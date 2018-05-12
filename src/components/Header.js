import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Info from './Info'
import logoIcon from '../assets/cwicon.jpg';
import sakuraIcon from '../assets/sakura.svg';
import menuIcon from '../assets/menu.svg';

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="menu-mobile">
          <button className="menu-button" onClick={this.props.openSideMenu}>
            <img src={menuIcon} alt="menu icon" />
          </button>
        </div>
        <Link to="/" className="wrapper">
          <div className="wrapper-cell">
            <img className="sakura-1" src={sakuraIcon} alt="sakura fall" />
            <img className="sakura-2" src={sakuraIcon} alt="sakura fall" />
            <img className="sakura-3" src={sakuraIcon} alt="sakura fall" />
            <img className="sakura-4" src={sakuraIcon} alt="sakura fall" />
            <img className="cwlogo" src={logoIcon} alt="Logo Chat Wars" />
          </div>
          <div className="wrapper-cell">
            <p className="site-title">Chat Wars helper</p>
          </div>
        </Link>
        <Info />
      </header>
    )
  }
}

export default Header
