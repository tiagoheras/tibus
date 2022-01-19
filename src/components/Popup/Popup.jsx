import React from 'react';
import Popup from 'reactjs-popup';
import './Popup.css';
import { Api } from '../../utils/api';
import Animation from './Animation/Animation';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientName: null,
            clientPhone: null,
            clientEmail: null,
            hasSucceeded: false,
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);

        this.consultaRef = React.createRef();
    }

    handleNameChange(event) {
        this.setState({ clientName: event.target.value });
    }

    handlePhoneChange(event) {
        this.setState({ clientPhone: event.target.value });
    }

    handleEmailChange(event) {
        this.setState({ clientEmail: event.target.value });
    }

    handleClick(e) {
        e.preventDefault();
        if (this.state.clientEmail === null || this.state.clientName === null || this.state.clientPhone === null) {
            return alert("Por favor complete todos los campos del formulario y pruebe otra vez.")
        } else {
            this.consultaRef.current.value = 'Enviando consulta...'
            return Api.sendMail(this.props.productName, this.props.productPrice, this.props.talleElegido, this.state.clientName, this.state.clientPhone, this.state.clientEmail)
                .then(response => {
                    if (response === 201) {
                        return this.setState({ hasSucceeded: true })
                    } else {
                        console.log(response);
                    }
                })
        }
    }

    render() {
        if (this.props.isError === true) {
            return (
                <Popup trigger={this.props.trigger} modal>
                    <div className="content" id='talle-error'>
                        <p>Elija su talle</p>
                    </div>
                </Popup>
            )
        } else {
            return (
                <Popup trigger={this.props.trigger} modal>
                    {close => (
                        <div className="popup-box">
                            <div className='box'>
                                <Animation hasSucceeded={this.state.hasSucceeded} />
                                <div className='content'>
                                    <button className="close-icon" onClick={close}>x</button>
                                    <h3>Checkout</h3>
                                    <p>Dejanos tus datos y te enviaremos un link de MercadoPago vía Email.</p>
                                    <div className="form-box">
                                        <div className="form-box">
                                            <div className='campo'>
                                                <label className="form-label" htmlFor="clientName">Nombre</label>
                                                <input type="text" name="clientName" id="clientName" onChange={this.handleNameChange} required />
                                            </div>
                                            <div className='campo'>
                                                <label className="form-label" htmlFor="clientEmail">Email</label>
                                                <input type="text" placeholder=" Ej: nombre@ejemplo.com" name="clientEmail" id="clientEmail" onChange={this.handleEmailChange} required />
                                            </div>
                                            <div className='campo'>
                                                <label className="form-label" htmlFor="clientPhone">Teléfono Celular</label>
                                                <input type="text" placeholder=" Ej: (11) 234-5678" name="clientPhone" id="clientPhone" onChange={this.handlePhoneChange} required />
                                            </div>
                                            <input ref={this.consultaRef} className="enviar-consulta" type="submit" onClick={this.handleClick} value="Enviar consulta" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}
                </Popup>
            )
        }
    }
}