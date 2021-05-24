import "./App.css";
import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import Berries from './Components/Berries';
import Pokemon from './Components/Pokemon';
import Locations from './Components/Locations';

class App extends Component {

  render() {
    return (
      <div className='app'>
        <NavBar />
        <main>
          <Switch>
            <Route exact path='/'><h1>Welcome to My Pokemon App!</h1></Route>
            <Route path='/berries' component={Berries}></Route>
            <Route path='/pokemon' component={Pokemon}></Route>
            <Route path='/locations' component={Locations}></Route>
          </Switch>
          
        </main>
      </div>
    );
  };
};


export default App;
