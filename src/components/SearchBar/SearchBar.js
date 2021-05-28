import React, { useState } from "react";
import { TextField } from "@consta/uikit/TextField";
import { Button } from "@consta/uikit/Button";
import "./styles.scss";

const SearchBar = ({ state }) => {
  const [value, setValue] = useState("");

  const handlerClick = () => {
    state.setSearch(value && value.trim());
  };

  const handleChange = ({ value }) => {
    setValue(value);
  };

  return (
    <div className="search">
      <TextField
        value={value}
        type="text"
        form="roundClear"
        onChange={handleChange}
        width="full"
      />
      <Button form="brickRound" label="Найти" onClick={handlerClick} />
    </div>
  );
};

export default SearchBar;
