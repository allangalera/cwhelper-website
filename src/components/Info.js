import React, { Component } from 'react'
import moment from 'moment'
// assets
import morningIcon from '../assets/morning.svg'
import dayIcon from '../assets/day.svg'
import eveningIcon from '../assets/evening.svg'
import nightIcon from '../assets/night.svg'

class Info extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nextBattleTimer: null,
      dayTime: null,
    }
    this.getNewTimeInfo = this.getNewTimeInfo.bind(this)
    setInterval(() => {
      this.getNewTimeInfo()
    }, 1000)
  }
  getNewTimeInfo() {
    let currentDate = moment.utc()
    let targetDate = currentDate
    let nowHours = currentDate.hour()
    if (nowHours < 7) {
      targetDate = moment.utc().hour(7).minute(0).second(0)
    } else if (nowHours < 15) {
      targetDate = moment.utc().hour(15).minute(0).second(0)
    } else if (nowHours < 23) {
      targetDate = moment.utc().hour(23).minute(0).second(0)
    } else {
      targetDate = moment.utc().add(1, 'd').hour(7).minute(0).second(0)
    }

    let diffDate = moment.utc(targetDate.diff(currentDate))
    let dayTime = null
    if (nowHours < 1) {
      dayTime = 1;
    } else if ((nowHours >= 1 && nowHours < 3) || (nowHours >= 9 && nowHours < 11) || (nowHours >= 17 && nowHours < 19)) {
      dayTime = 2;
    } else if ((nowHours >= 3 && nowHours < 5) || (nowHours >= 11 && nowHours < 13) || (nowHours >= 19 && nowHours < 21)) {
      dayTime = 3;
    } else if ((nowHours >= 5 && nowHours < 7) || (nowHours >= 13 && nowHours < 15) || (nowHours >= 21 && nowHours < 23)) {
      dayTime = 4;
    } else {
      dayTime = 1;
    }
    this.setState({
      nextBattleTimer: diffDate.format('HH:mm:ss'),
      dayTime: dayTime,
    });
  }
  render() {
    let battleTime = null
    let dayTime = null
    let dayTimeText = null
    let dayTimeState = this.state.dayTime
    if (dayTimeState === null) {
      dayTimeText = '-'
      dayTime = <p>-</p>
    } else if (dayTimeState === 1) {
      dayTimeText = 'Morning'
      dayTime = <img className="daytime-icon" src={morningIcon} alt="morning icon"/>
    } else if (dayTimeState === 2) {
      dayTimeText = 'Day'
      dayTime = <img className="daytime-icon" src={dayIcon} alt="day icon"/>
    } else if (dayTimeState === 3) {
      dayTimeText = 'Evening'
      dayTime = <img className="daytime-icon" src={eveningIcon} alt="evening icon"/>
    } else {
      dayTimeText = 'Night'
      dayTime = <img className="daytime-icon" src={nightIcon} alt="night icon"/>
    }
    if (this.state.nextBattleTimer === null) {
      battleTime = <p>-</p>
    } else {
      battleTime = <p>{this.state.nextBattleTimer}</p>
    }
    return (
      <div className="info-panel">
        <div className="next-war-time">
          <p className="title">Next War</p>
          {battleTime}
        </div>
        <div className="daytime">
          <p className="title">{dayTimeText}</p>
          {dayTime}
        </div>
      </div>
    )
  }
}

export default Info
