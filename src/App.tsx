import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {Routes.map((entry, i) => (
          <Route {...entry} key={i} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
