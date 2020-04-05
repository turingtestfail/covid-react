import React, { Component } from 'react';
import States from './components/states';
import Deaths from './components/deaths';

class App extends Component {
  state = {
    states: [],
    deaths: []
  }
  componentDidMount() {
    fetch('https://covidtracking.com/api/states')
    .then(res => res.json())
    .then((data) => {
      this.setState({ states: data, deaths: data })
    })
    .catch(console.log)
  }
  render () {
    return (
      <div>
        <Deaths deaths={this.state.deaths} />
        <States states={this.state.states} />
      </div>
    );
  }
}

export default App;
