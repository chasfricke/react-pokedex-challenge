import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CardList from "./components/CardList";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <CardList />
        </Route>
      </Switch>
    </Router>
  );
}
