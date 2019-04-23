import React, { Component } from "react";
import api from "./../../api"
import PlayerSelector from "./Playerselector"
import {Button} from "./../StyledComponents/Button"
import {H2} from "./../StyledComponents/Headings"
import {P} from "./../StyledComponents/Banner"

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
          <P color='black'> Add a game below: </P>
        )
      }
      else {
        return (
          <P color='green'> Game Added successfully </P>
        )
      }
    }
    
    render() {
      const renderLoser = this.state.winner != null;
      

      const isEnabled = this.state.winner != null && this.state.loser != null

        return(
            <div className= "AddGame">
                <H2> Add Game </H2>
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

                  <Button primary disabled={!isEnabled} type="submit">Submit Game</Button>
                </form>
            </div>
        )
    }
}

export default Addgame;