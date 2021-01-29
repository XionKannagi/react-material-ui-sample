import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import ProductPage from "./components/pages/ProductPage";
import UsageStatsPage from "./components/pages/UsageStatsPage";

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/products" component={ProductPage} exact />
          <Route path="/usage-stats" component={UsageStatsPage} exact />
        </Switch>
      </Router>
    </React.StrictMode>
  );
};

export default App;
