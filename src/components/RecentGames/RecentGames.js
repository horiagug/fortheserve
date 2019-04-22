import React, { Component } from 'react';
import {H2} from "./../StyledComponents/Headings"
import {TH, TR, Table} from "./../StyledComponents/Tables"


class RecentGames extends Component {
    render() {
        this.props.games.sort((a, b) => new Date(b.props.date) - new Date(a.props.date))
        return(
            <div className= "RecentGames">
                <H2>Recent Games</H2>
                <Table>
                    <tbody>
                        <TR>
                            <TH>Winner</TH>
                            <TH>Elo Change</TH>
                            <TH>Looser</TH>
                            <TH>Elo Change</TH>
                            <TH>Played on</TH>
                            <TH>Delete</TH>
                        </TR>
                    {this.props.games}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default RecentGames