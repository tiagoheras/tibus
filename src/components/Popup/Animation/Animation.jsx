import React from 'react';
import {Link} from 'react-router-dom'

class Animation extends React.Component {
    render() {
        if (this.props.hasSucceeded === true) {
            return (
                <div className='success'>
                    <img src='https://tibus-server.host/images/animation/tick.png' alt=""/>
                    <h4>Tu pedido se ha realizado con exito!</h4>
                    <Link to='/catalogo'>
                    <button>Seguir comprando</button>
                    </Link>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default Animation;