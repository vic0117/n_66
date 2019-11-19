import React from "react";
import NavBar from '../../components/NavBar/NavBar';
import CheckOutContent from '../../components/CheckOutContent/CheckOutContent';

class CheckOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productsToBuy: [],
            tripsToBuy: [],
            totalCost: 0
        }
    }

    componentDidMount() {
        const productsToBuy = JSON.parse(localStorage.getItem("productsToBuy"));
        const tripsToBuy = JSON.parse(localStorage.getItem("tripsToBuy"));
        const totalCost = JSON.parse(localStorage.getItem("totalCost"));

        this.setState({ 
            productsToBuy: productsToBuy,
            tripsToBuy: tripsToBuy,
            totalCost: totalCost
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
                />
            </>
        );
    }
}

export default CheckOut;