import React from 'react';
import './Catalogo.css';
import Niño from './Niños/Niños';
import Mujer from './Mujeres/Mujeres';
import Hombre from './Hombres/Hombres';
import Header from '../Header/Header';

export default class Catalogo extends React.Component {
    constructor(props) {
        super(props);

        this.niñosRef = React.createRef();
        this.mujeresRef = React.createRef();
        this.hombresRef = React.createRef();
    }

    componentDidMount() {
        document.title = 'Tibus Calzados | Catálogo'
        if (this.props.location.state === 'niños') {
            setTimeout(() => {
                this.niñosRef.current.scrollIntoView({
                    behavior: 'smooth'
                })
            }, 500);
        } else if (this.props.location.state === 'mujeres') {
            setTimeout(() => {
                this.mujeresRef.current.scrollIntoView({
                    behavior: 'smooth'
                })
            }, 500);
        } else if (this.props.location.state === 'hombres') {
            setTimeout(() => {
                this.hombresRef.current.scrollIntoView({
                    behavior: 'smooth'
                })
            }, 500);
        }
    }

    render() {
        return (
            <div>
                <Header isCatalogo={true} />
                <div className="catalogo">
                    <div className="niños" ref={this.niñosRef}>
                        <Niño />
                    </div>
                    <div className="mujeres" ref={this.mujeresRef}>
                        <Mujer />
                    </div>
                    <div className="hombres" ref={this.hombresRef}>
                        <Hombre />
                    </div>

                </div>
            </div>
        )
    }
}