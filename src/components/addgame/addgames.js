import React, { Component } from "react";
import {Button} from "./../styledcomponents/Button";
import {H2} from "./../styledcomponents/Headings";
import {Scores, Player} from "./../styledcomponents/AddGames";

class AddGames extends Component {
    render() {
      if (this.props.currentStep !== 2) { // Prop: The current step
        return null
      }
      return(
        <div>
          <div>
              <Scores>
              <Player>
                <H2>{this.props.selectedPlayers[0].name} </H2>
                <H2>{this.props.player1_score} </H2>
                <Button xs primary onClick={() =>{this.props.addGame(this.props.selectedPlayers[0].id, this.props.selectedPlayers[1].id)}}>Add</Button>
              </Player>
              <Player>
                <H2>{this.props.selectedPlayers[1].name} </H2>
                <H2>{this.props.player2_score} </H2>
                <Button xs primary onClick={() =>{this.props.addGame(this.props.selectedPlayers[1].id, this.props.selectedPlayers[0].id)}}>Add</Button>
              </Player>
              </Scores>
              {this.removeGameButton}
          </ div>
        </div>
      )
    }
  }
  
  export default AddGames