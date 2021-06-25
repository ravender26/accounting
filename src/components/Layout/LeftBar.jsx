import { IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import SmsIcon from "@material-ui/icons/Sms";

const useStyles = makeStyles({
  root: {
    width: 120,
    backgroundColor: "#e6e6e6",
    padding: "20px 5px",
  },
});

const LeftBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton aria-label="delete">
        <SmsIcon />
      </IconButton>
      <IconButton aria-label="delete">
        <SmsIcon />
      </IconButton>
      <IconButton aria-label="delete">
        <SmsIcon />
      </IconButton>
      <IconButton aria-label="delete">
        <SmsIcon />
      </IconButton>
      <IconButton aria-label="delete">
        <SmsIcon />
      </IconButton>
      <IconButton aria-label="delete">
        <SmsIcon />
      </IconButton>
      <IconButton aria-label="delete">
        <SmsIcon />
      </IconButton>
      <IconButton aria-label="delete">
        <SmsIcon />
      </IconButton>
    </div>
  );
};

export default LeftBar;
