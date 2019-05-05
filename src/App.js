import React, { Component } from 'react';
import './App.css';

import {HashRouter, Switch, Route} from "react-router-dom";

import Index from './components/pages/index';
import Admin from './components/pages/admin';

class App extends Component {


  render() {
    return(
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={Index}/>
          <Route path='/admin' component={Admin}/>
        </Switch>
        </HashRouter>
    )
  }
}

export default App;
