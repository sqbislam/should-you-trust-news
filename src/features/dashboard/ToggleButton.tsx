import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Categories } from "./CategorySelect";
import { mapObject } from "src/core/utils/helpers";

export default function ColorToggleButton(props:any) {

   const { category, setCategory } = props;

   const handleChange = (event: any) => {
     setCategory(event.target.value);
   };

  return (
    <ToggleButtonGroup
      color="primary"
      value={category}
      exclusive
      onChange={handleChange}
    >
      {mapObject(Categories, (val, key) => (
        <ToggleButton key={val} value={val}>
          {key}
        </ToggleButton>
      ))}
     
    </ToggleButtonGroup>
  );
}
