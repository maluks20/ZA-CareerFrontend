import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Job from "./components/job";
// import Home from "./components/Home";
// // import NavBar from "./components/NavBar";
// // import Project from "./components/Project";
import JobPost from "./components/SingleJob";
import Home from "./components/Ap"


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={JobPost} path="/job/:slug" />
        <Route component={Job} path="/job" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;