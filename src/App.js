import { Route, Switch } from "react-router";
import "./App.css";
import Berries from "./Components/Berries/Berries";
import FourOhFour from "./Components/FourOhFour";
import Home from "./Components/Home";
import Locations from "./Components/Locations/Locations";
import NavBar from "./Components/NavBar";
import Pokemon from "./Components/Pokemon/Pokemon";


function App() {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route path={"/pokemon"} component={Pokemon}/>
        <Route path={"/locations"} component={Locations}/>
        <Route path={"/berries"} component={Berries}/>
        <Route exact path={"/"} component={Home}/>
        <Route path={"/*"} component={FourOhFour}/>
      </Switch>
    </div>
  );
}

export default App;
