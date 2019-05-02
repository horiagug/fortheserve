import React, { Component } from 'react';
import './App.css';

import {Route, Switch} from "react-router-dom";
import Index from './components/pages/index';
import Admin from './components/pages/admin';

class App extends Component {
  

  render() {
    return(
      <main>
      <Switch>
        <Route exact path='/' component={Index}/>
        <Route exact path='/admin' component={Admin}/>

      </Switch>
    </main>
    )
  }
}

export default App;
