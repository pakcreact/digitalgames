import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Games from './pages/Games'
import Game from './pages/Game'
import Default from './pages/Default'

import Navbar from './components/Navbar'

function App() {
   return (
      <>
      <Navbar></Navbar>
         <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/games" component={Games}></Route>
            <Route exact path="/games/:gameid" component={Game}></Route>
            <Route component={Default}></Route>
         </Switch>
      </>
   );
}

export default App;
