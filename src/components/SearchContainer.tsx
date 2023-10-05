import { Search } from "@mui/icons-material";
import { TextField } from "@mui/material";
import _ from "lodash";

interface SearchContainerProps {
  placeHolder?: string;
  onChange: (v: string) => void;
  onFocus?: (e: any) => void;
  width?: string;
  maxWidth?: string;
  debounced?: boolean;
  minWidth?: string;
  value?: string;
  defaultValue?: string;
  autoFocus?: boolean;
}

function SearchContainer(props: SearchContainerProps) {
  const {
    placeHolder = "Search",
    onChange,
    maxWidth = "600px",
    width = "50px",
    debounced,
    minWidth = "450px",
    onFocus,
    defaultValue = "",
    autoFocus = false,
  } = props;

  const handleChange = _.debounce(function (e) {
    onChange(e.target.value);
  }, 1000);

  return (
    <TextField
      sx={{
        maxWidth,
        width,
        minWidth,
      }}
      color="primary"
      defaultValue={defaultValue}
      autoFocus={autoFocus}
      onChange={(e) => {
        debounced ? handleChange(e) : onChange(e.target.value);
      }}
      size="small"
      placeholder={placeHolder}
      InputProps={{ endAdornment: <Search /> }}
      onFocus={onFocus}
    />
  );
}

export default SearchContainer;
