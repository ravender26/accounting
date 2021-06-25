import { Box } from "@material-ui/core";
import React from "react";
import TaskCard from "./TaskCard";

const SectionThree = () => {
  return (
    <Box borderBottom={1} p={2}>
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </Box>
  );
};

export default SectionThree;
