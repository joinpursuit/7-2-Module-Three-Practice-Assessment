import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import React, { Component } from "react";
import Poke from "./images/poke.png";
import Berries from "./Berries.js";
import Pokemon from "./Pokemon.js";
import Locations from "./Locations.js";

export class App extends Component {
  home = () => {
    return <h1>Welcome to My Pokemon App!</h1>;
  };

  render() {
    return (
      <div className="app">
        <nav className="nav">
          <Link to="/">
            <img src={Poke} alt="" />
          </Link>{" "}
          <Link to="/pokemon">Pokemon</Link>{" "}
          <Link to="/locations">Locations</Link>{" "}
          <Link to="/berries">Berries</Link>
        </nav>
        <div>
          <Switch>
            <Route path="/berries" component={Berries} />
            <Route path="/pokemon" component={Pokemon} />
            <Route path="/locations" component={Locations} />
            <Route path="/" render={this.home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
