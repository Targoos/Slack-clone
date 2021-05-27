import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Body from "../components/Body/Body";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const AppRouter = () => {
  const logueado = true;
  const noLogueado = false;

  return (
    <Router>
      <Switch>
        <Route path="/" exact></Route>
      </Switch>
      <Switch>
        <PublicRoute
          path="/auth"
          isAuthenticated={logueado}
          component={AuthRouter}
        />
        <PrivateRoute
          exact
          path="/"
          isAuthenticated={logueado}
          component={Body}
        />
        <Redirect to="/auth/login" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
