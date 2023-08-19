import { TextField } from "@mui/material";
import React from "react";

const InputComponent = ({ name, value, onChange }) => {
  return (
    <div>
      <TextField
        fullWidth
        size="small"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputComponent;
