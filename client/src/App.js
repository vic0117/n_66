import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"; // 這個位置不能動!!
//Components
import Comment from "./pages/Comment/Comment";
import DashBoard from "./pages/DashBoard/DashBoard";
import Home from "./pages/Home/Home";
import TripDesNav from './components/TripDesNav/TripDesNav';
import N66navbar from './components/TripDesNav/N66navbar';


// test
import RegisterTest from "./components/RegisterTest/RegisterTest";
import LoginTest from "./components/LoginTest/LoginTest";



class App extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const userInfo = jwtDecode(jwt);
      console.log(userInfo);
      this.setState({ userInfo });
    } catch (error) { }
  }

  render() {
    return (
      <Switch>
        <Route path="/comments" component={Comment} />
        <Route
          path="/login"
          render={props => (
            <LoginTest {...props} userInfo={this.state.userInfo} />
          )}
        />
        <Route
          path="/account"
          userInfo={this.state.userInfo}
          component={DashBoard}
        />
        <Route path="/" exact component={Home} />
      </Switch>
    );
  }
}

export default App;
