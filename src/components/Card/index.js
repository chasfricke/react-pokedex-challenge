import React from "react";
import styled from "styled-components/macro";

const Card = props => {
  const { cardData } = props;
  return (
    <CardBoundary>
      <Background>
        <h2>{cardData.name}</h2>
        <p>{cardData.num}</p>
        <p>{cardData.type}</p>
        <p>Weaknesses:</p>
        <hr />
        {cardData.weaknesses.map(weakness => (
          <p key={weakness}>{weakness}</p>
        ))}
      </Background>
    </CardBoundary>
  );
};

const CardBoundary = styled.div`
  background-color: #ffe264;

  padding: 16px;
  margin: 8px;
  border-radius: 10px;
  height: 332px;
  width: 238px;
`;

const Background = styled.div`
  box-sizing: border-box;
  background-color: white;
  height: 100%;
  width: 100%;
  padding: 16px;
`;

export default Card;
