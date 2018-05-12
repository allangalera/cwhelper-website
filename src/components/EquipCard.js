import React, { Component } from 'react'
// FILES
import attack from '../assets/attack.svg';
import defense from '../assets/defense.svg';
import moneyBag from '../assets/money-bag.svg';
import redBookIcon from '../assets/notebook.svg';

class EquipCard extends Component {
  render() {
    const items = this.props.data.map((item) => {
      let sellingPrice = item.price * 0.3
      let redBook = null;
      if (item.redbook) {
        redBook = <img src={redBookIcon} className="" alt="red book symbol" />
      }
      return (
        <tr key={item.id} className={this.props.gold >= item.price ? 'can-buy' : ''}>
          <td onClick={() => this.props.copyBuyCommand(item.command)}>
            { item.name } { redBook }
          </td>
          <td>{ item.attack } <img src={attack} className="" alt="attack symbol" /></td>
          <td>{ item.defense } <img src={defense} className="" alt="defense symbol" /></td>
          <td>{ item.price } <img src={moneyBag} className="" alt="gold bag symbol" /></td>
          <td>{ parseInt(sellingPrice, 10) }<span className="selling-loss">{ (sellingPrice % 1).toFixed(1).toString().substring(1) }</span></td>
        </tr>
      )
    })
    return(
    <div className="card">
      <h4 className="card-title">{this.props.title.charAt(0).toUpperCase() + this.props.title.slice(1)}</h4>
      <div className="card-content">
        <table className="card-table">
          <tbody className="card-table-body">
            {items}
          </tbody>
        </table>
      </div>
    </div>
    )
  }
}

export default EquipCard
