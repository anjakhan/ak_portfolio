import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import WorkPage from "views/WorkPage/WorkPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" exact component={ProfilePage} />
      <Route path="/work-page" component={WorkPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
