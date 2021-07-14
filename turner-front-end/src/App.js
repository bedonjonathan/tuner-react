import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import NavBar from "./Components/NavBar";


import "./App.css";

function App() {
  return <div className="App">
    <NavBar/>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/songs">
      <Index/>
      </Route>
    </Switch>
  </div>;
}

export default App;
