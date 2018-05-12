import React, { Component } from 'react'

class WorldTopCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      reference: 0,
    }
    this.changeReference = this.changeReference.bind(this)
  }
  changeReference(reference = 0) {
    let result = this.props.data.map((item, index) => {
      return [
        item.castle.charAt(0).toUpperCase() + item.castle.slice(1),
        item.score,
        item.score - this.props.data[reference].score
      ]
    })
    this.setState({
      data: result,
      reference: reference,
    })
  }
  componentDidMount() {
    this.changeReference()
  }
  render() {
    let table = null
    if (this.state.data !== null) {
      table = this.state.data.map((item, index) => {
        let diff = <td></td>;
        if (item[2] < 0) {
          diff = <td>(<span className="baaad">{ item[2] }</span>)</td>
        } else if (item[2] > 0) {
          diff = <td>(<span className="goooood">{ item[2] }</span>)</td>
        }
        return (
          <tr
            key={index}
            className={this.state.reference === index ? 'selected' : ''}
            onClick={() => this.changeReference(index)}
          >
            <td>#{ index+1 }</td>
            <td>{ item[0] } Castle</td>
            <td>{ item[1] }</td>
            { diff }
          </tr>
        )
      })
    }
    return(
    <div className="card">
      <h4 className="card-title">{ this.props.title.charAt(0).toUpperCase() + this.props.title.slice(1) }</h4>
      <div className="card-content">
        <table className="card-table">
          <tbody className="card-table-body">
            {table}
          </tbody>
        </table>
      </div>
    </div>
    )
  }
}

export default WorldTopCard
