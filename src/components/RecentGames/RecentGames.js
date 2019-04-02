import React, { Component } from 'react';
import api from "./../../api"
import Game from "./../Game"

class RecentGames extends Component {
    constructor(props){
        super(props);      
        this.state = {
            games:[],
        }
    }

    componentDidMount() {
        api.getGames().then(
            json => {
                let games = json.map((game) => {
                    return(
                        <Game 
                        key={game._id}
                        date={game.date}
                        winner_id={game.winner_id} 
                        loser_id={game.loser_id} 
                        winner_elo_change={game.winner_elo_change} 
                        loser_elo_change={game.loser_elo_change} 
                        />
                    )
                })
                this.setState({games: games})
            }
        )
    }

    render() {
        return(
            <div className= "RecentGames">
                <h1>RECENT GAMES</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Winner</th>
                            <th>Elo Change</th>
                            <th>Looser</th>
                            <th>Elo Change</th>
                            <th>Played on</th>
                        </tr>
                    {this.state.games}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default RecentGames