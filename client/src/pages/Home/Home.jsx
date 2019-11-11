import React, { Component } from "react";
// Components

import HomeNavBar from "../../components/HomeNavBar/HomeNavBar";
// import DashBoard from "../DashBoard/DashBoard";
import HomeMainCarousel from "../../components/HomeMainCarousel/HomeMainCarousel";
import FilterHome from '../../components/FilterHome/FilterHome';
import ReviewCarousel from '../../components/ReviewCarousel/ReviewCarousel'


class Home extends Component {
  state = {};
  render() {
    return (
      <>
        
        <HomeNavBar/>
        <HomeMainCarousel />
        <FilterHome/>
        <ReviewCarousel/>
      </>
    );
  }
}

export default Home;
