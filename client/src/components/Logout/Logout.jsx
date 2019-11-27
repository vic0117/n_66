import { Component } from "react";
class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("token");
    localStorage.setItem("userId", "");
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default Logout;
