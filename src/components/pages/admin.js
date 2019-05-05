import React, { Component } from "react";

import Leaderboard from "../leaderboard/Leaderboard";
import RecentGames from "../recentgames/RecentGames";
import api from "../../api";
import { confirmAlert } from 'react-confirm-alert';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players:[],
      games:[],
      gameAdded: false,
      
    };
    this.deleteGame = this.deleteGame.bind(this);
    this.onDeletePlayer = this.onDeletePlayer.bind(this);
    this.deletePlayerPopUp = this.deletePlayerPopUp.bind(this);
  };

  componentDidMount(){
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
        api.getGames().then(
          json => {
            let games = json.map((game) => {
                return(
                    {
                    key: game._id,
                    _id :game._id,
                    winner_id: game.winner_id,
                    loser_id: game.loser_id,
                    winner_elo_change: game.winner_elo_change,
                    loser_elo_change: game.loser_elo_change,
                    deleteGame : this.deleteGame,
                    isAdmin : false,
                    }
                )
            })
            this.setState({games: games})
        }
      )
        this.setState({players: players})
      })
  }

  deleteGame(_id) {
    api.deleteGame(_id)
    .then(data => {
        var array = [...this.state.games]
        array = array.filter((obj) => {
            return obj.props._id !== _id
        })
        this.setState({
            games: array,
            deleted : true,
        })
        })
    }

  deletePlayerPopUp = (player_id) => {
    confirmAlert({
      title: 'Confirm to submit',
        message: 'Are you sure you want to delete this player?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => this.onDeletePlayer(player_id)
          },
          {
            label: 'No',
          }
        ]
    })
}

onDeletePlayer(player_id) {
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
      return(
        <div>
            <br />
            <Leaderboard players={this.state.players} delete = {this.deletePlayerPopUp} isAdmin = {true}/>
            <RecentGames games={this.state.games} isAdmin = {true} players={this.state.players} />
        </div>
      )
    }
}

export default Admin;