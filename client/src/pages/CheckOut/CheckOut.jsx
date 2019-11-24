import React from "react";
import NavBar from '../../components/NavBar/NavBar';
import CheckOutContent from '../../components/CheckOutContent/CheckOutContent';
// import CheckOutContentNew from '../../components/CheckOutContentNew/CheckOutContentNew'

class CheckOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productsToBuy: [],
            tripsToBuy: [],
            totalCost: 0,
            userId: '',
            hasCoupon: [],
        }
    }

    componentDidMount() {
        const productsToBuy = JSON.parse(localStorage.getItem("productsToBuy"));
        const tripsToBuy = JSON.parse(localStorage.getItem("tripsToBuy"));
        const totalCost = JSON.parse(localStorage.getItem("totalCost"));
        const userId = JSON.parse(localStorage.getItem("userId"));


        let user={
            userId: userId
        }

        fetch('http://localhost:3001/checkout/findCoupon',{
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "content-type": "application/json"
            },
            
        })
        .then(result=>{
            return result.json()
        })
        .then(json=>{
            console.log(json);
            let hasCoupon = json;

            this.setState({ 
                productsToBuy: productsToBuy,
                tripsToBuy: tripsToBuy,
                totalCost: totalCost,
                userId: userId,
                hasCoupon: hasCoupon
            });
        })
    }


    changeTotalCost = ()=>{

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
                   hasCoupon = {this.state.hasCoupon}
                />
            </>
        );
    }
}

export default CheckOut;