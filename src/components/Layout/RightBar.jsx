import { makeStyles } from '@material-ui/core';
import React from 'react'
import SectionFour from '../RightBar/SectionFour';
import SectionOne from '../RightBar/SectionOne';
import SectionThree from '../RightBar/SectionThree';
import SectionTwo from '../RightBar/SectionTwo';

const useStyles = makeStyles({
    root: {
      width:490,
      borderLeft:'1px solid gray',
    },
});

const RightBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
        </div>
    )
}

export default RightBar
