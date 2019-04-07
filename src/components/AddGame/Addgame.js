import React, { Component } from "react";
import api from "./../../api"
import PlayerSelector from "./Playerselector"

class Addgame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            players: [],
            winner: null,
            loser: null,
            added: false,
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

    onPlayerSelected(player_id) {
      if (this.state.winner == null) {
        this.setState({
          winner : player_id,
        })
      }
      else {
        this.setState({
          loser: player_id,
        })
      }
    }

    handleSubmit(event) {
      event.preventDefault();
      api.addGame(this.state.winner, this.state.loser)
      .then ( json => {
        if (json.hasOwnProperty('_id')){
          this.setState({
            added:true,
            winner: null,
            loser: null,
          })
          window.location.reload()
        }
      })
    } 

    renderMessage() {
      if (!this.state.added) {
        return (
          <p color='black'> Add a game below: </p>
        )
      }
      else {
        return (
          <p color='green'> Game Added successfully </p>
        )
      }
    }

    render() {
      const renderLoser = this.state.winner != null;
      const isEnabled = this.state.winner != null && this.state.loser != null

        return(
            <div>
                <h2> Add Game </h2>
                {this.renderMessage()}
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <PlayerSelector 
                    players= {this.state.players} 
                    name="Select Winning Player" 
                    onPlayerSelected={this.onPlayerSelected.bind(this)}
                    disabled={false} />
                  
                  <PlayerSelector 
                    players={this.state.players} 
                    name="Select Losing Player" 
                    onPlayerSelected={this.onPlayerSelected.bind(this)}
                    disabled={!renderLoser} />
                  
                  <button disabled={!isEnabled} type="submit">Submit Game</button>
                </form>
            </div>
        )
    }
}

export default Addgame;