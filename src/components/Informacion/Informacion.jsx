import React from 'react';
import './Informacion.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Informacion = () => {
    document.title = 'Tibus Calzados | Información'
    return (
    <div className="informacion">
        <Header />
        <div className="como-comprar">
            <h1 className='index'>Cómo comprar?</h1>
            <div className="paso-container">
                <div className="paso">
                    <h2 className="header">1. Elegí tu par de nuestro catálogo</h2>
                    <p className="paragraph">Elegí el par que más te guste de nuestro <Link style={{ color: 'black', textDecoration: 'underline' }} to='/catalogo'>catálogo</Link>. Podés elegir entre calzado de <Link style={{ color: '#06F5CC', fontWeight: 'bold' }} to={{
                        pathname: "/catalogo",
                        hash: "#niños",
                        state: 'niños'
                    }}>
                        Niño
                    </Link>, <Link style={{ color: '#E59CB7', fontWeight: 'bold' }} to={{
                            pathname: "/catalogo",
                            hash: "#mujeres",
                            state: 'mujeres'
                        }}>
                            Mujer
                    </Link> u <Link style={{ color: '#496FF4', fontWeight: 'bold' }} to={{
                            pathname: "/catalogo",
                            hash: "#hombres",
                            state: 'hombres'
                        }}>
                            Hombre
                    </Link>.
                    </p>
                </div>
                <Fade right>
                    <img className='catalogo-preview' src='http://localhost:5000/images/informacion/catalogo screenshot.png' alt="" />
                </Fade>
            </div>
            <div id='checkout-container' className="paso-container">
                <div className="paso">
                    <h2 className="header">2. Seleccioná tu talle y procedé al checkout</h2>
                    <p className="paragraph">Luego de elegir tu talle, dejanos tus datos en el checkout y te enviaremos un email con un link de MercadoPago para finalizar tu compra. Si no estás seguro de tu talle siempre podés chequear nuestra <strong>guía de talles</strong> (que vas a poder encontrar en la parte superior derecha del <Link style={{ color: 'black', textDecoration: 'underline' }} to='/catalogo'>catálogo</Link>) y si tenés cualquier tipo de consultas nos podés contactar por <a href="mailto:tibuscalzados@gmail.com" style={{ color: 'black', fontWeight: 'bold' }}>Email</a> o <a style={{ color: '#25D366', fontWeight: 'bold' }} href='https://wa.me/message/KPRBLMV6ZPW7H1'>Whatsapp</a>.</p>
                </div>
                <Fade bottom>
                    <img className="checkout-preview" src='http://localhost:5000/images/informacion/Google Pixel 2 XL.png' alt="" />
                </Fade>
            </div>
            <div className="paso-container">
                <div className="paso">
                    <h2 className="header">3. Revisá tu email</h2>
                    <p className="paragraph">Una vez realizado el checkout, vas a poder encontrar un mail de tibuscalzados@gmail.com con un link de MercadoPago correspondiente al item que elegiste de nuestro catálogo. Una vez realizado el pago te enviaremos un mail de confirmación y listo! Tu pedido ya está en camino.</p>
                </div>
                <Fade left>
                    <img className='email-preview' src='http://localhost:5000/images/informacion/mail.png' alt="..." />
                </Fade>

            </div>
        </div>
        <Footer />
    </div>
)};

export default Informacion;