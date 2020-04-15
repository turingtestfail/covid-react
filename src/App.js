import React, { Component } from 'react';
import States from './components/states';
import Tests from './components/tests';
import Positives from './components/percentPositive';

class App extends Component {
  state = {
    states: [],
    tests: [],
    daily: []
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
  }
  render () {
    return (
      <div>
        <Tests tests={this.state.tests} />
        <Positives positives={this.state.daily} />
        <States states={this.state.states} />
      </div>
    );
  }
}

export default App;
