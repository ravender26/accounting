// ** Redux Imports
import { combineReducers } from "redux";

// ** Reducers Imports
import clients from "./clients";
import tasks from "./tasks";
import projects from "./projects";

const rootReducer = combineReducers({
  clients,
  tasks,
  projects,
});

export default rootReducer;
