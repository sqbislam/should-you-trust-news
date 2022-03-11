import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { mapObject } from "src/core/utils/helpers";


export const Categories = {
    Business:"business",
    Sports:"sports",
    General:"general",
    Health:"health",
    Science:"science",
    Technology:"technology",
    Entertainment:"entertainment"
}

export default function CategorySelect(props:any) {
    
  const { category, setCategory } = props

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={category}
          label="category"
          variant="standard"
          onChange={handleChange}
        >
          {mapObject(Categories, (val, key) => (
            <MenuItem value={val}>{key}</MenuItem>
          ))}
         
        </Select>
        <FormHelperText>Select Category</FormHelperText>
      </FormControl>
    </div>
  );
}
