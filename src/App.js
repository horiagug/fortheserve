import React, { Component } from 'react';
import './App.css';

import {Route, BrowserRouter} from "react-router-dom";
import Container from './components/Container';

class App extends Component {
  

  render() {
    return(
      <div className="app-container">
      <h1> For The Serve </h1>
        <BrowserRouter>
          <Route path='/' component={Container}
            onEnter={() => {
              document.getElementById("home_id").scrollIntoView();
            }}
          />
          <Route path='/leaderboard' component={Container}
           onEnter={() => {
            document.getElementById("leaderboard_id").scrollIntoView();
          }} />
          <Route path='/recentgames' component={Container}
           onEnter={() => {
            document.getElementById("recent_games").scrollIntoView();
          }} />
          <Route path='/addgame' component={Container} 
           onEnter={() => {
              document.getElementById("addgame_id").scrollIntoView();
            }}/>
          <Route path='/playermanagement' component={Container}
           onEnter={() => {
            document.getElementById("playermanagement_id").scrollIntoView();
          }} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
