import React from "react";
import "./GoTop.css"

class GoTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    toTop = ()=>{
        window.scrollTo({
            top: 0, 
            behavior: "smooth" 
        })
    }

    render() { 
        return ( 
            <div onClick={this.toTop} className="go-top">
                TOP
            </div>
        );
    }
}
 
export default GoTop;