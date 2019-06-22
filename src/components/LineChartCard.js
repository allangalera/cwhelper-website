import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts'

class LineChartCard extends Component {
  render() {
    return(
      <div className="card full" style={{width: 100 + '%'}}>
        <h4 className="card-title">{this.props.title}</h4>
        <p className="card-sub-title">Last 42 battles</p>
        <div className="card-content">
        <ReactHighcharts
          config={this.props.data}
        >
        </ReactHighcharts>
        </div>
      </div>
    )
  }
}

export default LineChartCard
