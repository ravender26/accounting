import { makeStyles } from '@material-ui/core';
import React from 'react'
import LeftBar from './LeftBar';
import Navbar from './Navbar';
import RightBar from './RightBar';

const useStyles = makeStyles({
    root: {
      display:'flex'
    },
    main:{
        flexGrow:1,
        
    }
  });

const Layout = ({children}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <LeftBar />
            <main className={classes.main}>
            <Navbar />
          
        {children}
            </main>
            <RightBar />
        </div>
    )
}

export default Layout
