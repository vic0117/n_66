import React from "react";
import "bootstrap/dist/css/bootstrap.css";

//Routes
import { Route, Switch } from "react-router-dom";

//Components
import Comment from "./pages/Comment/Comment";
import DashBoard from "./pages/DashBoard/DashBoard";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

const App = () => (
  <Switch>
    <Route path="/comments" component={Comment} />
    <Route path="/members" component={DashBoard} />
    <Route path="/" exact component={Home} />
  </Switch>
  // <Login />
);
export default App;
