import React from 'react';
import { Link } from 'react-router-dom';
import { Api } from '../../../utils/api';
import Item from '../../Items/Item';

class Hombre extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    componentDidMount() {
        Api.getHombre().then(hombreItems => {
            this.setState({ items: hombreItems })
        })
    }

    render() {
        return (
            <div id='hombres'>
                <h3 className="tipo">Hombres</h3>
                <div className="item-list-catalogo">
                    {this.state.items.map(hombreItem => {
                        return (
                            <Link to={process.env.PUBLIC_URL + `/catalogo/${hombreItem.sku}`}>
                                <Item key={hombreItem.id}
                                    sku={hombreItem.sku}
                                    nombre={hombreItem.nombre}
                                    precioActual={hombreItem.precio_actual}
                                    precioAnterior={hombreItem.precio_anterior}
                                    img={hombreItem.img} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Hombre;