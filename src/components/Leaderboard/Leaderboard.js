import React, { Component } from 'react';
import api from "../../api"

class Leaderboard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            players:[],
        };
    }

    componentDidMount() {
        api.getPlayers()
          .then( json => {
            let players = json.map((player) => {
              return(
                {
                  id: player._id,
                  name: player.name,
                  elo: player.elo
                }
              )
            })
            this.setState({players: players})
          })
      }
    
    render() {
        this.state.players.sort((a, b) => b.elo - a.elo)
        return (
        <div className = "Leaderboard">
            <h1>Leaderboard</h1>
            <table>
              <tbody>
                <tr>
                  <th>Player</th>
                  <th>ELO</th>
                </tr>
                {this.state.players.map((player) => 
                <tr key={player.id}>
                  <td>{player.name}</td>
                  <td>{player.elo}</td>
                </tr>
                )
              }
              </tbody>
            </table>
        </div>
    )
    }
}

export default Leaderboard;