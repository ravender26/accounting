import { Box, TextField } from "@material-ui/core";
import React from "react";

const SectionTwo = () => {
  return (
    <Box borderBottom={1} p={2}>
      <TextField
        type="date"
        defaultValue="2017-05-24"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Box>
  );
};

export default SectionTwo;
