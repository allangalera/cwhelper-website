import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// assets
import dashboardIcon from '../assets/dashboard.svg';
import equipmentsIcon from '../assets/equipments.svg';
import aboutIcon from '../assets/about.svg';
import closeSideMenuIcon from '../assets/close_white.svg';
import resourcesIcon from '../assets/resources_white.svg';
import recipesIcon from '../assets/recipes_white.svg';

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
        <Link to="/equips" className="sidemenu-link">
          <img className="sidemenu-icon" src={equipmentsIcon} alt="equipment list sidemenu icon" />
          <p className="sidemenu-text" >Equipments</p>
        </Link>
        <Link to="/resources" className="sidemenu-link">
          <img className="sidemenu-icon" src={resourcesIcon} alt="resources list sidemenu icon" />
          <p className="sidemenu-text" >Resources</p>
        </Link>
        <Link to="/recipes" className="sidemenu-link">
          <img className="sidemenu-icon" src={recipesIcon} alt="recipes list sidemenu icon" />
          <p className="sidemenu-text" >Recipes</p>
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
