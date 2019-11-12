import React, { Component } from "react";
// Components
import HomeNavBar from "../../components/HomeNavBar/HomeNavBar";
import HomeMainCarousel from "../../components/HomeMainCarousel/HomeMainCarousel";
import HomeFilter from "../../components/HomeFilter/HomeFilter";
import HomeReviewCarousel from "../../components/HomeReviewCarousel/HomeReviewCarousel";
import HomeTravelCarousel from "../../components/HomeTravelCarousel/HomeTravelCarousel";
import HomeAdviser from "../../components/HomeAdviser/HomeAdviser";
import HomeEarth from "../../components/HomeEarth/HomeEarth";
import Footer from "../../components/Footer/Footer";
class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <HomeNavBar />
        <HomeMainCarousel />
        <HomeFilter />
        <HomeTravelCarousel />
        <HomeAdviser />
        <HomeEarth />
        <HomeReviewCarousel />
        <Footer />
      </>
    );
  }
}

export default Home;
