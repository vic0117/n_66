import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import { axios } from "axios";
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
  }

  handelAddWish = async () => {
    console.log("clicked");
    const obj = {
      u_id: "",
      product_label: "",
      product_name: "",
      product_info: "",
      product_img: "",
      trip_start_date: "",
      trip_end_date: "",
      liked: 0
    };
    const { data } = await axios.post(
      "http://localhost:3001/products/add_wishlist",
      obj
    );
  };

  render() {
    console.log(this.state);
    return (
      <>
        <NavBar />
        <ProductCarousel
          data={this.state.ProductsDetail}
          pics={this.state.Pictures}
          addWish={this.handelAddWish}
        />
        {/* <h1>{this.state.Pictures}</h1> */}
      </>
    );
  }
}

export default ProductDetail;
