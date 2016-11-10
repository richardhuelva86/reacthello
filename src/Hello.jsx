import React, {Component, PropTypes} from "react";

class Hello extends Component{
    render(){
        return(<h1>HELLO</h1>);
    }
}


ReactDOM.render(<Hello>, document.getElementById('root'));
export default Hello;
