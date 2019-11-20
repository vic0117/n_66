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
import message from './images/comment-dots-solid.svg'
import './Home.scss'
import Join from "../socketClient/Join";
import Chat from "../socketClient/Chat";
class Home extends Component {
  state = {
	  system:false,
	  name:'',
	  room:''
  };

  
  render() {
    return (
      <>
			<div className="MessageButton" onClick={()=>this.setState({system:!this.state.system})}>
				<img src={message}/>	
			</div>
			<div className={this.state.system ? ' messageIn' : 'messageInOpen messageIn'}>
				<Join className='joinContent'/>
			</div>
			<div>
				<Chat />
			</div>
        <HomeNavBar currentUser={this.props.currentUser}/>
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
