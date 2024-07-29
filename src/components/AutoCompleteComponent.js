import { Autocomplete, TextField } from "@mui/material";

function AutoCompleteComponent({ options }) {
  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} label="Choose an movie" variant="outlined" />
      )}
    />
  );
}

export default AutoCompleteComponent;
