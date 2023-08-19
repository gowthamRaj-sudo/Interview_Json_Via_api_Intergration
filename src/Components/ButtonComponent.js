import { Button } from "@mui/material";
import React from "react";

const ButtonComponent = ({ text, value, onClick }) => {
  return (
    <div>
      <Button variant="contained" onClick={onClick} fullWidth>
        {text}
      </Button>
    </div>
  );
};

export default ButtonComponent;
