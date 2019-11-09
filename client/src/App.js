import React from "react";
import "bootstrap/dist/css/bootstrap.css";

//Routes
import { Route, Switch } from "react-router-dom";

//Components
import Comment from "./pages/Comment/Comment";
import DashBoard from "./pages/DashBoard/DashBoard";
import Home from "./pages/Home/Home";

import RegisterTest from "./components/RegisterTest/RegisterTest";
import LoginTest from "./components/LoginTest/LoginTest";

const App = () => (
  // <Switch>
  //   <Route path="/comments" component={Comment} />
  //   <Route path="/members" component={DashBoard} />
  //   <Route path="/" exact component={Home} />
  // </Switch>
  // <RegisterTest />
  <LoginTest />
);
export default App;
