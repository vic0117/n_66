import React, { Component } from "react";
// Components

// import HomeNavBar from "../../components/HomeNavBar/HomeNavBar";
// import HomeMainCarousel from "../../components/HomeMainCarousel/HomeMainCarousel";
// import FilterHome from '../../components/FilterHome/FilterHome';
// import ReviewCarousel from '../../components/ReviewCarousel/ReviewCarousel'
import Login from '../Login/Login';

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <Login/>
        {/* <HomeNavBar/> */}
        {/* <HomeMainCarousel /> */}
        {/* <FilterHome/> */}
        {/* <ReviewCarousel/> */}
      </>
    );
  }
}

export default Home;
