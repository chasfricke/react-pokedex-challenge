import React, { useState } from "react";
// import TextField from "@material-ui/core/TextField";
import styled from "styled-components/macro";
import FilterButton from "./FilterButton";

const Filter = ({ fullList, setFilteredPosts }) => {
  const [type, setType] = useState({});
  const [weaknesses, setWeaknesses] = useState({});

  // ************** UNIVERAL FILTER **************
  const allFilterClickListener = (e, filterProp) => {
    const name = e.target.dataset.name;

    //TODO: possible switch statement, need a function dynamically render all FilterButtons so all FilterProps are auto-generated
    if (filterProp === "type") {
      setType((prevState) => ({ ...type, [name]: !prevState[name] }));
    }
    if (filterProp === "weaknesses") {
      setWeaknesses((prevState) => ({
        ...weaknesses,
        [name]: !prevState[name],
      }));
    }
  };

  return (
    <Container>
      <p>Type:</p>
      <FilterButton
        name="water"
        label="water"
        onClick={(e) => allFilterClickListener(e, "type")}
      />
      <FilterButton
        name="fire"
        label="fire"
        onClick={(e) => allFilterClickListener(e, "type")}
      />
      <p>Weaknesses: </p>
      <FilterButton
        name="water"
        label="water"
        onClick={(e) => allFilterClickListener(e, "weaknesses")}
      />
      <FilterButton
        name="fire"
        label="fire"
        onClick={(e) => allFilterClickListener(e, "weaknesses")}
      />
    </Container>
  );
};

const Container = styled.div`
  padding: 12px;
`;

export default Filter;
