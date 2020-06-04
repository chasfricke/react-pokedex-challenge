import React, { useState } from "react";
import styled from "styled-components/macro";

const FilterButton = ({ label, name, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Container onClick={handleClick}>
      <Button onClick={onClick} data-name={name} isClicked={isClicked}>
        {label}
      </Button>
    </Container>
  );
};

const Container = styled.div`
  width: fit-content;
  margin: 12px;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80px;
  border-radius: 25px;
  border: solid 1px #dadada;
  padding: 8px 12px;
  font-size: 12px;
  cursor: pointer;
  background-color: ${(props) => (props.isClicked ? "#dadada" : "000000")};
`;

export default FilterButton;
