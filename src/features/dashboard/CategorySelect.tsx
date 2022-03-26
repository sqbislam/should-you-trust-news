import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { mapObject } from "src/core/utils/helpers";

export const Categories = {
  Politics: "politics",
  Economy: "economy",
  Technology: "technology",
};

export default function CategorySelect(props: any) {
  const { category, setCategory } = props;

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={category}
          label="category"
          variant="standard"
          onChange={handleChange}
        >
          {mapObject(Categories, (val, key) => (
            <MenuItem key={val} value={val}>
              {key}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Select Category</FormHelperText>
      </FormControl>
    </div>
  );
}
