import React from 'react';
import './MoreProducts.css';
import { Api } from '../../utils/api';
import Item from '../Items/Item';
import Slide from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class MoreProducts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
        }

    }

    componentDidUpdate(nextProps) {
        const { sku } = this.props 
        if (nextProps.sku !== sku) {
            if (sku) {
                return Api.getMoreProducts(this.props.sku).then(items => {
                    this.setState({ items: items.catalogoItems })
                })
            }
        }
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            responsive: [
                {
                    breakpoint: 1920,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                }
            ]
        }
        if (this.props.sexo === 'mujer') {
            return null;
        } else {
            return (
                <div>
                    <h4 style={{ marginLeft: '5px' }}>Más productos que te pueden interesar</h4>

                    <div className='more-products'>
                        <Slide {...settings}>
                            {this.state.items.map(item => {
                                return (
                                    <a href={process.env.PUBLIC_URL + `/catalogo/${item.sku}`}>
                                        <Item key={item.id}
                                            sku={item.sku}
                                            nombre={item.nombre}
                                            precioActual={item.precio_actual}
                                            precioAnterior={item.precio_anterior}
                                            img={item.img} />
                                    </a>
                                )
                            })}
                        </Slide>
                    </div>
                </div >
            )
        }

    }
}

export default MoreProducts;