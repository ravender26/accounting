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
import AddProjectForm from "./AddProjectForm";
import { addProjectAction } from "../../redux/actions/projects";
import { Link } from "react-router-dom";

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
    <Container fixed className={classes.wrapper}>
      <Box paddingY={4}>
        <Typography gutterBottom variant="h5">
          Projects List
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
          <div>
            <Link to="/add-task">tasks</Link>
          </div>
          <div>
            <Link to="/add-client">clients</Link>
          </div>
        </Box>
        {!!projects.length && (
          <Box>
            {projects.map((item) => (
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
    </Container>
  );
};

export default CreateNewProject;
