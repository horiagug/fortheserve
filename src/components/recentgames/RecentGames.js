import React, { Component } from 'react';
import {H2} from "../styledcomponents/Headings"
import {TH, TR, Table} from "../styledcomponents/Tables"
import Game from "./../game"


class RecentGames extends Component {
    render() {
        return(
            <div className= "RecentGames">
                <H2>Recent Games</H2>
                <Table>
                    <tbody>
                        <TR>
                            <TH>Winner</TH>
                            <TH>Elo Change</TH>
                            <TH>Loser</TH>
                            <TH id="loser_elo" >Elo Change</TH>
                            {this.props.isAdmin &&
                            <TH>Delete</TH>
                            }
                        </TR>
                   {
            this.props.games.map((game) => (
              <Game
              key={game._id}
              _id={game._id}
              winner_id={game.winner_id} 
              loser_id={game.loser_id} 
              winner_elo_change={game.winner_elo_change} 
              loser_elo_change={game.loser_elo_change}
              deleteGame = {game.deleteGame} 
              isAdmin = {this.props.isAdmin}
              players = {this.props.players}
              />
            ))
          }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default RecentGames