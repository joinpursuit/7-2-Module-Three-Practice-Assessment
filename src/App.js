import "./App.css";
import { Route, Switch } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Berries from "./Components/Berries";


function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
      <Switch>
        <Route  exact path={"/"} component={Home} />
        {/* <Route path={"/pokeman"} component={} />
        <Route path={"/locations"} component={} /> */}
        <Route path={"/berries"} component={Berries} />
      </Switch>
      </main>
    </div>
  );
}

export default App;
