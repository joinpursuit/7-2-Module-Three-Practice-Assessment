import "./App.css";
import { Route, Switch } from "react-router-dom"
import Pokemon from "./Components/Pokemon"
import Locations from "./Components/Locations"
import Berries from "./Components/Berries"
import Welcome from "./Components/Welcome"
import NavBar from "./Components/NavBar"
function App() {
  return (

    <div className="app">
      <NavBar/>
      <Switch>
          <Route path={"/pokemon"} component={Pokemon} />
          <Route path={"/locations"} component={Locations} />
          <Route path={"/berries"} component={Berries} />
          <Route path={"/"} component={Welcome} />
        </Switch>
    </div>
  );
}

export default App;
