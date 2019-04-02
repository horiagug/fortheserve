import React, { Component } from "react";
import Player from "./Player/Player";

class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
                    
        }

    render(){
        var date = new Date(this.props.date).toLocaleString()
        return(
            <tr className='Game'>
                <td> <Player _id = {this.props.winner_id} /></td>
                <td color='green'> +{this.props.winner_elo_change} </td>
                <td> <Player _id = {this.props.loser_id} /> </td>
                <td color='red'> {this.props.loser_elo_change}</td>
                <td>{date}</td>

            </tr>
        )
    }
}

export default Game;