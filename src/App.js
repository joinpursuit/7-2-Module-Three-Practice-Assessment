import {Route, Switch} from "react-router-dom"
import NavBar from "./Components/NavBar"
import Homepage from "./Components/Homepage"
import PokemonComp from "./Components/PokemonComp"
import "./App.css";
import BerryComp from "./Components/BerryComp"
import LocationsComp from "./Components/LocationsComp"


function App() {
  return (
    <div className="app">
      <main>
<NavBar />
<Switch>
  <Route path={"/pokemon"} component={PokemonComp}/>
  <Route path={"/locations"} component={LocationsComp}/>
  <Route path={"/berries"} component={BerryComp}/>
  <Route exact path={"/"} component={Homepage}/>
</Switch>
      </main>
    </div>
  );
}

export default App;
