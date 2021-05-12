import NavBar from "./Components/Navbar";
import Home from "./Components/Home";
import { Route } from "react-router-dom";
import "./App.css";
import Berries from "./Components/Berries";
import Pokemon from "./Components/Pokemon";
import Locations from "./Components/Locations";

function App() {
  return (
    <div className="app">
      <main>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/berries" component={Berries} />
        <Route path="/pokemon" component={Pokemon} />
        <Route path="/locations" component={Locations} />
      </main>
    </div>
  );
}

export default App;
