import React, {Component, PropTypes} from "react";
import Tarjeta from "./Tarjeta";

class Tablon extends Component{
    render(){
        var tarjetas = this.props.tarjetas.map( (tj) => {
            return <Tarjeta key={tj.id} title={tj.title} description={tj.description} />; 
        });

        return(<div><h1>TITULOS</h1>{tarjetas}</div>);
    }
}


export default Tablon;
