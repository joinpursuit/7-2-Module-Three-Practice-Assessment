import "./App.css";
import Berries from "./Components/Berries";
import Pokemon from "./Components/Pokemon";
import Locations from "./Components/Locations";
import NavBar from "./Components/NavBar"
import Home from "./Components/Home";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <main>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/Pokemon" component={Pokemon} />
        <Route path="/Locations" component={Locations} />
        <Route path="/Berries" component={Berries} />
      </main>
    </div>
  );
}

export default App;
