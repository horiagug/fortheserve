import React, { Component } from 'react';
import './App.css';

import {Route, BrowserRouter} from "react-router-dom";
import Container from './components/Container';

class App extends Component {
  

  render() {
    return(
      <div className="app-container">
        <BrowserRouter>
          <Route path='/' component={Container}
            onEnter={() => {
              document.getElementById("Home").scrollIntoView();
            }}
          />
          <Route path='/leaderboard' component={Container}
           onEnter={() => {
            document.getElementById("Leaderboard").scrollIntoView();
          }} />
          <Route path='/recentgames' component={Container}
           onEnter={() => {
            document.getElementById("Recentgames").scrollIntoView();
          }} />
          <Route path='/addgame' component={Container} 
           onEnter={() => {
              document.getElementById("Addgame").scrollIntoView();
            }}/>
          <Route path='/playermanagement' component={Container}
           onEnter={() => {
            document.getElementById("Addplayer").scrollIntoView();
          }} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
