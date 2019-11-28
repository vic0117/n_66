 import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import CheckOutContent from "../../components/CheckOutContent/CheckOutContent";
// import CheckOutContentNew from '../../components/CheckOutContentNew/CheckOutContentNew'

class CheckOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsToBuy: [],
      tripsToBuy: [],
      totalCost: 0,
      userId: "",
      hasCoupon: [],
      userInfo: false
    };
  }

  componentDidMount() {
   document.title = "66°N - 結帳";
    const productsToBuy =
      JSON.parse(localStorage.getItem("productsToBuy")) || [];
    const tripsToBuy = JSON.parse(localStorage.getItem("tripsToBuy")) || [];
    const totalCost = JSON.parse(localStorage.getItem("totalCost"));
    const userId = JSON.parse(localStorage.getItem("userId"));

    let user = {
      userId: userId
    };

    //尋找使用者持有的折價卷 和 地址 姓名
    fetch("http://localhost:3001/checkout/findCoupon", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(result => {
        return result.json();
      })
      .then(json => {
        console.log(json);
        let hasCoupon = json;
        let userInfo = json.userInfo[0];
        // console.log(userInfo)
        // let userInfoArray = [userInfo.address, userInfo.]
        this.setState({
          productsToBuy: productsToBuy,
          tripsToBuy: tripsToBuy,
          totalCost: totalCost,
          userId: userId,
          hasCoupon: hasCoupon,
          userInfo: userInfo
        });
      });
  }

  render() {
    const { currentUser } = this.props;
    console.log(currentUser);

    return (
      <>
        <NavBar
          currentUser={this.props.currentUser}
          changeNumOfProduct={this.props.changeNumOfProduct}
          numberOfProducts={this.props.numberOfProducts}
        />
        <CheckOutContent
          productsToBuy={this.state.productsToBuy}
          tripsToBuy={this.state.tripsToBuy}
          totalCost={this.state.totalCost}
          userId={this.state.userId}
          hasCoupon={this.state.hasCoupon}
          numberOfProducts={this.props.numberOfProducts}
          changeNumOfProduct={this.props.changeNumOfProduct}
          userInfo={this.state.userInfo}
        />
      </>
    );
  }
}

export default CheckOut;
