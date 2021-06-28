import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout/index";
import CreateNewClient from "./components/CreateNewClient.jsx/index";
import { Provider } from "react-redux";
import store from "./redux/storeConfig/store";
import CreateNewProject from "./components/CreateNewProject/index";
import CreateNewTask from "./components/CreateNewTask/index";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Layout>
              <Dashboard />
            </Layout>
          </Route>
          <Route path="/add-client">
            <CreateNewClient />
          </Route>
          <Route path="/add-project">
            <CreateNewProject />
          </Route>
          <Route path="/add-task">
            <CreateNewTask />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
