import React, { Component } from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css';

class Leaderboard extends Component {
    render() {
        this.props.players.sort((a, b) => b.elo - a.elo)
        return (
        <div className = "Leaderboard">
            <h2>Leaderboard</h2>
            <table>
              <tbody>
                <tr>
                  <th>Player</th>
                  <th>ELO</th>
                  <th>Delete</th>
                </tr>
                {this.props.players.map((player) => 
                <tr key={player.id}>
                  <td>{player.name}</td>
                  <td>{player.elo}</td>
                  <td> <button onClick={() => { this.props.delete(player.id) }} >Delete</button> </td>
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