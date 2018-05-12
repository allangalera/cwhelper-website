import React, { Component } from 'react'
import axios from 'axios'
// Components
import RecipeCard from './RecipeCard'
// assets
import loadingIcon from '../assets/loading.svg'


class Recipes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textToCopy: null,
      recipes: null,
    }
    this.copyBuyCommand = this.copyBuyCommand.bind(this)
  }

  componentDidMount() {
    axios.get('https://cwhelperapi.allangalera.com/recipes')
      .then((res) => {
        this.setState({
          recipes: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
  copyBuyCommand(command) {
    this.setState({
      textToCopy: command,
    }, () => {
      let copyTextarea = document.getElementById('element-to-be-copied')
      copyTextarea.select();
      try {
        document.execCommand('copy');
      } catch (err) {
      }
      this.setState({
        textToCopy: null,
      })
    })
  }
  render() {
    let cards = [];
    if (this.state.recipes !== null) {
      cards = this.state.recipes.map((recipe) => {
        return (
          <RecipeCard key={recipe.id} copyBuyCommand={this.copyBuyCommand} data={recipe} />
        )
      })
    }
    return(
      <div id="main-equips-cards">
        {this.state.textToCopy !== null &&
          <textarea id="element-to-be-copied" defaultValue={this.state.textToCopy}></textarea>
        }
        <h1 className="title">Recipes</h1>
        <div className={ 'main-equips-cards-content' + (this.state.items === null ? ' loading' : '')}>
          { this.state.items === null &&
            <img src={loadingIcon} className="App-logo" alt="logo" />
          }
          {cards}
        </div>
      </div>
    )
  }
}
export default Recipes
