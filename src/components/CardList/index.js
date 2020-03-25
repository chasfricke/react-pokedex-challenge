import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import TextField from "@material-ui/core/TextField";
import Card from "../Card";

const CardList = () => {
  const [hasError, setError] = useState(false);
  const [completePokemonList, setCompletePokemonList] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
      );
      res
        .json()
        .then(res => setCompletePokemonList(res.pokemon))
        .catch(err => setError(err));
    }

    fetchData();
  });

  const startNewSearch = value => {
    const newSearchList = completePokemonList.filter(pokemon =>
      pokemon.name.includes(value)
    );
    setFilteredList(newSearchList);
  };

  const handleSearchTermChange = event => {
    // setSearchTerm(event.target.value);
    startNewSearch(event.target.value);
  };

  return (
    <>
      {hasError && JSON.stringify(hasError)}
      <TextField onChange={handleSearchTermChange} />
      <ListContainer>
        {filteredList.map(data => (
          <Card key={data.id} cardData={data} />
        ))}
      </ListContainer>
    </>
  );
};

export default CardList;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 48px;
`;
