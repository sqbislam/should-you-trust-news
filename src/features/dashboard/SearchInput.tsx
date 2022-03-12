import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

interface ISearchInputProps {
  searchValue?: string;
  onSearchValue?: (e: any) => void;
}
 const SearchInput:React.FC<ISearchInputProps> = (
  props: ISearchInputProps
) => {
  const { searchValue, onSearchValue } = props;
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        onInput={onSearchValue}
        value={searchValue}
        placeholder="Search News"
        inputProps={{ "aria-label": "search news" }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <ClearIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchInput;
