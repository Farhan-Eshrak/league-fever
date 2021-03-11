import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import LeagueDet from './Components/LeagueDet/LeagueDet';


function App() {
  const teamUrl = 'https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id='

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>

          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route path="/leagues/:idTeam">
            <LeagueDet />
          </Route>
          <Route path='*'>
            <NoMatch></NoMatch>
          </Route>
          <Route path={`${teamUrl}:idTeam`}>
            <LeagueDet></LeagueDet>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
