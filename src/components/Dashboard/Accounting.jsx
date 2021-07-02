import { Paper, Box, Typography, makeStyles } from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CallMadeIcon from "@material-ui/icons/CallMade";
import Grid from "@material-ui/core/Grid";

import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
  datasets: [
    {
      label: "Accounts",
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
      ],
      borderWidth: 1,
    },
  ],
};

const useStyles = makeStyles((theme) => ({
  priceStyle: {
    fontWeight: "bold",
  },
}));

function Accounting() {
  const classes = useStyles();
  return (
    <Paper variant="outlined">
      <Box p={3}>
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <Typography variant="h5">
              <strong>Accounting</strong>
            </Typography>
            <Typography color="textSecondary" variant="subtitle2">
              March 1, 2020 - April 31, 2021
            </Typography>
            <Typography variant="subtitle2" style={{ marginTop: "20px" }}>
              AVG. Monthly Income
            </Typography>
            <Typography variant="h4" style={{ fontWeight: "bold" }}>
              $5,849.36
            </Typography>
            <Typography variant="subtitle2" style={{ marginTop: "10px" }}>
              <span style={{ color: "#5F997A" }}>
                {" "}
                <CallMadeIcon style={{ fontSize: "15px" }} />
                3.89%
              </span>{" "}
              vs $596.696 prev. 90days
            </Typography>
          </Grid>

          <Grid item sm={6} xs={12}>
            <Bar data={data} />
          </Grid>
        </Grid>
        <Box mt={3}>
          <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
              <Typography variant="h4" className={classes.priceStyle}>
                <AttachMoneyIcon
                  style={{
                    fontSize: "35px",
                    color: "green",
                    borderRadius: "50px",
                  }}
                />
                $89,240.38
              </Typography>

              <Typography variant="subtitle2">
                March 1, 2020 - April 31, 2021
              </Typography>
            </Grid>
            <Grid item sm={12} md={6}>
              <Typography variant="h4" className={classes.priceStyle}>
                <AttachMoneyIcon
                  style={{
                    fontSize: "35px",
                    color: "red",
                    borderRadius: "50px",
                  }}
                />
                $16,237.82
              </Typography>
              <Typography variant="subtitle2">
                March 1, 2020 - April 31, 2021
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Paper>
  );
}

export default Accounting;
