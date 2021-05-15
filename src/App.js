import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Homepage from "./Components/Homepage";
import Berries from './Components/Berries'
import Pokemon from './Components/Pokemon'
import Locations from './Components/Locations'

function App() {
  return (
    <div className="app">
      <NavBar />
      <Switch>
          <Route path={"/berries"} component={Berries} />
          <Route path={"/pokemon"} component={Pokemon} />
          <Route path={"/locations"} component={Locations} />
          <Route exact path={"/"} component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
