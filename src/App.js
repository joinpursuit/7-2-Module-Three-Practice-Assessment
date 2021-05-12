import NavBar from "./Components/NavBar";
import {Switch,Route} from "react-router-dom"
import Home from "./Components/Home";
import Berries from "./Components/Berries";
import "./App.css";
import Pokemon from "./Components/Pokemon";
import Locations from "./Components/Location";

const App = () => {
  return (
    <div className="app">
      <main>
        <NavBar/>
        <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route path={"/pokemon"} component={Pokemon}/>
          <Route path={"/locations"} component={Locations}/>
          <Route path={"/berries"} component={Berries}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
