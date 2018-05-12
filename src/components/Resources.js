import React, { Component } from 'react'
import axios from 'axios'
// assets
import loadingIcon from '../assets/loading.svg'


class Resources extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textToCopy: null,
      resources: null,
    }
    this.copyBuyCommand = this.copyBuyCommand.bind(this)
  }

  componentDidMount() {
    axios.get('https://cwhelperapi.allangalera.com/resources')
      .then((res) => {
        this.setState({
          resources: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
  copyBuyCommand(command) {
    if (command === null) {
      return false
    }
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
    let resources = [];
    if (this.state.resources !== null) {
      resources = this.state.resources.map((resource) => {
        return(
          <tr key={resource.id} onClick={() => this.copyBuyCommand(resource.command)}>
            <td>{resource.name}</td>
          </tr>
        )
      })
    }
    return(
      <div id="main-equips-cards">
        {this.state.textToCopy !== null &&
          <textarea id="element-to-be-copied" defaultValue={this.state.textToCopy}></textarea>
        }
        <h1 className="title">Resources</h1>
        <div className={ 'main-equips-cards-content' + (this.state.items === null ? ' loading' : '')}>
          { this.state.resources === null &&
            <img src={loadingIcon} className="App-logo" alt="logo" />
          }
          { this.state.resources !== null &&
            <div className="card">
              <h4 className="card-title">List</h4>
              <div className="card-content">
                <table className="card-table">
                  <tbody className="card-table-body resources-table">
                    {resources}
                  </tbody>
                </table>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}
export default Resources
