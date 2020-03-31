import React, { Component } from 'react';
import States from './components/states';

class App extends Component {
  state = {
    states: []
  }
  componentDidMount() {
    fetch('https://covidtracking.com/api/states')
    .then(res => res.json())
    .then((data) => {
      this.setState({ states: data })
    })
    .catch(console.log)
  }
  render () {
    return (
      <States states={this.state.states} />
    );
  }
}

export default App;
