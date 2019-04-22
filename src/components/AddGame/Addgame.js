import React, { Component } from "react";
import api from "./../../api"
import PlayerSelector from "./Playerselector"
import {Button} from "./../StyledComponents/Button"

class Addgame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            winner: null,
            loser: null,
            added: false,
        };
    }

   selectWinner(player_id) {
       this.setState({
          winner : player_id,
        })
      }

      selectLoser(player_id) {
        this.setState({
          loser: player_id,
        })
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
      let loserDisplay;

      const isEnabled = this.state.winner != null && this.state.loser != null

        return(
            <div>
                <h2> Add Game </h2>
                {this.renderMessage()}
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <PlayerSelector 
                    players= {this.props.players} 
                    name="Select Winning Player" 
                    onPlayerSelected={this.selectWinner.bind(this)}
                    disabled={false} />

                    <PlayerSelector 
                          players={this.props.players} 
                          name="Select Losing Player" 
                          onPlayerSelected={this.selectLoser.bind(this)}
                          disabled={!renderLoser} />
                        }
                  
                  <Button primary disabled={!isEnabled} type="submit">Submit Game</Button>
                </form>
            </div>
        )
    }
}

export default Addgame;