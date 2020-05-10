import React, { Component } from 'react';
import States from './components/states';
import Tests from './components/tests';
import Positives from './components/percentPositive';
import Daily from './components/dailyPercentPositive';


class App extends Component {

  state = {
    states: [],
    tests: [],
    daily: [],
    current: [],
    selectedValue: ["MD", "VA","DC"],
    options: [ "AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY" ]

  }
  handler = (val) => {
    this.setState({
      selectedValue: val
    })
  }
  componentDidMount() {
    fetch('https://covidtracking.com/api/states')
    .then(res => res.json())
    .then((data) => {
      this.setState({ states: data, tests: data })
    })
    .catch(console.log)

    fetch('https://covidtracking.com/api/v1/states/daily.json')
    .then(res => res.json())
    .then((data) => {
      this.setState({ daily: data })
    })
    .catch(console.log)

    fetch('https://covidtracking.com/api/v1/states/current.json')
    .then(res => res.json())
    .then((data) => {
      this.setState({ current: data })
    })
    .catch(console.log)
  }
  render () {
    return (
      <div>
        <Tests tests={this.state.tests} />
        <Daily daily={this.state.current} />
        <Positives positives={this.state.daily} stateAbbrev={this.state.selectedValue} options={this.state.options} handler = {this.handler}/>
        <States states={this.state.states} />
      </div>
    );
  }
}

export default App;
