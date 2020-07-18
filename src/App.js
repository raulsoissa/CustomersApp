import React, { Component } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/costumers">Costumers</Link> <br/>
          <Link to="/costumers/20200489k">Costumers 20.200.489-K</Link>
        </div>
      </Router>
    );
  }
}

export default App;