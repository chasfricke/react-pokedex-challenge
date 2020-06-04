import React, { useState } from "react";
// import TextField from "@material-ui/core/TextField";
import styled from "styled-components/macro";

const Filter = ({ fullList, setFilteredPosts }) => {
  const [type, setType] = useState({ water: false, fire: false });

  // ************** UNIVERAL FILTER **************
  const allFilterClickListener = (e, filterProp) => {
    console.log("filter clicked:", e.target.dataset.name);
  };

  return (
    <Container>
      {/* <TextField
        name="name"
        onChange={(e) => allFilterClickListener(e, "name")}
      /> */}
      <p>Type:</p>
      <div data-name="water" onClick={(e) => allFilterClickListener(e, "type")}>
        Water
      </div>
      <div data-name="fire" onClick={(e) => allFilterClickListener(e, "type")}>
        Fire
      </div>
      <div>{type.water && "water"}</div>
    </Container>
  );
};

const Container = styled.div`
  padding: 12px;
`;

export default Filter;
