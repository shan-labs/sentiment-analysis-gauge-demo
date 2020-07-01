import * as React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import HomePage, { HOME_PAGE_URL } from "pages/HomePage/HomePage";

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const Routes = () => (
  <Router>
    <Route component={ScrollToTop} />
    <Switch>
      <Route path={HOME_PAGE_URL} exact component={HomePage} />
    </Switch>
  </Router>
);

export default Routes;
