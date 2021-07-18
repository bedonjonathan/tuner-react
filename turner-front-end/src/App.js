import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import NavBar from "./Components/NavBar";
import NewSong from "./Components/NewSong";
import Edit from "./Pages/Edit";
import Show from "./Pages/Show";



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
      <Route exact path="/songs/new">
      <NewSong/>
      </Route>
      <Route exact path="/songs/:id">
      <Show/>
      </Route>
      <Route exact path="/songs/:id/edit">
      <Edit/>
      </Route>
    </Switch>
  </div>;
}

export default App;
