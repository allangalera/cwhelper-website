import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// assets
import dashboardIcon from '../assets/dashboard.svg';
import aboutIcon from '../assets/about.svg';
import closeSideMenuIcon from '../assets/close_white.svg';

class SideMenu extends Component {
  render() {
    return (
      <div id="sidemenu" className={this.props.sideMenuState === true ? 'open' : 'closed'}>
        <h1>Menu</h1>
        <button className="close-menu-btn " onClick={this.props.closeSideMenu}>
          <img className="close-menu-icon" src={closeSideMenuIcon} alt="close sidemenu icon" />
        </button>
        <Link to="/" className="sidemenu-link">
          <img className="sidemenu-icon" src={dashboardIcon} alt="dashboard sidemenu icon" />
          <p className="sidemenu-text" >Dashboard</p>
        </Link>
        <Link to="/about" className="sidemenu-link">
          <img className="sidemenu-icon" src={aboutIcon} alt="about sidemenu icon" />
          <p className="sidemenu-text" >About</p>
        </Link>
      </div>
    )
  }
}



export default SideMenu
