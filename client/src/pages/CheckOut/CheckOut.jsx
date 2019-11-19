import React from "react";
import NavBar from '../../components/NavBar/NavBar';
import CheckOutContent from '../../components/CheckOutContent/CheckOutContent';

class CheckOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productsToBuy: [],
            tripsToBuy: [],
            totalCost: 0,
            userId: '',
        }
    }

    componentDidMount() {
        const productsToBuy = JSON.parse(localStorage.getItem("productsToBuy"));
        const tripsToBuy = JSON.parse(localStorage.getItem("tripsToBuy"));
        const totalCost = JSON.parse(localStorage.getItem("totalCost"));
        const userId = JSON.parse(localStorage.getItem("userId"));

        this.setState({ 
            productsToBuy: productsToBuy,
            tripsToBuy: tripsToBuy,
            totalCost: totalCost,
            userId: userId
        });
    }


    render() {
        return (
            <>
                <NavBar />
                <CheckOutContent
                   productsToBuy={this.state.productsToBuy} 
                   tripsToBuy={this.state.tripsToBuy}
                   totalCost={this.state.totalCost}
                   userId = {this.state.userId}
                />
            </>
        );
    }
}

export default CheckOut;