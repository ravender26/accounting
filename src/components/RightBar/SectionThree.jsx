import { Box } from "@material-ui/core";
import React from "react";
import TaskCard from "./TaskCard";

const SectionThree = () => {
  return (
    <Box boxShadow={"rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"} p={2}>
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </Box>
  );
};

export default SectionThree;
