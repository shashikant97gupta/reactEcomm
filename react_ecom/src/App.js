import React, { Component } from 'react';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import './default.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Homepage />
      </div>
    );
  }
}

export default App;
