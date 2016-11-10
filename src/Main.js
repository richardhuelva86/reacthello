import React, {Component, PropTypes} from "react";
import ReactDOM from 'react-dom';

class Hello extends Component{
    render(){
        return(<h1>HELLO WORLD</h1>);
    }
}


ReactDOM.render(<Hello/>, document.getElementById('root'));
