import React, { Component } from 'react';
import Person from './Component/Person';
import Error from './Component/Error';
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  handleClick = () => this.setState({ show: !this.state.show });

  render() {
    return (
      <div className="app">
        <h2>Checkpoint State</h2>
        <button className="toggle-btn" onClick={this.handleClick}>
          {this.state.show ? 'Cacher le Profil' : 'Afficher le Profil'}
        </button>
        {this.state.show ? <Person /> : <Error />}
      </div>
    );
  }
}
