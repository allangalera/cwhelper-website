import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import About from './About'

const Main = () => (
  <main  id="main">
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route exact path='/about' component={About}/>
    </Switch>
  </main>
)

export default Main
