import React, { useState, useEffect } from "react";
import Card from "../Card";

const CardList = () => {
  const [hasError, setError] = useState(false);
  const [pokemonList, setPokemonList] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
      );
      res
        .json()
        .then(res => setPokemonList(res))
        .catch(err => setError(err));
    }

    fetchData();
  });

  const GetList = list => {
    if (list.pokemon) {
      const pokemonList = list.pokemon;
      return pokemonList.map(pokemon => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ));
    }
  };

  return (
    <>
      {hasError && JSON.stringify(hasError)}
      {GetList(pokemonList)}
    </>
  );
};

export default CardList;
