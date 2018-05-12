import React, { Component } from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import Main from './Main';
import { withRouter } from 'react-router-dom';
import './App.css';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-100560151-2');

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sideMenuState: false,
      currentLocation: this.props.location,
    }
    this.openSideMenu = this.openSideMenu.bind(this)
    this.closeSideMenu = this.closeSideMenu.bind(this)
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  openSideMenu(newState) {
    this.setState({
      sideMenuState: true,
      currentLocation: this.props.location,
    })
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      ReactGA.pageview(window.location.pathname + window.location.search);
      if (this.state.sideMenuState === true) {
        this.closeSideMenu()
      }
    }
  }
  closeSideMenu(newState) {
    this.setState({
      sideMenuState: false,
      currentLocation: this.props.location,
    })
  }
  render() {
    return (
      <div id="app">
        <Header openSideMenu={this.openSideMenu}/>
        <SideMenu sideMenuState={this.state.sideMenuState} closeSideMenu={this.closeSideMenu}/>
        <Main />
      </div>
    )
  }
}

export default withRouter(App)
