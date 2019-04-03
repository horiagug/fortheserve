import React, { Component } from "react";
import api from "./../../api"
import PlayerSelector from "./Playerselector"

class Addgame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            players: [],
            winner: null,
            loser: null

        };
    }

    componentDidMount() {
        api.getPlayers()
          .then( json => {
            let players = json.map((player) => {
              return(
                {
                  id: player._id,
                  name: player.name,
                  elo: player.elo
                }
              )
            })
            this.setState({players: players})
          })
        }

    render() {
        return(
            <div>
                <h2> Add Game </h2>
                <PlayerSelector players= {this.state.players} name="Select Winning Player" />

                <PlayerSelector players= {this.state.players} name="Select Losing Player" />
            </div>
        )
    }
}

export default Addgame;