import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ProductsDetail: [],
      Pictures: []
    };
  }

  componentDidMount() {
    // console.log(`http://localhost:3001/products/${this.props.match.params.id}`)
    fetch(`http://localhost:3001/products/${this.props.match.params.id}`)
      .then(response => {
        return response.json();
        // return console.log(response);
      })
      .then(json => {
        console.log(json);
        let picsJsonString = json[0].product_pictures;
        // console.log(picsJsonString);
        let picArray = JSON.parse(picsJsonString);
        // console.log(picArray)

        this.setState(
          {
            ProductsDetail: json,
            Pictures: picArray
          },
          function() {
            console.log(this.state);
          }
        );
      });
    // console.log(this.props.currentUser);
  }

  handelAddWish = async () => {
    const productsDetail = { ...this.state.ProductsDetail[0] };
    const currentUser = { ...this.props.currentUser };
    const user = { ...currentUser.user };
    const obj = {
      u_id: user.u_id,
      product_label: productsDetail.product_brand,
      product_name: productsDetail.product_name,
      product_info: productsDetail.product_size,
      product_img: this.state.Pictures[0],
      product_price: productsDetail.product_price,
      trip_start_date: "",
      trip_end_date: "",
      liked: 1
    };
    const { data } = axios
      .post("http://localhost:3001/products/add_wishlist", obj)
      .then(res => {
        console.log(res.data);
        this.setState({ feedback: res.data });
        if (this.state.feedback.success) {
          toast.success(this.state.feedback.msg.text);
        } else {
          toast.error(this.state.feedback.msg.text);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <NavBar />
        <ProductCarousel
          data={this.state.ProductsDetail}
          pics={this.state.Pictures}
          addWish={this.handelAddWish}
        />
        {/* <h1>{this.state.Pictures}</h1> */}
        <ToastContainer />
      </>
    );
  }
}

export default ProductDetail;
