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
import AddProjectForm from "./AddProjectForm";
import { addProjectAction } from "../../redux/actions/projects";
import Heading from "./../common/Heading";

const useStyles = makeStyles((theme) => ({}));

const CreateNewProject = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { clients, projects } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const SubmitProjectData = (data) => {
    handleClose();
    dispatch(addProjectAction(data));
  };
  return (
    <Box paddingBottom={3}>
      <Heading name="Projects List" />
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
      {!!projects.length && (
        <Grid container spacing={2}>
          {projects.map((item) => (
            <Grid item sm={12} md={6} key={item.id}>
              <Card className={classes.card}>
                <Box paddingY={1} paddingX={3}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="subtitle1">
                    {item.description}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      {open && (
        <FormModal
          title="Add New Project"
          open={open}
          handleClose={handleClose}
        >
          <AddProjectForm
            clients={clients}
            SubmitProjectData={SubmitProjectData}
          />
        </FormModal>
      )}
    </Box>
  );
};

export default CreateNewProject;
