import React from "react";
import HomeNavBar from "../../components/HomeNavBar/HomeNavBar";
import CartContent from "../../components/CartContent/CartContent";

class MyCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: props.currentUser,
      productsToBuy: [],
      numberOfProducts: "",
      tripsToBuy: [],
      totalCost: 0
    };
  }

  componentDidMount() {
    document.title = "66°N - 我的購物車";

    const productsToBuy =
      JSON.parse(localStorage.getItem("productsToBuy")) || [];
    const tripsToBuy = JSON.parse(localStorage.getItem("tripsToBuy")) || [];
    let numberOfProducts = productsToBuy.length + tripsToBuy.length;

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
      numberOfProducts: JSON.stringify(numberOfProducts),
      tripsToBuy: tripsToBuy,
      totalCost: totalCost
    });
  }

    render() {
        //解構付值props
        const { currentUser } = this.props

        if (!currentUser) {
            return (
                <h1>請登入</h1>
            )
        }
        else {
            //複製props
            let obj = { ...currentUser };
            //解構付值obj
            let { user } = obj;
            //複製user
            let uid = { ...user };
            let user_id = uid.u_id;
            localStorage.setItem('userId', user_id);

            return (
                <>
                    <HomeNavBar 
                        currentUser={this.props.currentUser}
                        numberOfProducts={this.props.numberOfProducts}
                        changeNumOfProduct={this.props.changeNumOfProduct}
                        />
                    <CartContent
                        data={this.state.productsToBuy}
                        tripData={this.state.tripsToBuy}
                        totalCost={this.state.totalCost}
                        delete={this.delete}
                        count1={this.count1}
                        count2={this.count2}
                        countTotalCost={this.countTotalCost}
                        setTripState={this.setTripState}
                        numberOfProducts = {this.props.numberOfProducts}
                        changeNumOfProduct={this.props.changeNumOfProduct}
                    />
                </>
            );
        }
    }
  }
}

export default MyCart;
