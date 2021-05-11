// //import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddUser from "./pages/Add";
import "./assets/mycss.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import "react-toastify/dist/ReactToastify.css";
import "react-bootstrap-table/dist/react-bootstrap-table.min.css";
import Update from "./pages/Update";

function App() {
  const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("isLogin") ? (
          <Component {...props} />
        ) : (
          <Redirect to={"/"} />
        )
      }
    />
  );
  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute
              exact={true}
              path="/Dashboard"
              component={Dashboard}
            />
            <PrivateRoute exact={true} path="/add-user" component={AddUser} />
            <PrivateRoute exact={true} path="/Update" component={Update} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
