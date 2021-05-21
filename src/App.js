import React from "react"
import { Route,NavLink, Switch} from "react-router-dom";
import Home from "./Components/Home"
import Locations from "./Components/Locations"
import Pokemon from "./Components/Pokemon"
import Berries from "./Components/Berries"


import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/"><img src="https://pngimg.com/uploads/pokeball/pokeball_PNG17.png" alt="pokeball"></img></NavLink>
        <NavLink to="/berries">Berries</NavLink>
        <NavLink to="/pokemon">Pokemon</NavLink>
        <NavLink to="/locations">Locations</NavLink>
      </nav>
      <section>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/berries" component={Berries}></Route>
          <Route path="/pokemon" component={Pokemon}></Route>
          <Route path="/locations" component={Locations}></Route>
        </Switch>
      </section>
    </div>
  );
}

export default App;
