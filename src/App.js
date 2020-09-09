import React, { Component } from 'react';
import Question from './components/pages/Question'
import Introduction from './components/pages/Introduction'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showQuestion: false
    }
    this._onStartTest = this._onStartTest.bind(this)
  }

  _onStartTest() {
    this.setState({ showQuestion: !this.showQuestion})
  }

  render() {
    if (this.state.showQuestion) {
      return <Question />
    } else {
      return <Introduction title='책취테스트' _onStartTest={this._onStartTest} />
    }
  }
}

export default App;
