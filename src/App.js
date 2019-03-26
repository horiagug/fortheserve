import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      players: [],
    };
  }

  componentDidMount() {

    const objThis= this;
    fetch('http://fortheserve.herokuapp.com/api/players', {method: 'GET'})
      .then((response) => response.json())
      .then( findresponse => {
        let players = findresponse.map((player) => {
          return(
            <div key={player._id}>
              <ul>
                <li>{player.name}</li>
                <li>{player.elo}</li>
              </ul>
            </div>
          )
        })
        this.setState({players: players})
      })
  }

  render() {
    return(
      <div>
        {this.state.players}
      </div>
    )
  }
}

export default App;
