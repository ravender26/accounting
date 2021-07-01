import { Paper, Box, Typography, makeStyles } from '@material-ui/core'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CallMadeIcon from '@material-ui/icons/CallMade'; 
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

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
     justifyContent:'space-around ',
     boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"

        
        
    },
    priceStyle:{
      fontWeight:'bold',
      
    },
}));

function Accounting() {
    const classes = useStyles();
    return (
        <Paper>
            <Box p={1} >
                <div className={classes.flexWrap}>
                    <Grid container spacing={1}>
                  <Grid item sm={6} xs={12}>
                <Typography variant="h5">
                <strong>Accounting</strong>
                </Typography>
                <Typography color="textSecondary" variant="subtitle2">
                   March 1, 2020 - April 31, 2021
                </Typography>
                <Typography variant="subtitle2" style={{marginTop:'20px'}}>
                   AVG. Monthly Income
                  
                </Typography>
                <Typography variant="h4" style={{fontWeight:'bold'}}>
                $5,849.36
                </Typography>
                <Typography variant="subtitle2" style={{marginTop:'10px'}}>
               <span style={{color:'#5F997A'}}>  <CallMadeIcon style={{fontSize:'15px'}}/>3.89%</span> vs $596.696 prev. 90days
                </Typography>
             
                </Grid>

            <Grid item sm={6} xs={12}   >
                <Bar data={data} />
                </Grid>
                </Grid>
                </div>
                <hr />
                <div className={classes.flexWrap}>
                    
                    <Grid container spacing={1}>
                    <Grid item sm={6} xs={12}>
                <Typography variant="h4" className={classes.priceStyle}>
                <AttachMoneyIcon style={{fontSize:'35px',color:'green', boxShadow:"0 5px 5px -5px",borderRadius:'50px'}}/>        
                $89,240.38
                </Typography>
                
                <Typography variant="subtitle2">
                   March 1, 2020 - April 31, 2021
                </Typography>
                  
                </Grid>
                <Grid item sm={6} xs={12}>
                    <div>
                    <Typography variant="h4" className={classes.priceStyle}>
                    <AttachMoneyIcon style={{fontSize:'35px',color:'red', boxShadow:"0 5px 5px -5px",borderRadius:'50px'}}/>        
               $16,237.82
                </Typography>
                <Typography variant="subtitle2">
                   March 1, 2020 - April 31, 2021
                </Typography>
                    </div>
                    </Grid>

                  
                  </Grid>
                
              </div>
            
            </Box>
        </Paper>
    )
}

export default Accounting
