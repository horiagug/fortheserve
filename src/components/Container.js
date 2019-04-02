import React, { Component } from "react";

import Home from "./Home";
import Leaderboard from "./Leaderboard/Leaderboard";
import Addgame from "./AddGame/Addgame";
import Playermanagement from "./PlayerManagement/Playermanagement";
import RecentGames from "./RecentGames/RecentGames";

class Container extends Component {

    render() {
      return(
        <div>
            <Home/>
            <RecentGames/>
            <Leaderboard/>
            <Addgame/>
            <Playermanagement/>
        </div>
      )
    }
}

export default Container;