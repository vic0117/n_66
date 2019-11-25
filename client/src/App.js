import React, { Component } from "react";
import jwtDecode from "jwt-decode";
import { Route, Switch, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"; // 這個位置不能動!!
import "font-awesome/css/font-awesome.css";

//Components
import Comment from "./pages/Comment/Comment";
import DashBoard from "./pages/DashBoard/DashBoard";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import UpdatePassword from "./components/UpdatePassword/UpdatePassword";

import Logout from "./components/Logout/Logout";
import TripMenuPage from "./pages/TripMenuPage/TripMenuPage";
import TripDesPage from "./pages/TripDesPage/TripDesPage";
// import Join from "./pages/socketClient/Join";
// import Chat from "./pages/socketClient/Chat";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

//ProductPages
import ProductList from "./pages/ProductList/ProductList";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import MyCart from "./pages/MyCart/MyCart";
import CheckOut from "./pages/CheckOut/CheckOut";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfProducts: ""
    };
  }

  state = {
    place: "",
    type: "",
    month: "",
    data: [],
    HomeSearch: false
  };

  componentDidMount() {
    //計算商品數量用
    let productsArray = JSON.parse(localStorage.getItem("productsToBuy")) || [];
    let tripsArray = JSON.parse(localStorage.getItem("tripsToBuy")) || [];

    let numberOfProducts = productsArray.length + tripsArray.length;
    if (numberOfProducts) {
      this.setState({ numberOfProducts: JSON.stringify(numberOfProducts) });
    }

    try {
      const jwt = localStorage.getItem("token");
      const currentUser = jwtDecode(jwt);
      console.log(currentUser);
      this.setState({ currentUser });
    } catch (error) {}
  }

  changeNumOfProduct = num => {
    this.setState({ numberOfProducts: num });
  };

  HomeSelect1 = eventKey => {
    this.setState({ place: eventKey });
  };
  HomeSelect2 = eventKey => {
    this.setState({ type: eventKey });
  };
  HomeSelect3 = eventKey => {
    this.setState({ month: eventKey });
  };
  HomeSearch = () => {
    this.setState({ HomeSearch: true });
  };
  
  render() {
    return (
      <ScrollToTop>
        <Switch>
          <Route
            path="/products"
            exact
            render={props => (
              <ProductList
                {...props}
                currentUser={this.state.currentUser}
                numberOfProducts={this.state.numberOfProducts}
                changeNumOfProduct={this.changeNumOfProduct}
              />
            )}
          />
          <Route
            path="/products/:id"
            exact
            render={props => (
              <ProductDetail
                {...props}
                currentUser={this.state.currentUser}
                numberOfProducts={this.state.numberOfProducts}
                changeNumOfProduct={this.changeNumOfProduct}
              />
            )}
          />
          <Route
            path="/cart"
            exact
            render={props => (
              <MyCart
                {...props}
                currentUser={this.state.currentUser}
                numberOfProducts={this.state.numberOfProducts}
                changeNumOfProduct={this.changeNumOfProduct}
              />
          )}
        />
        <Route
          path="/checkout"
          exact
          render={props => (
            <CheckOut {...props} 
            currentUser={this.state.currentUser} 
            numberOfProducts={this.state.numberOfProducts}
            changeNumOfProduct={this.changeNumOfProduct}/>
          )}
        />
        <Route
          path="/comments"
          render={props => <Comment {...props} 
            currentUser={this.state.currentUser} 
            numberOfProducts={this.state.numberOfProducts}
            changeNumOfProduct={this.changeNumOfProduct}/> 
          }
        />
        <Route path="/logout" component={Logout} />

        <Route
          path="/login"
          render={props => (
            <Login {...props} currentUser={this.state.currentUser} 
              numberOfProducts={this.state.numberOfProducts}
              changeNumOfProduct={this.changeNumOfProduct}/>
          )}
        />
        <Route
          path="/account"
          render={props => (
            <DashBoard {...props} currentUser={this.state.currentUser} 
              numberOfProducts={this.state.numberOfProducts}
              changeNumOfProduct={this.changeNumOfProduct}/>
          )}
        />
         <Route
            path="/trips/page/:page"
            exact
            render={props => (
              <TripMenuPage
                {...props}
                HomeSearch={this.HomeSearch}
                place={this.state.place}
                type={this.state.type}
                month={this.state.month}
                currentUser={this.state.currentUser}
                numberOfProducts={this.state.numberOfProducts}
                changeNumOfProduct={this.changeNumOfProduct}
              />
            )}
          />
          <Route
            path="/trips/page"
            exact
            render={props => (
              <TripMenuPage {...props} 
                currentUser={this.state.currentUser} 
                numberOfProducts={this.state.numberOfProducts}
                changeNumOfProduct={this.changeNumOfProduct}/>
            )}
          />
          <Route
            path="/trips/:id"
            exact
            render={props => (
              <TripDesPage {...props} 
                currentUser={this.state.currentUser} 
                numberOfProducts={this.state.numberOfProducts}
                changeNumOfProduct={this.changeNumOfProduct}/>
            )}
          />
       
          <Route
            path="/comments"
            render={props => 
              <Comment {...props}
              currentUser={this.state.currentUser}
              numberOfProducts={this.state.numberOfProducts} 
              numberOfProducts={this.state.numberOfProducts}/>}
          />
          <Route path="/logout" component={Logout} />

          <Route
            path="/password/recover"
            render={props => (
              <ForgotPassword {...props} currentUser={this.state.currentUser} />
            )}
          />

          <Route
            path="/password/reset/:userId/:token"
            render={props => (
              <UpdatePassword
                {...props}
                userId={props.match.params.userId}
                token={props.match.params.token}
              />
            )}
          />

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
            path="/trips/page/:page"
            exact
            render={props => (
              <TripMenuPage
                {...props}
                HomeSearch={this.HomeSearch}
                place={this.state.place}
                type={this.state.type}
                month={this.state.month}
                currentUser={this.state.currentUser}
              />
            )}
          />

          <Route
            path="/trips/page"
            exact
            render={props => (
              <TripMenuPage {...props} currentUser={this.state.currentUser} />
            )}
          />

          <Route
            path="/trips/:id"
            exact
            render={props => (
              <TripDesPage {...props} currentUser={this.state.currentUser} />
            )}
          />

          <Route
            path="/"
            exact
            render={props => (
              <Home
                {...props}
                currentUser={this.state.currentUser}
                numberOfProducts={this.state.numberOfProducts}
                HomeSelect1={this.HomeSelect1}
                HomeSelect2={this.HomeSelect2}
                HomeSelect3={this.HomeSelect3}
                HomeSearch={this.HomeSearch}
              />
            )}
          />
        </Switch>
      </ScrollToTop>
    );
  }
}

export default withRouter(App);
