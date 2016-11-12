import React, {Component, PropTypes} from "react";

class Tarjeta extends Component{
    render(){
        return(<div><h1>{this.props.title}</h1><div>{this.props.description}</div></div>);
    }
}
export default Tarjeta;
