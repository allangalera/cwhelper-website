import React, { Component } from 'react'
import axios from 'axios'
import EquipCard from './EquipCard'
import loadingIcon from '../assets/loading.svg'
// import { Link } from 'react-router-dom';
// import cardIcon from '../assets/card_black.svg'
// import listIcon from '../assets/list_black.svg'
// import uuidv4 from 'uuid/v4';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Equips extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textToCopy: null,
      swords: true,
      items: null,
      gold: 0,
    }
    this.copyBuyCommand = this.copyBuyCommand.bind(this)
    this.handeGold = this.handeGold.bind(this)
  }

  componentDidMount() {
    axios.get('https://cwhelperapi.allangalera.com/items')
      .then((res) => {
        let data = res.data.reduce(function(groups, item) {
            var val = item['subtype'];
            groups[val] = groups[val] || [];
            groups[val].push(item);
            return groups;
          }, {});
        this.setState({
          items: data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
  handeGold(event) {
    let gold = ''
    if (!isNaN(parseInt(event.target.value, 10))) {
      gold = parseInt(event.target.value, 10)
    }
    this.setState({
      gold: gold
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
    if (this.state.items !== null) {
      cards = Object.keys(this.state.items).map((item) => {
        return (
          <EquipCard key={item} title={item} data={this.state.items[item]} copyBuyCommand={this.copyBuyCommand} gold={this.state.gold} />
        )
      })
    }
    return(
      <div id="main-equips-cards">
        {this.state.textToCopy !== null &&
          <textarea id="element-to-be-copied" defaultValue={this.state.textToCopy}></textarea>
        }
        <h1 className="title">Equipments</h1>
        <input
          className="main-equips-cards-input"
          value={this.state.gold}
          onChange={this.handeGold}
        />
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
export default Equips
