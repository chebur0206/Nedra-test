import React from "react";
import { Button } from "@consta/uikit/Button";
import { IconCancel } from "@consta/uikit/IconCancel";

const ResetButton = ({ state }) => {
  const handleClick = () => {
    state.setBrand("");
    state.setModel("");
    state.setYear("");
    state.setFuel("");
    state.setBodyType("");
    state.setPrice("");
    state.setActiveFilter({});
    state.setSearch("");
  };

  return (
    <Button
      label="Сброс"
      view="primary"
      form="round"
      onlyIcon
      iconLeft={IconCancel}
      onClick={handleClick}
    />
  );
};

export default ResetButton;
