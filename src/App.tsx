import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Favorites from "./views/Favorites";
import Home from "./views/Home";

export default function App() {

  return (
    <Router>
      <div>
        <header>
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episode !!!</p>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </header>
        <Switch>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
