import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import TextField from "@material-ui/core/TextField";
import Card from "../Card";

const CardList = () => {
  const [fullList, setFullList] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    )
      .then((res) => res.json())
      .then((response) => {
        setFullList(response.pokemon);
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
  });

  // ************** UNIVERAL FILTER **************

  const allFilterClickListener = () => {
    console.log("filter clicked");
  };

  return (
    <>
      {/* ************** NAME ************** */}
      <TextField onChange={allFilterClickListener()} />
      <ListContainer>
        {fullList.length
          ? fullList.map((data) => <Card key={data.id} cardData={data} />)
          : null}
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
