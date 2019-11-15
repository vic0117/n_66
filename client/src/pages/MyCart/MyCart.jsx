import React from "react";
import NavBar from '../../components/NavBar/NavBar';
import CartContent from '../../components/CartContent/CartContent';

class MyCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ProductsData: [],
        }
    }

    componentDidMount() {
        // fetch("http://localhost:3001/products", {
        //     // body: JSON.stringify({}),
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     method: "get"
        // })
        //     .then(response => {
        //         return response.json();
        //         // return console.log(response);
        //     })
        //     .then(json => {
        //         this.setState({
        //             ProductsData: json,
        //         });
        //     });
    }


    render() {
        return (
            <>
                <NavBar />
                <CartContent/>
            </>
        );
    }
}

export default MyCart;