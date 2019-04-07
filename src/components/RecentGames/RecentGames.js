import React, { Component } from 'react';
import api from "./../../api"
import Game from "./../Game"

class RecentGames extends Component {
    constructor(props){
        super(props);      
        this.state = {
            games:[],
            deleted: false,
        }
        this.deleteGame = this.deleteGame.bind(this)
    }

    componentDidMount() {
        api.getGames().then(
            json => {
                let games = json.map((game) => {
                    return(
                        <Game 
                        key={game._id}
                        _id={game._id}
                        date={game.date}
                        winner_id={game.winner_id} 
                        loser_id={game.loser_id} 
                        winner_elo_change={game.winner_elo_change} 
                        loser_elo_change={game.loser_elo_change}
                        deleteGame = {this.deleteGame} 
                        />
                    )
                })
                this.setState({games: games})
            }
        )
    }

    deleteGame(_id) {
        api.deleteGame(_id)
        .then(data => {
            var array = [...this.state.games]
            array = array.filter((obj) => {
                return obj.props._id !== _id
            })
            this.setState({
                games: array,
                deleted : true,
            })
            })
        }

    render() {
        this.state.games.sort((a, b) => new Date(b.props.date) - new Date(a.props.date))
        return(
            <div className= "RecentGames">
                <h2>Recent Games</h2>
                <table>
                    <tbody>
                        <tr>
                            <th>Winner</th>
                            <th>Elo Change</th>
                            <th>Looser</th>
                            <th>Elo Change</th>
                            <th>Played on</th>
                            <th>Delete</th>
                        </tr>
                    {this.state.games}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default RecentGames