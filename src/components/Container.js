import React, { Component } from "react";

import Home from "./Home";
import Leaderboard from "./Leaderboard";
import Addgame from "./Addgame";
import Playermanagement from "./Playermanagement";
import RecentGames from "./RecentGames";

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