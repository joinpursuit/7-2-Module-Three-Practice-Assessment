import "./App.css";
import NavBar from "./Components/NavBar";
import Berries from "./Components/Berries";
import Pokemon from "./Components/Pokemon";
import Locations from "./Components/Locations";

import HomePage from "./Components/HomePage";
import ErrorBoundary from "./Components/ErrorBoundary";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <ErrorBoundary>
        <NavBar />
       
        <Switch>

          <Route exact path={"/"} component={HomePage} />
          <Route exact path={"/pokemon"} component={Pokemon} />
          <Route exact path={"/locations"} component={Locations} />
          <Route exact path={"/berries"} component={Berries} />
          {/* <Berries2 /> */}
        </Switch>
      </ErrorBoundary>
    </div>
  );
}

export default App;
