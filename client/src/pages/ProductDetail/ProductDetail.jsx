import React from "react";
import NavBar from '../../components/NavBar/NavBar';
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel';



class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            
            ProductsDetail: [],
            Pictures: []
        }
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
      
              this.setState({
                 ProductsDetail: json,
                 Pictures: picArray 
              }, function(){
                  console.log(this.state)
              });
            });
    }

    render() { 
        return ( 
            <>
                <NavBar/>
                <ProductCarousel data={this.state.ProductsDetail}  pics={this.state.Pictures}/>
                {/* <h1>{this.state.Pictures}</h1> */}
            </>
        );
    }
}
 
export default ProductDetail;