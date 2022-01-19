import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer>
        <div className="container">
            <div className="catalogo-footer">
                <Link to='/catalogo'>
                    <h3>Catálogo</h3>
                </Link>
                {/* <ul>
                    <li><a href="catalogo.html#Damas">Damas</a></li>
                    <li><a href="catalogo.html#Niños">Niños</a></li>
                    <li><a href="catalogo.html#Hombres">Hombres</a></li>
                </ul> */}
            </div>
            <div className="contacto-footer">
                <h3 className="footer-header">Contacto</h3>
                <div className="footer-redes">
                    <a href="https://wa.me/message/KPRBLMV6ZPW7H1"><img className='footer-img' src='http://localhost:5000/images/icons/whatsapp.png' alt="whatsapp" /></a>
                    <a href="https://www.facebook.com/tibuscalzadoslp"><img className='footer-img' src='http://localhost:5000/images/icons/facebook.png' alt="facebook" /></a>
                    <a href="https://www.instagram.com/tibus.calzados"><img className='footer-img' src='http://localhost:5000/images/icons/instagram.png' alt="instagram" /></a>
                    <a href="mailto:tibuscalzados@gmail.com"><img className='footer-img' src="http://localhost:5000/images/icons/envelope.png" alt="email" /></a>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;