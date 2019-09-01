import React from "react";
import { Route, Switch } from "react-router-dom";
import { ROUTE_URLS } from "./constants";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Home } from "./components/Home";

export const Routes = <Switch>
    <Route exact path={ROUTE_URLS.login} component={Login} />
    <Route path={ROUTE_URLS.signup} component={Signup} />
    <Route path={ROUTE_URLS.home} component={Home} />
</Switch>;
