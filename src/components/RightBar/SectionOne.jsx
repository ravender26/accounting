import { Avatar, Badge, Box } from "@material-ui/core";
import MailIcon from "@material-ui/icons/MailOutline";
import InboxIcon from "@material-ui/icons/InboxRounded";
import avatarImg from "../../assets/images/1.jpg";
import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  flexWrap: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  simpleFlex:{
      display:'flex'
  }
}));

const SectionOne = () => {
  const classes = useStyles();
  return (
      <Box borderBottom={1} p={2}>
        <div className={classes.flexWrap}>
          <div className={classes.simpleFlex}>
            <InboxIcon />
            <Badge badgeContent={4} color="primary">
              <MailIcon />
            </Badge>
          </div>
          <div className={classes.simpleFlex}>
            <div>
              <Typography variant="subtitle1">Maurice Robin</Typography>
              <Typography variant="subtitle2">Manager</Typography>
            </div>
            <Avatar alt="Remy Sharp" src={avatarImg} />
          </div>
        </div>
      </Box>
   
  );
};

export default SectionOne;
