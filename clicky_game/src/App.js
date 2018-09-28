import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';

import Board from './components/Board';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Nav width="100%"/>
        <Board />
      </div>
    );
  }
}

export default App;
