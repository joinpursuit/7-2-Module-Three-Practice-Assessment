import "./App.css";
import { Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Berries from "./Components/Berries";
import NavBar from "./Components/Navbar";
import Pokemon from "./Components/Pokemon";
import Locations from "./Components/Locations";

//routing in inclusive by default. can hit multiple correct targets. UNless switch is used.
function App() {
  return (
    <div className="app">
      <NavBar />
      <div>
        <Route path="/locations" component={Locations} />
        <Route path="/pokemon" component={Pokemon} />
        <Route path="/berries" component={Berries} />
        <Route exact path="/" component={Home} />
      </div>
    </div>
  );
}

export default App;
