import React, { Component } from "react";
// Components

import NavBarHome from "../../components/NavBarHome/NavBarHome";
// import DashBoard from "../DashBoard/DashBoard";
import HomeMainCarousel from "../../components/HomeMainCarousel/HomeMainCarousel";
import FilterHome from '../../components/FilterHome/FilterHome';
import ReviewCarousel from '../../components/ReviewCarousel/ReviewCarousel'

import TripDesNav from '../../components/TripDesNav/TripDesNav';

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        
        <NavBarHome/>
        <HomeMainCarousel />
        <FilterHome/>
        <ReviewCarousel/>
        <TripDesNav/>
      </>
    );
  }
}

export default Home;
