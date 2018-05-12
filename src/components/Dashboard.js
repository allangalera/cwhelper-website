// Libraries
import React, { Component } from 'react'
import axios from 'axios'

// Components
import WorldTopCard from './WorldTopCard'
import WarResultCard from './WarResultCard'
import LineChartCard from './LineChartCard'

// Assets
import loadingIcon from '../assets/loading.svg'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anythingLoaded: false,
      ranking: null,
      warResult: null,
      warResultSkip: 0,
      cumulativeScore: null,
    }
    this.getLastBattle = this.getLastBattle.bind(this)
    this.goBackWarResult = this.goBackWarResult.bind(this)
    this.goForwardWarResult = this.goForwardWarResult.bind(this)
  }
  componentDidMount() {
    axios.get('https://cwhelperapi.allangalera.com/worldtop')
    .then((res) => {
      this.setState({
        anythingLoaded: true,
        ranking: res.data,
      })
    })
    .catch((err) => {
      console.log(err);
    })
    this.getLastBattle()
    axios.get('https://cwhelperapi.allangalera.com/lastbattle')
    .then((res) => {
      this.setState({
        anythingLoaded: true,
        warResult: res.data,
      })
    })
    .catch((err) => {
      console.log(err);
    })
    axios.get('https://cwhelperapi.allangalera.com/battles/cumulativescore/42')
    .then((res) => {
      let chartData ={
        title: null,
        xAxis: {
          categories: [],
          title: {
              text: null
          },
          labels: {
            //You can format the label according to your need
            format: '{value:%e %b %Y}'
          },
        },
        series: [
          {
            name: 'Deerhorn Castle',
            data: []
          },
          {
            name: 'Sharkteeth Castle',
            data: []
          },
          {
            name: 'Highnest Castle',
            data: []
          },
          {
            name: 'Dragonscale Castle',
            data: []
          },
          {
            name: 'Potato Castle',
            data: []
          },
          {
            name: 'Wolfpack Castle',
            data: []
          },
          {
            name: 'Moonlight Castle',
            data: []
          }
        ],
        tooltip: {
            shared: true,
            crosshairs: true
        },
        plotOptions: {
          series: {
            animation: false
          }
        }
      };
      for (let index in res.data) {
        chartData['xAxis']['categories'].push(new Date(res.data[index]['message_date']))
        // console.log(typeof(res.data[index]['message_date']))
        // chartData['labels'].push('')
        chartData['series'][0]['data'].push(res.data[index]['deerhorn'])
        chartData['series'][1]['data'].push(res.data[index]['sharkteeth'])
        chartData['series'][2]['data'].push(res.data[index]['highnest'])
        chartData['series'][3]['data'].push(res.data[index]['dragonscale'])
        chartData['series'][4]['data'].push(res.data[index]['potato'])
        chartData['series'][5]['data'].push(res.data[index]['wolfpack'])
        chartData['series'][6]['data'].push(res.data[index]['moonlight'])
      }
      this.setState({
        anythingLoaded: true,
        cumulativeScore: chartData,
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }
  goBackWarResult() {
    this.setState({
      warResultSkip: this.state.warResultSkip + 1
    }, () => {
      console.log(this.state.warResultSkip)
      this.getLastBattle()
    })
  }
  goForwardWarResult() {
    if (this.state.warResultSkip > 0) {
      this.setState({
        warResultSkip: this.state.warResultSkip - 1
      }, () => {
        console.log(this.state.warResultSkip)
        this.getLastBattle()
      })
    }
  }
  getLastBattle() {
    axios.get('https://cwhelperapi.allangalera.com/lastbattle/skip/' + this.state.warResultSkip)
    .then((res) => {
      this.setState({
        anythingLoaded: true,
        warResult: res.data,
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }
  render() {
    let rankingLeaderboard = null;
    let warResult = null;
    let cumulativeScoreChart = null;
    if (this.state.ranking !== null) {
      rankingLeaderboard = <WorldTopCard title="Ranking" data={this.state.ranking}/>
    }
    if (this.state.warResult !== null) {
      warResult = <WarResultCard title="War Results" data={this.state.warResult} goBackWarResult={this.goBackWarResult} goForwardWarResult={this.goForwardWarResult}/>
    }
    if (this.state.cumulativeScore !== null) {
      cumulativeScoreChart = <LineChartCard title="Cumulative Score History" data={this.state.cumulativeScore} />
    }
    return(
      <div id="main-dashboard">
        <h1 className="title">Dashboard</h1>
        <div className={ 'main-dashboard-content' + (!this.state.anythingLoaded ? ' loading' : '')}>
          { !this.state.anythingLoaded  &&
            <img src={loadingIcon} className="App-logo" alt="logo" />
          }
          { rankingLeaderboard }
          { warResult }
          { cumulativeScoreChart }
        </div>
      </div>
    )
  }
}


export default Dashboard
