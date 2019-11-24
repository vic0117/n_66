import React from "react";
import HomeNavBar from '../../components/HomeNavBar/HomeNavBar';
import ProductLeftMenu from '../../components/ProductLeftMenu/ProductLeftMenu';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: props.currentUser,
            ProductsData: [],
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/products", {
            // body: JSON.stringify({}),
            headers: {
                "content-type": "application/json"
            },
            method: "get"
        })
            .then(response => {
                return response.json();
                // return console.log(response);
            })
            .then(json => {

                // console.log(json);
                this.setState({
                    ProductsData: json,
                });
            });
    }


    render() {

        const {currentUser} = this.props;
        
        
        if(currentUser){
            // console.log(currentUser);
        }
            return (
                <>
                    <HomeNavBar numberOfProducts={this.props.numberOfProducts}/>
                    <ProductLeftMenu data={this.state.ProductsData} currentUser={this.props.currentUser}/>
                    {/* <Pagination data={this.state.ProductsData}/> */}
                </>
            );
    }
}

export default ProductList;