import React from "react";
import NavBar from '../../components/NavBar/NavBar';
// import ProductCarousel from '../../components/ProductCarousel/ProductCarousel';
import ProductLeftMenu from '../../components/ProductLeftMenu/ProductLeftMenu';


class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <NavBar/>
                <ProductLeftMenu/>
            </>
        );
    }
}
 
export default ProductDetail;