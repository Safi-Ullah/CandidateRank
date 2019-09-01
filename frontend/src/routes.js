import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ROUTE_URLS, BASE_ROUTE } from "./constants";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Home } from "./components/Home";

export const Routes = <Switch>
    <Route exact path={BASE_ROUTE} render={() => <Redirect to={ROUTE_URLS.login}/>}/>
    <Route exact path={ROUTE_URLS.login} component={Login} />
    <Route path={ROUTE_URLS.signup} component={Signup} />
    <Route path={ROUTE_URLS.home} component={Home} />
</Switch>;
