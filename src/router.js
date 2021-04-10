import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Edit from "./pages/edit/edit";
import Add from "./pages/add/add";
import NotFound from "./pages/notFound";
import { PrivateRoute } from "./components/privateRoute";
import history from "./utils/helpers/history";

const RouterComponent = () => {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/add" exact component={Add} />
        <PrivateRoute path="/user/:id/edit" exact component={Edit} />
        <Route path="/login" exact component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};
export default RouterComponent;
