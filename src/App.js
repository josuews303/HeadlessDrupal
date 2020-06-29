import React from 'react';

import Nav from './components/Nav';
import Home from './components/Home';
import Ads from './components/Ads';
import Edit from "./components/Edit";
import Create from "./components/Create";
import { BrowserRouter as Browser, Switch, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Browser>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ads" component={Ads} />
          <Route path="/create" component={Create}/>
          <Route path="/edit/:id" component={Edit}/>
        </Switch>
      </div>
    </Browser>

  );
}

export default App;
