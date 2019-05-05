import React, { Component } from 'react';
import './App.css';

import {BrowserRouter, Switch, Route} from "react-router-dom";
import { createBrowserHistory } from "history";


import Index from './components/pages/index';
import Admin from './components/pages/admin';

const customHistory = createBrowserHistory();

class App extends Component {


  render() {
    return(
      <BrowserRouter basename={process.env.PUBLIC_URL} history={customHistory}>
        <Switch>
          <Route exact path='/' component={Index}/>
          <Route path='/admin' component={Admin}/>
        </Switch>
        </BrowserRouter>
    )
  }
}

export default App;
