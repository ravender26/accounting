import { Avatar, Box, IconButton } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import avatarImg from "../../assets/images/1.jpg";

const useStyles = makeStyles((theme) => ({
    flexWrap: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }
  }));

const SectionFour = () => {
    const classes = useStyles();
    return (
        <Box borderBottom={1} p={2}>
       <div className={classes.flexWrap}>
       <Typography variant="h6">
            <strong>Recent Activities</strong>
        </Typography>
        <IconButton>
        <MoreHorizIcon />
        </IconButton>
       </div>
       <div className={classes.flexWrap}>
       <Avatar alt="Remy Sharp" src={avatarImg} />
       <p>Lorem ipsum dolor sit amet consectetur</p>
       </div>

      </Box>
    )
}

export default SectionFour
