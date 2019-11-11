import React from "react";
import NavBar from '../../components/NavBar/NavBar';
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <NavBar/>
                <ProductCarousel/>
            </>
        );
    }
}
 
export default ProductList;