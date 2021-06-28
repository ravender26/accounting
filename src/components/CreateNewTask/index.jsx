import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Card,
  Container,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import FormModal from "./../common/FormModal";
import AddTaskForm from "./AddTaskForm";
import { addTaskAction } from "../../redux/actions/tasks";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
  },
  card: {
    marginBottom: "20px",
    width: "35%",
  },
}));

const CreateNewTask = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { tasks, projects } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const SubmitTaskData = (data) => {
    handleClose();
    dispatch(addTaskAction(data));
  };
  return (
    <Container fixed className={classes.wrapper}>
      <Box paddingY={4}>
        <Typography gutterBottom variant="h5">
          Tasks List
        </Typography>
        <Box marginBottom={5} marginTop={3}>
          <Button
            size="small"
            variant="contained"
            color="primary"
            disableElevation
            onClick={handleClickOpen}
          >
            +Add
          </Button>
        </Box>
        {!!tasks.length && (
          <Box>
            {tasks.map((item) => (
              <Card key={item.id} className={classes.card} variant="outlined">
                <Box paddingY={1} paddingX={3}>
                  <Typography variant="h6">{item.name}</Typography>
                </Box>
              </Card>
            ))}
          </Box>
        )}
      </Box>
      {open && (
        <FormModal title="Add New Task" open={open} handleClose={handleClose}>
          <AddTaskForm projects={projects} SubmitTaskData={SubmitTaskData} />
        </FormModal>
      )}
    </Container>
  );
};

export default CreateNewTask;
