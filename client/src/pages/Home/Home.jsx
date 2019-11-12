import React, { Component } from "react";
// Components

import HomeNavBar from "../../components/HomeNavBar/HomeNavBar";
import HomeMainCarousel from "../../components/HomeMainCarousel/HomeMainCarousel";
import FilterHome from '../../components/FilterHome/FilterHome';
// import ReviewCarousel from '../../components/ReviewCarousel/ReviewCarousel'
import HomeTravelCarousel from '../../components/HomeTravelCarousel/HomeTravelCarousel';

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        
        <HomeNavBar/>
        <HomeMainCarousel />
        <FilterHome/>
        <HomeTravelCarousel/>
        {/* <ReviewCarousel/> */}
      </>
    );
  }
}

export default Home;
