import React, { useState } from "react";
// import TextField from "@material-ui/core/TextField";
import styled from "styled-components/macro";
import FilterButton from "./FilterButton";

const Filter = ({ fullList, setFilteredPosts }) => {
  const [type, setType] = useState({ water: false, fire: false });

  // ************** UNIVERAL FILTER **************
  const allFilterClickListener = (e, filterProp) => {
    console.log("filter clicked:", e.target.dataset.name);
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
      <div>{type.water && "water"}</div>
    </Container>
  );
};

const Container = styled.div`
  padding: 12px;
`;

export default Filter;
