import React, { Component } from "react";
// Components
import NavBarHome from "../../components/HomeNavBar/HomeNavBar";
// import DashBoard from "../DashBoard/DashBoard";
import HomeMainCarousel from "../../components/HomeMainCarousel/HomeMainCarousel";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBarHome />
        <HomeMainCarousel />
      </>
    );
  }
}

export default Home;
