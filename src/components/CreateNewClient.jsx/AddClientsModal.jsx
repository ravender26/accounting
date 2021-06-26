import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import {
  Box,
  TextField,
  Button,
  makeStyles,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListSubheader,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  grow: {
    flexGrow: 1,
  },
  marginLeft: {
    marginLeft: "10px",
    height: "100%",
  },
  justifyBetween: {
    display: "flex",
    justifyContent: "space-between",
  },
  marginZero: {
    margin: 0,
  },
  marginTop: {
    marginTop: "8px",
  },
  list: {
    backgroundColor: theme.palette.background.default,
  },
}));

const AddClientsModal = ({ open, handleClose, addClient }) => {
  const classes = useStyles();
  const [taskList, settaskList] = useState([]);
  const [task, setTask] = useState("");
  const { register, handleSubmit } = useForm();

  const addTask = (e) => {
    setTask(e.target.value);
  };

  const addTaskToList = () => {
    if (task.length) {
      let temp = [...taskList];
      temp.push(task);
      settaskList(temp);
      setTask("");
    }
  };

  const removeTasksFromList = (index) => {
    let temp = [...taskList];
    temp.splice(index, 1);
    settaskList(temp);
  };

  const submitData = (data) => {
    console.log(data);
    console.log(taskList);
    addClient(data, taskList);
    handleClose();
  };
  return (
    <Dialog maxWidth="lg" open={open} onClose={handleClose}>
      <Box paddingY={2} paddingX={4}>
        <form onSubmit={handleSubmit(submitData)}>
          <TextField
            {...register("companyName")}
            fullWidth
            label="Company name"
            margin="dense"
            variant="outlined"
          />
          <TextField
            {...register("email")}
            fullWidth
            // type="email"
            label="Email address"
            margin="dense"
            variant="outlined"
          />
          <TextField
            {...register("projectName")}
            fullWidth
            label="Project name"
            margin="dense"
            variant="outlined"
          />
          <div className={classes.root}>
            <Box className={`${classes.grow} ${classes.marginTop}`}>
              <TextField
                fullWidth
                className={classes.marginZero}
                label="Task"
                margin="dense"
                variant="outlined"
                onChange={addTask}
                value={task}
              />
            </Box>

            <Box className={classes.marginTop}>
              <Button
                className={classes.marginLeft}
                size="small"
                variant="contained"
                color="primary"
                disableElevation
                onClick={addTaskToList}
              >
                +Add task
              </Button>
            </Box>
          </div>

          <Box marginTop={2} marginBottom={4}>
            <List
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Tasks List
                </ListSubheader>
              }
              className={classes.list}
              dense
            >
              {!!taskList.length &&
                taskList.map((item, index) => (
                  <ListItem key={item}>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={item} />
                    <ListItemSecondaryAction>
                      <IconButton onClick={() => removeTasksFromList(index)}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
            </List>
          </Box>

          <Box className={classes.justifyBetween}>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              onClick={handleClose}
            >
              cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disableElevation
            >
              save
            </Button>
          </Box>
        </form>
      </Box>
    </Dialog>
  );
};

export default AddClientsModal;
