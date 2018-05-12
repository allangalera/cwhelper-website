import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import About from './About'
import Equips from './Equips'
import Resources from './Resources'
import Recipes from './Recipes'

const Main = () => (
  <main  id="main">
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route exact path='/about' component={About}/>
      <Route path='/equips' component={Equips}/>
      <Route path='/resources' component={Resources}/>
      <Route path='/recipes' component={Recipes}/>
    </Switch>
  </main>
)

export default Main
