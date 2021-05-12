import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Berries from "./Components/Berries";
import Pokemon from "./Components/Pokemon";
import Locations from "./Components/Locations";
import "./App.css";
import Home from "./Components/Home";

function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Switch>
          {/* to pass props **newer** */}
          {/* <Route path={"/example"} >
            <Home />
          </Route> */}
          <Route exact path={"/"} component={Home} />
          <Route path={"/locations"} component={Locations} />
          <Route path={"/pokemon"} component={Pokemon} />
          <Route path={"/berries"} component={Berries} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
