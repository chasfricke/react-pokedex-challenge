import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CardList from "./components/CardList";
import Filter from "./components/Filter";

const App = () => {
  const [fullList, setFullList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then((res) => res.json())
      .then(
        (response) => {
          setFullList(response.pokemon);
          setFilteredList(response.pokemon);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(false);
          setError(error);
          console.log(error);
        }
      );
  }, []);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Filter fullList={fullList} setFilteredList={setFilteredList} />
          {isLoaded ? (
            <CardList filteredList={filteredList} />
          ) : (
            <p>Loading...</p>
          )}
          {error && `${error}`}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
