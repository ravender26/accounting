import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Card,
  Grid,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import FormModal from "./../common/FormModal";
import AddTaskForm from "./AddTaskForm";
import { addTaskAction } from "../../redux/actions/tasks";
import Heading from "./../common/Heading";

const useStyles = makeStyles((theme) => ({}));

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
    <Box paddingBottom={3}>
      <Heading name="Tasks List" />
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
        <Grid container spacing={2}>
          {tasks.map((item) => (
            <Grid item sm={12} md={6} key={item.id}>
              <Card className={classes.card}>
                <Box paddingY={1} paddingX={3}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="subtitle1">{item.summary}</Typography>
                  <Typography variant="subtitle2">
                    Hourly Price - ${item.hourlyPrice}
                  </Typography>
                  <Typography variant="subtitle2">
                    Time Taken - {item.timeTaken}h
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      {open && (
        <FormModal title="Add New Task" open={open} handleClose={handleClose}>
          <AddTaskForm projects={projects} SubmitTaskData={SubmitTaskData} />
        </FormModal>
      )}
    </Box>
  );
};

export default CreateNewTask;
