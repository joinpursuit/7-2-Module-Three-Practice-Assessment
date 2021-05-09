import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Berries from "./Components/Berries";
import Pokemon from "./Components/Pokemon";
import Locations from "./Components/Locations";
import "./App.css";

function App() {
  return (
    <div className="app">
      <main>
        <NavBar />
        <Switch>
          <Route path={"/berries"} component={Berries} />
          <Route path={"/locations"} component={Locations} />
          <Route path={"/pokemon"} component={Pokemon} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
