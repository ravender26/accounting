import React from "react";
import Title from "./Title";
import { makeStyles } from "@material-ui/core";
import Accounting from "./Accounting";
import TaskSummary from "./TaskSummary";
import Properties from "./Properties";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: "25px",
  },
});

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
    </div>
  );
};

export default Dashboard;
