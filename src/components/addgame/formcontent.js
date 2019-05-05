import React, { Component } from "react";
import {H1} from './../styledcomponents/Headings'
import {Button} from './../styledcomponents/Button'
import {CTA} from './../styledcomponents/AddGames'
import SelectPlayers from './selectplayers'
import AddGames from './addgames'
import api from './../../api'


class FormContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      players: [],
      player1_score : 0,
      player2_score: 0,
      games: [],
    }
    this.handleSelection = this.handleSelection.bind(this)
    this.addOrRemovePlayer = this.addOrRemovePlayer.bind(this)
    this.addGame = this.addGame.bind(this)
    this.removeGame = this.removeGame.bind(this)
    this.addGameToList = this.addGameToList.bind(this)
    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)
  }
  
  _next() {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= 1 ? 2: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }
      
    _prev() {
      let currentStep = this.state.currentStep
      currentStep = currentStep <= 1? 1: currentStep - 1
      this.setState({
        currentStep: currentStep
      })
    }

    get previousButton(){
      let currentStep = this.state.currentStep;
      if(currentStep !==1){
        if(this.state.player1_score ===0 && this.state.player2_score ===0){
        return (
          <Button  onClick={this._prev}> Previous </Button>
        )
      }
    }
      return null;
    }
    
    get nextButton(){
      let currentStep = this.state.currentStep;
      if(currentStep <2 && this.state.players.length === 2){
        return (
          <Button  primary  onClick={this._next}> Next  </Button>        
        )
      }
      return null;
    }

    get removeGameButton(){
      let currentStep = this.state.currentStep;
      if(currentStep === 2){
        if(this.state.player1_score !==0 || this.state.player2_score !==0){
            return (
                <Button onClick={this.removeGame}> Remove Game  </Button>
              )
        }
    }
      return null;
  }

    get finishButton(){
      let currentStep = this.state.currentStep;
      if(currentStep === 2){
        return (
          <Button  onClick={this.props.closeModal}> Finish  </Button>        
        )
      }
      return null;
    }

    addOrRemovePlayer(newArray, newPlayer, isFull){
      var alreadyExists = -1; //treating -1 as false here
      for (var i = 0; i < newArray.length; i++){
        if(newArray[i].id === newPlayer.id ){
          alreadyExists = i;
        }
      }
      if (alreadyExists !== -1){
        newArray.splice(alreadyExists, 1)
      }
      else if (!isFull){
        newArray.push(newPlayer)
      }
      return newArray
    }

    addGameToList(newArray, id, player){
      let game = {
        id : id,
        winner: player,
      }
      newArray.push(game)
      return newArray
    }

  handleSelection(player_id, player_name) {
    var newArray = this.state.players.slice();
    var newPlayer = {
      name : player_name,
      id : player_id
    }
    if (newArray.length ===0 ){
      newArray.push(newPlayer)
    }
    else if (newArray.length === 2) {
      newArray = this.addOrRemovePlayer(newArray, newPlayer, true)
    }
  else {
    newArray = this.addOrRemovePlayer(newArray, newPlayer, false)
  }
    this.setState({players: newArray})
  }

  addGame(winner_id, loser_id) {
    api.addGame(winner_id, loser_id)
    .then ( json => {
      if (json.hasOwnProperty('_id')){
        var newArray = this.state.games.slice();
        if (winner_id === this.state.players[0].id){
          let score = this.state.player1_score + 1;
          newArray = this.addGameToList(newArray, json._id, "player_1" )
          this.setState({
            player1_score : score,
            games: newArray,
          })
        }
        else {
          let score = this.state.player2_score + 1;
          newArray = this.addGameToList(newArray, json._id, "player_2" )
          this.setState({
            player2_score : score,
            games: newArray,
          })
        }
      }
    })
  }

  removeGame(){
    if(this.state.games.length === 0){
      alert("Something went wrong")
    }
    else{
      var newArray = this.state.games.slice();
      var game = newArray.pop()
      api.deleteGame(game.id)
       .then(data => {
         if (game.winner === "player_1"){
          let player1_score = this.state.player1_score -1;
          this.setState({
            games: newArray,
            player1_score : player1_score
          })
        }
        else {
          let player2_score = this.state.player2_score -1;
          this.setState({
            games: newArray,
            player2_score : player2_score 
          })
        }
          })
    }
  }

render() {
    return (
      <React.Fragment>
        <H1 dark>Add games</H1>
           
            {/* Step 1 */}
            <SelectPlayers 
            currentStep={this.state.currentStep} 
            onClick={this.handleSelection}
            players = {this.props.players}
            selectedPlayers = {this.state.players}
            />

            {/* Step 2 */}
            <AddGames
            currentStep={this.state.currentStep}
            selectedPlayers = {this.state.players}
            player1_score = {this.state.player1_score}
            player2_score = {this.state.player2_score}
            addGame = {this.addGame}
            removeGame={this.removeGame}
            />
            <CTA>
              {this.previousButton}
              {this.nextButton}
              {this.removeGameButton}
              {this.finishButton}
            </CTA>
      </React.Fragment>
    )
}
}
export default FormContent