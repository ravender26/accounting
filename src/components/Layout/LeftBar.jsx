import { IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import SubtitlesOutlinedIcon from "@material-ui/icons/SubtitlesOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import AssignmentIndOutlinedIcon from "@material-ui/icons/AssignmentIndOutlined";
import BallotOutlinedIcon from "@material-ui/icons/BallotOutlined";
import BuildIcon from "@material-ui/icons/Build";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "120px",
    backgroundColor: theme.palette.background.default,
    padding: "20px 5px",
  },
  buttonStyle: {
    // color: "white",
    fontSize: "25px",
  },
}));

const LeftBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton aria-label="delete">
        <SubtitlesOutlinedIcon className={classes.buttonStyle} />
      </IconButton>
      <IconButton aria-label="delete">
        <ChatBubbleOutlineOutlinedIcon className={classes.buttonStyle} />
      </IconButton>
      <IconButton aria-label="delete">
        <AssignmentOutlinedIcon className={classes.buttonStyle} />
      </IconButton>
      <IconButton aria-label="delete">
        <DateRangeOutlinedIcon className={classes.buttonStyle} />
      </IconButton>
      <IconButton aria-label="delete">
        <BallotOutlinedIcon className={classes.buttonStyle} />
      </IconButton>
      <IconButton aria-label="delete">
        <AssignmentIndOutlinedIcon className={classes.buttonStyle} />
      </IconButton>
      <IconButton aria-label="delete">
        <BuildIcon className={classes.buttonStyle} />
      </IconButton>
      <IconButton aria-label="delete">
        <PermIdentityOutlinedIcon className={classes.buttonStyle} />
      </IconButton>
      <IconButton>
        <SettingsIcon className={classes.buttonStyle} />
      </IconButton>
      <IconButton>
        <DoubleArrowIcon className={classes.buttonStyle} />
      </IconButton>
    </div>
  );
};

export default LeftBar;
