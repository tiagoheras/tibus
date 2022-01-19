import React from 'react';
import './Productpage.css';
import { Api } from '../../utils/api';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import TallesOption from './TallesOptions/TallesOption';
import Footer from '../Footer/Footer';
import MoreProducts from '../MoreProducts/MoreProducts';
import Popup from '../Popup/Popup';


class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            catalogoItem: {},
            moreItems: [],
            descuento: '',
            talles: [],
            talleElegido: null,
            tallesError: true
        }

        this.calculateDescuento = this.calculateDescuento.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    componentWillMount() {
        Api.getCatalogoItem(this.props.match.params.id).then(catalogoItem => {
            this.setState({
                catalogoItem: catalogoItem,
                descuento: `${this.calculateDescuento(catalogoItem.precio_anterior, catalogoItem.precio_actual)}% OFF`
            });
        }).then(
            Api.getTalles(this.props.match.params.id).then(talles => {
                this.setState({ talles: talles });
            }));
    }

    componentDidUpdate() {
        document.title = `Tibus Calzados | ${this.state.catalogoItem.nombre}`
    }

    calculateDescuento(precioAnterior, precioActual) {
        const descuento = Math.round((precioAnterior - precioActual) / precioAnterior * 100);
        return descuento;
    }

    handleChange(event) {
        this.setState({ talleElegido: event.target.value, tallesError: false })
    }

    render() {
        return (
            <div onLoad={this.handleLoad}>
                <Header isCatalogo={true} />
                <Link style={{ color: 'black', marginLeft: '5px' }} id='atras' to='/catalogo'>
                    Volver
                    </Link>
                <div className="main">
                    <img id='main-img' src={this.state.catalogoItem.img} alt={this.state.catalogoItem.nombre} />
                    <div className="info">
                        <h3 className="product-page__nombre">{this.state.catalogoItem.nombre}</h3>
                        <div className="product-page__descuento-container">
                            <h4 className="product-page__precio-anterior">${this.state.catalogoItem.precio_anterior}</h4>
                            <h4 className="product-page__precio-actual">${this.state.catalogoItem.precio_actual}</h4>
                            <div className="product-page__descuento-container">
                                <div className="product-page__descuento">{this.state.descuento}</div>
                            </div>
                        </div>
                        <div className='choose-talle'>
                            <label htmlFor="talles">Elegí tu talle</label>
                            <select name="talles" id="talles" onChange={this.handleChange}>
                                <option>Talles</option>
                                {this.state.talles.map(talle => {
                                    if (talle.cantidad === 0) {
                                        return null
                                    } else {
                                        return <TallesOption talle={talle.talle} cantidad={talle.cantidad} />
                                    }

                                })}
                            </select>
                        </div>
                        <Popup
                            talleElegido={this.state.talleElegido}
                            isError={this.state.tallesError}
                            productName={this.state.catalogoItem.nombre}
                            productPrice={this.state.catalogoItem.precio_actual}
                            trigger={<button className='comprar'>Comprar</button>} />
                        <form action={`https://wa.me/542214803687/?text=Hola! Quería hacer una consulta sobre: ${this.state.catalogoItem.nombre}.`}>
                            <button className='consultar' type='submit'>
                                <img id='button-wp-icon' src="https://tibus-server.host/images/icons/whatsapp.png" alt="" />
                                    Hablar con vendedor
                                </button>
                        </form>
                    </div>
                </div>
                <MoreProducts sku={this.state.catalogoItem.sku} sexo={this.state.catalogoItem.sexo} />
                <Footer />
            </div >

        )
    }
}

export default ProductPage;