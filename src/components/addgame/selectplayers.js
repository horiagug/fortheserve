import React, { Component } from "react";
import {Button} from "./../styledcomponents/Button";
import {H2} from "./../styledcomponents/Headings";
import {SelectPlayerContainer, Selector, VerticalLine} from "./../styledcomponents/AddGames";


class SelectPlayers extends Component {
    render() {
      if (this.props.currentStep !== 1) { // Prop: The current step
        return null
      }
      // The markup for the Step 1 UI
      return(
        <div>
          <SelectPlayerContainer>
            <Selector>
          <H2>Select Players</H2>
          {
            this.props.players.map((player) => (
              <Button xs player key={player.id} onClick={() => { this.props.onClick(player.id, player.name) }}>{player.name}</Button>
            ))
          }
          </Selector>
          <VerticalLine></VerticalLine>
         <Selector>
          <H2>Selected Players</H2>
          {
            this.props.selectedPlayers.map((player) => (
              <Button player key={player.id} onClick={() => { this.props.onClick(player.id, player.name) }}>{player.name}</Button>
            ))
          }
          </Selector>
           </SelectPlayerContainer>
        </div>
      )
    }
  }

  export default SelectPlayers