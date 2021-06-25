import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import CalenderIcon from "@material-ui/icons/CalendarToday";

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom:'15px'
    },
    simpleFlex:{
        display:'flex'
    },
    card:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor:'aqua',
        borderRadius:'15px',
        padding:'10px 15px'
    }
  }));

const TaskCard = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <p>9:30 am</p>
            </div>
            <div className={classes.card}>
                <CalenderIcon />
                <div>
                <Typography variant="subtitle1">Monthly - Landscaping</Typography>
                 <Typography variant="subtitle2">Internal Task</Typography>
                </div>
            </div>
        </div>
    )
}

export default TaskCard
