import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import TextField from "@material-ui/core/TextField";
import Card from "../Card";

const CardList = () => {
  const [hasError, setErrors] = useState(false);
  const [fullList, setFullList] = useState([]);
  const [filteredList, setFilteredList] = useState(fullList);

  async function fetchData() {
    const res = await fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    );
    res
      .json()
      .then(res => setFullList(res.pokemon))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  const startNewSearch = value => {
    console.log("new search started");
    const newSearchList = () =>
      fullList.filter(pokemon => pokemon.name.includes(value));
    setFilteredList(newSearchList);
  };

  const handleSearchTermChange = event => {
    // setSearchTerm(event.target.value);
    startNewSearch(event.target.value);
  };

  return (
    <>
      <TextField onChange={handleSearchTermChange} />
      {hasError && <span>{JSON.stringify(hasError)}</span>}
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
