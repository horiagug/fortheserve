import React, { Component } from "react";
import Player from "./Player/Player";
import { confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

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
            <tr className='Game' >
                <td> <Player _id = {this.props.winner_id} /></td>
                <td color='green'> +{this.props.winner_elo_change} </td>
                <td> <Player _id = {this.props.loser_id} /> </td>
                <td color='red'> {this.props.loser_elo_change}</td>
                <td>{date}</td>
                <td> <button 
                onClick={this.delete.bind(this)} >
                Delete </button></td>
            </tr>
        )
    }
}

export default Game;