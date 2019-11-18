import React from "react";
import NavBar from '../../components/NavBar/NavBar';
import CartContent from '../../components/CartContent/CartContent';

class MyCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // ProductsData: [],
            productsToBuy: [],
            tripsToBuy: [],
            posObj: {},
            totalCost: 0
        }
    }

    componentDidMount() {
        const productsToBuy = JSON.parse(localStorage.getItem("productsToBuy"));
        const tripsToBuy = JSON.parse(localStorage.getItem("tripsToBuy"));

        let  totalCost = 0;

        productsToBuy.forEach(item => {
            let subCost = item.product_amount * item.product_price;
            totalCost += subCost;
        });

        tripsToBuy.forEach(trip => {
            let tripCost = trip.trip_amount * trip.trip_price;
            totalCost += tripCost;
        });

        this.setState({ 
            productsToBuy: productsToBuy,
            tripsToBuy: tripsToBuy,
            totalCost: totalCost
        });
    }


    delete = (result) =>{
        this.setState({productsToBuy: result})
    }

    count1 = (aaa)=>{
        this.setState({productsToBuy: aaa})
    } 

    count2 = (aaa)=>{
        this.setState({productsToBuy: aaa})
    }
    
    countTotalCost = (cost)=>{
        this.setState({totalCost: cost})
    } 


    render() {
        return (
            <>
                <NavBar />
                <CartContent 
                    data={this.state.productsToBuy}
                    tripData={this.state.tripsToBuy}
                    totalCost={this.state.totalCost}
                    delete={this.delete}
                    count1={this.count1}
                    count2={this.count2}
                    countTotalCost={this.countTotalCost}
                />
            </>
        );
    }
}

export default MyCart;