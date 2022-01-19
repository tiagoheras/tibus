import React from 'react';
import { Link } from 'react-router-dom';
import { Api } from '../../../utils/api';
import Item from '../../Items/Item';

class Mujer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    componentDidMount() {
        Api.getMujer().then(mujerItems => {
            this.setState({ items: mujerItems })
        })
    }

    render() {
        return (
            <div id='mujeres'>
                <h3 className="tipo">Damas</h3>
                <div className="item-list-catalogo">

                    {this.state.items.map(mujerItem => {
                        return (
                            <Link to={process.env.PUBLIC_URL + `/catalogo/${mujerItem.sku}`}>
                                <Item key={mujerItem.id}
                                    sku={mujerItem.sku}
                                    nombre={mujerItem.nombre}
                                    precioActual={mujerItem.precio_actual}
                                    precioAnterior={mujerItem.precio_anterior}
                                    img={mujerItem.img} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Mujer;