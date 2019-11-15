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
        fetch(`http://localhost:3001/products/${this.props.match.params.id}`, {
            // body: JSON.stringify({}),
            
          })
            .then(response => {
              return response.json();
              // return console.log(response);
            })
            .then(json => {


              let picsJsonString = json.map(item=>(
                item.product_pictures
              ))

              let picArray = JSON.parse(picsJsonString);

              // console.log(picArray)
      
              this.setState({
                 ProductsDetail: json,
                 Pictures: picArray 
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