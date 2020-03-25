import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import TextField from "@material-ui/core/TextField";
import Card from "../Card";

const CardList = () => {
  const [fullList, setFullList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [typeInput, setTypeInput] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then(res => res.json())
      .then(response => {
        setFullList(response.pokemon);
      })
      .catch(error => {
        console.log(error);
        return [];
      });
  });

  //Need to use local state to differentiate between e.target.values

  const startNewSearch = value => {
    console.log(nameInput);
    // const nameList = fullList.filter(pokemon =>
    //   pokemon.name.toLowerCase().includes(nameInput.toLowerCase())
    // );

    // need to add nested filters
    const typeList = fullList.filter(pokemon =>
      pokemon.type.filter(type => type.includes(typeInput))
    );

    setFilteredList(typeList);
  };

  const handleNameChange = event => {
    setNameInput(event.target.value);
    startNewSearch();
  };

  const handleTypeChange = event => {
    setTypeInput(event.target.value);
    startNewSearch();
  };

  return (
    <>
      <TextField onChange={handleNameChange} />
      <TextField onChange={handleTypeChange} />
      <ListContainer>
        {(filteredList.length === 0 ? fullList : filteredList).map(data => (
          <Card key={data.id} cardData={data} />
        ))}
      </ListContainer>
    </>
  );
};

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 48px;
`;

export default CardList;
