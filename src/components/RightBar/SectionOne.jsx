import { Avatar, Badge, Box } from "@material-ui/core";
import MailIcon from "@material-ui/icons/MailOutline";
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
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
      display:'flex',
      paddingTop:'10px',
      
  },
  iconStyle:{
       fontSize:'30px',
       color:"#FF9210",
  },
}));

const SectionOne = () => {
  const classes = useStyles();
  return (
      <Box  p={1}>
        <div className={classes.flexWrap}>
          <div className={classes.simpleFlex}>
            <OfflineBoltIcon className={classes.iconStyle}/>
            <Badge badgeContent={4} color="primary">
              <NotificationsNoneOutlinedIcon className={classes.iconStyle}/>
            </Badge>
          </div>
          <div className={classes.simpleFlex}>
            <div>
              <Typography variant="subtitle1" style={{marginRight:'5px'}}>Maurice Robin</Typography>
              <Typography variant="subtitle2">Manager</Typography>
            </div>
            <Avatar alt="Remy Sharp" src={avatarImg} />
          </div>
        </div>
      </Box>
   
  );
};

export default SectionOne;
