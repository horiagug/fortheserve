import React, { Component } from 'react';
import './App.css';

import {BrowserRouter, Switch, Route} from "react-router-dom";
import Index from './components/pages/index';
import Admin from './components/pages/admin';

class App extends Component {
  

  render() {
    return(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={Index}/>
          <Route path='/admin' component={Admin}/>
        </Switch>
        </BrowserRouter>
    )
  }
}

export default App;
