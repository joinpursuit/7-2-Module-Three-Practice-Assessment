import "./App.css";
import { Route, Switch } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Berries from "./Components/Berries";
import Pokemon from "./Components/Pokemon";
import Locations from "./Components/Locations";


function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
      <Switch>
        <Route  exact path={"/"} component={Home} />
        <Route path={"/pokemon"} component={Pokemon} />
        <Route path={"/locations"} component={Locations} />
        <Route path={"/berries"} component={Berries} />
      </Switch>
      </main>
    </div>
  );
}

export default App;
