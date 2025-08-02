import { TextField } from "@mui/material";
import React from "react";

export default function SInput({ label, value, onChange }) {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="standard"
      value={value}
      onChange={onChange}
      // type={type}
    />
  );
}
