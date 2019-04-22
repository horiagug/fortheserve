import React, { Component } from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {Button} from "./../StyledComponents/Button"
import {H2} from "./../StyledComponents/Headings"
import {TH, TR,TD, Table} from "./../StyledComponents/Tables"

class Leaderboard extends Component {
    render() {
        this.props.players.sort((a, b) => b.elo - a.elo)
        return (
        <div className = "Leaderboard">
            <H2>Leaderboard</H2>
            <Table>
              <tbody>
                <TR>
                  <TH>Player</TH>
                  <TH>ELO</TH>
                  <TH>Delete</TH>
                </TR>
                {this.props.players.map((player) => 
                <TR key={player.id}>
                  <TD>{player.name}</TD>
                  <TD>{player.elo}</TD>
                  <TD> <Button onClick={() => { this.props.delete(player.id) }} ><i className="far fa-trash-alt"></i></Button> </TD>
                </TR>
                )
              }
              </tbody>
            </Table>
        </div>
    )
    }
}

export default Leaderboard;