import React from 'react'
import './../stylesheets/App.css'
import { TextArea } from './TextArea'
const { Component } = React

class App extends Component {
  render() {
    return (
      <div>
        <TextArea />
      </div>
    );
  }
}

export default App;
