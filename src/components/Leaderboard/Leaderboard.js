import React, { Component } from 'react';
import api from "../../api"
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class Leaderboard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            players:[],
        };
        this.onDelete = this.onDelete.bind(this)
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

    delete = (player_id) => {
        confirmAlert({
          title: 'Confirm to submit',
            message: 'Are you sure you want to delete this player?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => this.onDelete(player_id)
              },
              {
                label: 'No',
              }
            ]
        })
    }

    onDelete(player_id) {
      api.deletePlayer(player_id)
        .then(response => {
            var array = [...this.state.players]
            array = array.filter((obj) => {
                return obj.id !== player_id
            })
            this.setState({
                players: array,
            })
          })
    }
    
    render() {
        this.state.players.sort((a, b) => b.elo - a.elo)
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
                {this.state.players.map((player) => 
                <tr key={player.id}>
                  <td>{player.name}</td>
                  <td>{player.elo}</td>
                  <td> <button onClick={this.delete.bind(this, player.id)} >Delete</button> </td>
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