import React, { Component } from "react";
import "./Player.css";
import api from "../../api";

class Player extends Component {
    constructor(props){
        super(props);
        this.state = {
            _id: "",
            name: "",
            elo: "",
        }
    }

    componentDidMount() {
        api.getPlayer(this.props._id)
        .then(json => 
            {
                json.map((player) => {
                    this.setState({
                    _id: player._id,
                    name: player.name,
                    elo: player.elo
                    })
                })
            }
        )
    }

    render() {
        return(
            <div className='Player'>
                <span>{this.state.name}</span>
            </div>
        )
    }
}

export default Player;