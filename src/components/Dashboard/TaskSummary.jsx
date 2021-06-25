import { Card, Typography, CardContent } from '@material-ui/core'
import { Paper, Box } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core';
import ShowChartIcon from '@material-ui/icons/ShowChart';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 125,
      },
    flexWrap:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    flexGrow:{
        flexGrow:1
    },
    fullHeight:{
        height:'100%'
    },
    margin:{
        marginTop:'30px'
    }
}));


const TaskSummary = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.fullHeight}>
              <Box p={2}>
              <Typography variant="h5">
                Task Summary
                </Typography>
                <div className={classes.flexWrap}>
                <Card className={classes.root}>
                    <CardContent>
                    <Typography variant="subtitle2">
                   New
                </Typography>
                <Typography variant="h5">
                3
                </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.root}>
                    <CardContent>
                    <Typography variant="subtitle2">
                   Assigned
                </Typography>
                <Typography variant="h5">
                16
                </Typography>
                    </CardContent>
                </Card>

                <Card className={classes.root}>
                    <CardContent>
                    <Typography variant="subtitle2">
                   Closed
                </Typography>
                <Typography variant="h5">
                36
                </Typography>
                    </CardContent>
                </Card>
                </div>
                <div className={`${classes.flexWrap} ${classes.margin}`}>
             <div>
             <Typography variant="subtitle2">
                   One Time Completion Rate
                </Typography>
                <Typography variant="h5">
                98% 2.72%
                </Typography>
             </div>
             <div>
                 <ShowChartIcon />
             </div>
                </div>
         
             
            </Box>
        </Paper>
    )
}

export default TaskSummary
