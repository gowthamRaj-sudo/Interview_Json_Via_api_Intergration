import { FormControl, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const DropDown = ({ option, values, onChange }) => {
  return (
    <div>
      <FormControl fullWidth size="small">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={values}
          //   label="Age"
          onChange={onChange}
        >
          {option?.map((arr, i) => (
            <MenuItem value={arr} key={i}>
              {arr}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDown;
