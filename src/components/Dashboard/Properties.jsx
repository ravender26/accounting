import { Paper, Box, Typography, Link } from "@material-ui/core";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core";


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
  fullHeight:{
    height:'100%'
},
 title:{
  fontWeight:'bold',
  marginBottom:'25px'
 },
}));

const Properties = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.fullHeight}>
      <Box p={2}>
        <div className={classes.flexWrap}>
          <Typography variant="h5" className={classes.title}>Properties</Typography>
          <Link href="/">All properties </Link>
        
        </div>

        <div>
          <Doughnut height={100} width={100} data={data} />
        </div>
      </Box>
    </Paper>
  );
};

export default Properties;
