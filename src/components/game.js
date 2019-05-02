import React, { Component } from "react";
import { confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {Button} from "./styledcomponents/Button"
import { TR, TD} from "./styledcomponents/Tables"

class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            deleted: false,
            winner: null,
            loser: null,
        }
    }

    delete = () => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure you want to delete this game?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => this.onDelete()
              },
              {
                label: 'No',
              }
            ]
          });
    }

    onDelete(){
        this.props.deleteGame(this.props._id)
        this.setState({deleted:true})
    }

    componentDidMount(){
      var winner;
      var loser;
      for (var i = 0; i<this.props.players.length; i++){
        if(this.props.players[i].id === this.props.winner_id){
          winner =
            <div className='Player'>
              <span>{this.props.players[i].name}</span> 
            </div>
        }
        if(this.props.players[i].id === this.props.loser_id){
          loser =
            <div className='Player'>
              <span>{this.props.players[i].name}</span> 
            </div>
        }
          this.setState({
            winner : winner,
            loser : loser
          })
      }
    }

    render(){
      const winnerColor = {
        color : "green"
     }
     const looserColor = {
      color : "red"
   }
        return(
            <TR className='Game' >
                <TD> {this.state.winner}</TD>
                <TD  style={winnerColor}> +{this.props.winner_elo_change} </TD>
                <TD>{this.state.loser} </TD>
                <TD style={looserColor}> {this.props.loser_elo_change}</TD>
                {this.props.isAdmin &&
                <TD> <Button 
                onClick={this.delete.bind(this)} >
                <i className="far fa-trash-alt"></i> </Button></TD>
                }
           </TR>
        )
    }
}

export default Game;