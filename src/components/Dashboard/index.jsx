import React from "react";
import Title from "./Title";
import Accounting from "./Accounting";
import TaskSummary from "./TaskSummary";
import Properties from "./Properties";
import { Grid } from "@material-ui/core";

const Dashboard = () => {
  return (
    <>
      <Title />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Accounting />
        </Grid>
        <Grid item md={12} lg={6}>
          <TaskSummary />
        </Grid>
        <Grid item md={12} lg={6}>
          <Properties />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
