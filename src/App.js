import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Layout from './components/Layout/index';
import CreateNewClient from './components/CreateNewClient.jsx/index';

function App() {
  return (
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

        </Switch>
     
    </Router>

  );
}

export default App;
