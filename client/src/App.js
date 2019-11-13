import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"; // 這個位置不能動!!

//Components
import Comment from "./pages/Comment/Comment";
import DashBoard from "./pages/DashBoard/DashBoard";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Logout from "./components/Logout/Logout";

// test
// import RegisterTest from "./components/RegisterTest/RegisterTest";
// import LoginTest from "./components/LoginTest/LoginTest";

class App extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const currentUser = jwtDecode(jwt);
      console.log(currentUser);
      this.setState({ currentUser });
    } catch (error) {}
  }

  render() {
    return (
      <Switch>
        <Route path="/comments" component={Comment} />
        <Route path="/logout" component={Logout} />
        <Route
          path="/login"
          render={props => (
            <Login {...props} currentUser={this.state.currentUser} />
          )}
        />
        <Route
          path="/account"
          render={props => (
            <DashBoard {...props} currentUser={this.state.currentUser} />
          )}
        />
        <Route
          path="/"
          exact
          render={props => (
            <Home {...props} currentUser={this.state.currentUser} />
          )}
        />
      </Switch>
    );
  }
}

export default App;
