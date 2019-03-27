import React, { Component } from 'react';
import Player from "./Player"
import api from "./../api"

class Leaderboard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            players:[],
        };
    }

    componentDidMount() {
        fetch('/api/players', {method: 'GET'}).then((response) => response.json())
          .then( json => {
            let players = json.map((player) => {
              return(
                <Player key={player._id} name={player.name} elo={player.elo} />
              )
            })
            this.setState({players: players})
          })
      }
    
    render() {
        this.state.players.sort((a, b) => b.props.elo - a.props.elo)
        return (
        <div className = "Leaderboard">
            <h1>Leaderboard</h1>
            {this.state.players}
        </div>
    )
    }
}

export default Leaderboard;