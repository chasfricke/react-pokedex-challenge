import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import Card from "../Card";

const CardList = () => {
  const [hasError, setError] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
      );
      res
        .json()
        .then(res => setPokemonList(res.pokemon))
        .catch(err => setError(err));
    }

    fetchData();
  });

  const GetList = list => {
    if (list) {
      return list.map(data => <Card key={data.id} cardData={data} />);
    }
  };

  return (
    <>
      {hasError && JSON.stringify(hasError)}
      <ListContainer>{GetList(pokemonList)}</ListContainer>
    </>
  );
};

export default CardList;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
