import React from 'react';
import { Link } from 'react-router-dom';
import { Api } from '../../../utils/api';
import Item from '../../Items/Item';

class Niño extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.niñosRef = React.createRef();
    }

    componentDidMount() {
        Api.getKids().then(kidItems => {
            this.setState({ items: kidItems });
        })
    }

    render() {
        return (
            <div id='niños'>
                <h3 className="tipo">Niños</h3>
                <div className="item-list-catalogo">
                    {this.state.items.map(kidItem => {
                        return (
                            <Link to={process.env.PUBLIC_URL + `/catalogo/${kidItem.sku}`}>
                                <Item key={kidItem.id}
                                    sku={kidItem.sku}
                                    nombre={kidItem.nombre}
                                    precioActual={kidItem.precio_actual}
                                    precioAnterior={kidItem.precio_anterior}
                                    img={kidItem.img} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Niño;