import React, { Component } from 'react';

class RecentGames extends Component {
    render() {
        this.props.games.sort((a, b) => new Date(b.props.date) - new Date(a.props.date))
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
                    {this.props.games}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default RecentGames