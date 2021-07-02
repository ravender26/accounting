import { Paper, Box, Typography } from "@material-ui/core";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const data = {
  labels: ["Occupied", "Vacant", "Maintenance"],
  datasets: [
    {
      label: "jek",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 125,
  },
  flexWrap: {
    display: "flex",
    justifyContent: "space-between",
  },
  flexGrow: {
    flexGrow: 1,
  },
  fullHeight: {
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "25px",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.text.secondary,
  },
}));

const Properties = () => {
  const classes = useStyles();
  return (
    <Paper variant="outlined" className={classes.fullHeight}>
      <Box p={2}>
        <div className={classes.flexWrap}>
          <Typography variant="h5" className={classes.title}>
            Properties
          </Typography>
          <Link className={classes.link} to="/">
            All properties{" "}
          </Link>
        </div>
        <Box padding={3}>
          <Doughnut height={100} width={100} data={data} />
        </Box>
      </Box>
    </Paper>
  );
};

export default Properties;
