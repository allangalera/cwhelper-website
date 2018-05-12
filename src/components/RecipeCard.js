import React, { Component } from 'react'
// assets
import moneyBag from '../assets/money-bag.svg';

class RecipeCard extends Component {
  render() {
    const materials = this.props.data.materials.map((material) => {
      return (
        <tr key={material.resource.id} onClick={() => {this.props.copyBuyCommand(material.resource.command)}}>
          <td>{material.resource.name}</td>
          <td>{material.quantity}</td>
        </tr>
      )
    })
    return(
    <div className="card">
      <h4 className="card-title">{this.props.data.name.charAt(0).toUpperCase() + this.props.data.name.slice(1)} ({this.props.data.cost} <img src={moneyBag} alt="gold icon" />)</h4>
      <div className="card-content">
        <table className="card-table">
          <tbody className="card-table-body">
            {materials}
          </tbody>
        </table>
      </div>
    </div>
    )
  }
}

export default RecipeCard
