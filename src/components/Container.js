import React, { Component } from "react";

import Home from "./Home";
import Leaderboard from "./Leaderboard";
import Addgame from "./Addgame";
import Playermanagement from "./Playermanagement";

class Container extends Component {

    render() {
      return(
        <div>
            <Home/>
            <Leaderboard/>
            <Addgame/>
            <Playermanagement/>
        </div>
      )
    }
}

export default Container;