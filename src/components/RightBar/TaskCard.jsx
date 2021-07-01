import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import shadows from '@material-ui/core/styles/shadows';

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom:'15px',
      
    },
    simpleFlex:{
        display:'flex'
    },
    card:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor:'#2153DD',
        borderRadius:'15px',
        paddingLeft:"10px",
        paddingRight:"30px",
        paddingTop:"5px",
        paddingBottom:"5px",
        boxShadow:"0 5px 5px -5px",
    },
    cardStyle:{
        borderRadius:"15p",
        backgroundColor:"white",
        padding:"8px",
        borderRadius:"50px",
        
    },
    cardTitle:{
       color:"white",
       paddingLeft:"5px"

    },
  }));

const TaskCard = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <p>9:30 am</p>
            </div>
            <div className={classes.card}>
                <AssignmentTurnedInOutlinedIcon className={classes.cardStyle}/>
                <div>
                <Typography variant="subtitle1" className={classes.cardTitle}>Monthly - Landscaping</Typography>
                 <Typography variant="subtitle2" className={classes.cardTitle}>Internal Task</Typography>
                </div>
            </div>
        </div>
    )
}

export default TaskCard
