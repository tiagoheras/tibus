import React from 'react';
import './Item.css';

class Item extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            descuento: ''
        }
    }

    componentDidMount() {
        const precioActual = this.props.precioActual,
            precioAnterior = this.props.precioAnterior;

        const descuento = Math.round((precioAnterior - precioActual) / precioAnterior * 100);
        this.setState({ descuento: `-${descuento}%` })
    }

    render() {
        return (
            <div className="item">
                <img src={this.props.img} alt={this.props.name} />
                <h5 className="nombre">{this.props.nombre}</h5>
                <div className="descuento-container">
                    <h5 className="precio_anterior">${this.props.precioAnterior}</h5>
                    <div className="descuento">{this.state.descuento}</div>
                </div>

                <h5 className="precio-actual">${this.props.precioActual}</h5>
            </div>
        )
    }
}

export default Item;