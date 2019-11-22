import React from "react";
import HomeNavBar from "../../components/HomeNavBar/HomeNavBar";
import CartContent from "../../components/CartContent/CartContent";

class MyCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: props.currentUser,
      productsToBuy: [],
      tripsToBuy: [],
      totalCost: 0
    };
  }

  componentDidMount() {
    const productsToBuy = JSON.parse(localStorage.getItem("productsToBuy"));
    const tripsToBuy = JSON.parse(localStorage.getItem("tripsToBuy"));
    // const currentUser = this.props.currentUser;

    // console.log(this.state.currentUser)
    // console.log(productsToBuy)
    // await this.setState({currentUser: this.props.currentUser});
    // console.log(this.state.currentUser)
    let totalCost = 0;
    if (productsToBuy) {
      productsToBuy.forEach(item => {
        let subCost = item.product_amount * item.product_price;
        totalCost += subCost;
      });
    }

    if (tripsToBuy) {
      tripsToBuy.forEach(trip => {
        let tripCost = trip.trip_amount * trip.trip_price;
        totalCost += tripCost;
      });
    }

    totalCost = JSON.stringify(totalCost);
    localStorage.setItem("totalCost", totalCost);

    this.setState({
      productsToBuy: productsToBuy,
      tripsToBuy: tripsToBuy,
      totalCost: totalCost
    });
  }

  delete = result => {
    this.setState({ productsToBuy: result });
  };

  count1 = aaa => {
    this.setState({ productsToBuy: aaa });
  };

  count2 = aaa => {
    this.setState({ productsToBuy: aaa });
  };

  setTripState = result => {
    this.setState({ tripsToBuy: result });
  };

  countTotalCost = cost => {
    this.setState({ totalCost: cost });
  };

  render() {
    //解構付值props
    const { currentUser } = this.props;
    console.log(!currentUser);

    if (!currentUser) {
      return <h1>請登入</h1>;
    } else {
      //複製props
      let obj = { ...currentUser };
      //解構付值obj
      let { user } = obj;
      console.log(user);
      //複製user
      let uid = { ...user };
      // // 複製u_id
      let user_id = uid.u_id;
      // console.log(email.email);
      // console.log(user_id);
      localStorage.setItem("userId", user_id);

      return (
        <>
          <HomeNavBar currentUser={this.props.currenUser} />
          <CartContent
            data={this.state.productsToBuy}
            tripData={this.state.tripsToBuy}
            totalCost={this.state.totalCost}
            delete={this.delete}
            count1={this.count1}
            count2={this.count2}
            countTotalCost={this.countTotalCost}
            setTripState={this.setTripState}
          />
        </>
      );
    }
  }
}

export default MyCart;
