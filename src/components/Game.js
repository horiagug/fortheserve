import React, { Component } from "react";
import Player from "./Player/Player";
import { confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {Button} from "./StyledComponents/Button"
import {TH, TR, TD} from "./StyledComponents/Tables"

class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            deleted: false,
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

    render(){
        var date = new Date(this.props.date).toLocaleString()
        return(
            <TR className='Game' >
                <TD> <Player _id = {this.props.winner_id} /></TD>
                <TD color='green'> +{this.props.winner_elo_change} </TD>
                <TD> <Player _id = {this.props.loser_id} /> </TD>
                <TD color='red'> {this.props.loser_elo_change}</TD>
                <TD>{date}</TD>
                <TD> <Button 
                onClick={this.delete.bind(this)} >
                <i className="far fa-trash-alt"></i> </Button></TD>
            </TR>
        )
    }
}

export default Game;