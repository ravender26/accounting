import { Paper, Box, Typography, makeStyles } from '@material-ui/core'
import React from 'react'
import { Bar } from 'react-chartjs-2';


const data = {
    labels:["Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
  datasets: [{
    label:"Accounts",
    data: [65, 59, 80, 81, 56, 55],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)'
    ],
    borderWidth: 1
  }]
};

const useStyles = makeStyles((theme) => ({
    flexWrap:{
        display:'flex',
        justifyContent:'space-between'
    }
}));

function Accounting() {
    const classes = useStyles();
    return (
        <Paper>
            <Box p={2}>
                <div className={classes.flexWrap}>
                <div>
                <Typography variant="h5">
                <strong>Accounting</strong>
                </Typography>
                <Typography color="textSecondary" variant="subtitle2">
                   March 1, 2020 - April 31, 2021
                </Typography>
                <Typography variant="subtitle2">
                   AVG. Monthly Income
                </Typography>
                <Typography variant="h5">
                $5,849.36
                </Typography>
                <Typography variant="subtitle2">
                   3.89% vs $596.696 prev. 90days
                </Typography>
             
            </div>
            <div>
                <Bar data={data} />
            </div>
                </div>
                <hr />
                <div className={classes.flexWrap}>
                    <div>
                    <Typography variant="h5">
                Accounting
                </Typography>
                <Typography variant="subtitle2">
                   March 1, 2020 - April 31, 2021
                </Typography>
                    </div>
                    <div>
                    <Typography variant="h5">
                Accounting
                </Typography>
                <Typography variant="subtitle2">
                   March 1, 2020 - April 31, 2021
                </Typography>
                    </div>
                </div>
        
            
            </Box>
        </Paper>
    )
}

export default Accounting
