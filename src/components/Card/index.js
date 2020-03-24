import React from "react";

const Card = props => {
  const { pokemon } = props;
  console.log(props);
  return <div>{pokemon.name}</div>;
};

export default Card;
