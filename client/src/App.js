import React from "react";
import "bootstrap/dist/css/bootstrap.css";

//Routes
import { Route, Switch } from "react-router-dom";

//Components
import Comment from "./pages/Comment/Comment";
import DashBoard from "./pages/DashBoard/DashBoard";
import Home from "./pages/Home/Home";


const App = () => (
  <Switch>
    <Route path="/comments" component={Comment} />
    <Route path="/members" component={DashBoard} />
    <Route path="/" exact component={Home} />
  </Switch>
);
export default App;
