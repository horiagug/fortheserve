import React, { Component } from "react";
import {Button} from "./../styledcomponents/Button";
import {H2} from "./../styledcomponents/Headings";

class SelectPlayers extends Component {
    render() {
      if (this.props.currentStep !== 1) { // Prop: The current step
        return null
      }
      // The markup for the Step 1 UI
      return(
        <div>
          <H2>Select Players</H2>
          {
            this.props.players.map((player) => (
              <Button key={player.id} onClick={() => { this.props.onClick(player.id, player.name) }}>{player.name}</Button>
            ))
          }
          <H2>Selected Players</H2>
          {
            this.props.selectedPlayers.map((player) => (
              <Button key={player.id} onClick={() => { this.props.onClick(player.id, player.name) }}>{player.name}</Button>
            ))
          }
        </div>
      )
    }
  }

  export default SelectPlayers