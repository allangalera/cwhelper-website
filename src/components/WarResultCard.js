import React, { Component } from 'react'
// assets
import moneyBag from '../assets/money-bag.svg';
import stockBag from '../assets/box.svg';

class WarResultCard extends Component {
  render() {
    const table = this.props.data.map((item, index) => {
      let goldLine = null;
      let stockLine = null;
      if (item.gold < 0) {
        goldLine = <td><span className="baaad">{item.gold} <img src={moneyBag} className="" alt="gold bag symbol" /></span></td>
      } else {
        goldLine = <td>{item.gold} <img src={moneyBag} className="" alt="gold bag symbol" /></td>
      }
      if (item.stock < 0) {
        stockLine = <td><span className="baaad">{item.stock} <img src={stockBag} className="" alt="stock symbol" /></span></td>
      } else {
        stockLine = <td>{item.stock} <img src={stockBag} className="" alt="stock symbol" /></td>
      }
      return (
        <tr key={index}>
          <td>{ item.castle.charAt(0).toUpperCase() + item.castle.slice(1) } Castle</td>
          <td>+{ item.score }</td>
          {goldLine}
          {stockLine}
        </tr>
      )
    })
    return(
    <div className="card">
      <div className="card-title">
        <button onClick={this.props.goBackWarResult}>{'<'}</button>
        <p style={{display: 'inline-block', margin: 0}}>{ this.props.title.charAt(0).toUpperCase() + this.props.title.slice(1) }</p>
        <button onClick={this.props.goForwardWarResult}>{'>'}</button>
      </div>
      <div className="card-content">
        <table className="card-table war-result">
          <tbody className="card-table-body">
            {table}
          </tbody>
        </table>
      </div>
    </div>
    )
  }
}

export default WarResultCard
