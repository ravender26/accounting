import { Card, Typography, CardContent } from "@material-ui/core";
import { Paper, Box } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import CallMadeIcon from "@material-ui/icons/CallMade";
import chartPipe from "../../assets/images/2.PNG";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 125,
    boxShadow: "0 5px 5px -5px",
    borderRadius: "15px / 50px",
  },
  flexWrap: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  flexGrow: {
    flexGrow: 1,
  },
  fullHeight: {
    height: "100%",
  },
  margin: {
    marginTop: "30px",
  },
  icons: {
    overflow: "hidden",
    color: "white",
  },
  Headings: {
    fontWeight: "bold",
    marginBottom: "25px",
  },
  boxTitles: {
    fontWeight: "weight",
    color: "white",
  },
  boxNumbers: {
    color: "white",

    paddingTop: "15px",
  },
}));

const TaskSummary = () => {
  const classes = useStyles();
  return (
    <Paper variant="outlined" className={classes.fullHeight}>
      <Box p={2}>
        <Typography variant="h5" className={classes.Headings}>
          Task Summary
        </Typography>
        <div className={classes.flexWrap}>
          <Card className={classes.root} style={{ backgroundColor: "#FF9211" }}>
            <CardContent>
              <Typography variant="subtitle2" className={classes.boxTitles}>
                New
              </Typography>
              <Typography variant="h4" className={classes.boxNumbers}>
                3
              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.root} style={{ backgroundColor: "#2153DD" }}>
            <CardContent>
              <Typography variant="subtitle2" className={classes.boxTitles}>
                Assigned
              </Typography>
              <Typography variant="h4" className={classes.boxNumbers}>
                16
              </Typography>
            </CardContent>
          </Card>

          <Card className={classes.root} style={{ backgroundColor: "#19C0CC" }}>
            <CardContent>
              <Typography variant="subtitle2" className={classes.boxTitles}>
                Closed
              </Typography>
              <Typography variant="h4" className={classes.boxNumbers}>
                36
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className={`${classes.flexWrap} ${classes.margin}`}>
          <div>
            <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
              One Time Completion Rate
            </Typography>
            <Typography variant="h3" style={{ fontWeight: "bold" }}>
              98%{" "}
              <span style={{ fontSize: "20px", color: "#19C0CC" }}>
                {" "}
                2.72%
                <CallMadeIcon />
              </span>
            </Typography>
          </div>
          <div>
            <img src={chartPipe} alt="Logo" />
          </div>
        </div>
      </Box>
    </Paper>
  );
};

export default TaskSummary;
