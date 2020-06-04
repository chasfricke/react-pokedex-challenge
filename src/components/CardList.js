import React from "react";
import styled from "styled-components/macro";
import Card from "./Card";

const CardList = ({ filteredList }) => {
  return (
    <>
      <ListContainer>
        {filteredList.length ? (
          filteredList.map((data) => <Card key={data.id} cardData={data} />)
        ) : (
          <p>No results</p>
        )}
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
