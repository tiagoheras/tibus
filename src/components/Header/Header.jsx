import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';

class Header extends React.Component {
    render() {
        if (this.props.isCatalogo === true) {
            return (
                <div>
                    <header id="landing-page" className="catalogo-header">
                        <Link to='/'>
                            <img id="logo-titre-header" src='http://localhost:5000/images/tibus-logo.png'
                                alt="titre calzados" />
                        </Link>
                        <nav id='catalogo-nav'>
                            <Popup trigger={<button id="talles__button">Cuál es mi talle?</button>} modal>
                                {close => (

                                    <div id="talles-table">
                                        <div className="content">
                                            <div class="table-nav">
                                                <h1>Guía de talles</h1>
                                                <i id="close" class="fas fa-times" onClick={close}></i>
                                            </div>
                                            <div class="table-container">
                                                <table>
                                                    <tr>
                                                        <th>Hombres</th>
                                                        <td>40</td>
                                                        <td>41</td>
                                                        <td>42</td>
                                                        <td>43</td>
                                                        <td>44</td>
                                                        <td>45</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Largo del pie</th>
                                                        <td>26,7 cm</td>
                                                        <td>27,3 cm</td>
                                                        <td>28 cm</td>
                                                        <td>28,7 cm</td>
                                                        <td>29,3 cm</td>
                                                        <td>30 cm</td>
                                                    </tr>
                                                </table>
                                            </div>

                                            <div class="table-container">
                                                <table>
                                                    <tr>
                                                        <th>Mujeres</th>
                                                        <td>34</td>
                                                        <td>35</td>
                                                        <td>36</td>
                                                        <td>37</td>
                                                        <td>38</td>
                                                        <td>39</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Largo del pie</th>
                                                        <td>23,3 cm</td>
                                                        <td>23,7 cm</td>
                                                        <td>24,7 cm</td>
                                                        <td>25,3 cm</td>
                                                        <td>26 cm</td>
                                                        <td>26,7 cm</td>
                                                    </tr>
                                                </table>
                                            </div>

                                            <div class="table-container">
                                                <table>
                                                    <tr>
                                                        <th>Bebés</th>
                                                        <td>15</td>
                                                        <td>16</td>
                                                        <td>17</td>
                                                        <td>18</td>
                                                        <td>19</td>
                                                        <td>20</td>
                                                        <td>21</td>
                                                        <td>22</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Largo del pie</th>
                                                        <td>10,5 cm</td>
                                                        <td>11,3 cm</td>
                                                        <td>12 cm</td>
                                                        <td>12,7 cm</td>
                                                        <td>13,3 cm</td>
                                                        <td>14 cm</td>
                                                        <td>14,7 cm</td>
                                                        <td>15,3 cm</td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <div class="table-container">
                                                <table>
                                                    <tr>
                                                        <th>Niños</th>
                                                        <td>23</td>
                                                        <td>24</td>
                                                        <td>25</td>
                                                        <td>26</td>
                                                        <td>27</td>
                                                        <td>28</td>
                                                        <td>29</td>
                                                        <td>30</td>
                                                        <td>31</td>
                                                        <td>32</td>
                                                        <td>33</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Largo del pie</th>
                                                        <td>16 cm</td>
                                                        <td>16,7 cm</td>
                                                        <td>17,3 cm</td>
                                                        <td>18 cm</td>
                                                        <td>18,7 cm</td>
                                                        <td>19,3 cm</td>
                                                        <td>20 cm</td>
                                                        <td>20,7 cm</td>
                                                        <td>21,3 cm</td>
                                                        <td>22 cm</td>
                                                        <td>22,7 cm</td>

                                                    </tr>
                                                </table>
                                            </div>

                                            <img class="talles-img" src="https://www.boating.com.ar/wp-content/uploads/2019/06/FOOT_LENGTH-1.png"
                                                alt="Largo del pie" />
                                            <div class="table-text">
                                                <h1>Largo del pie</h1>
                                                <p>Sobre un papel, dibujá el contorno de tus pies descalzos. Medí desde el dedo más largo hasta la altura
                del talón. Sumale 0,5 cm de holgura para un adulto o más para un niño.</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Popup>
                        </nav>
                    </header>
                    <div className="bf">
                        <h5>No te pierdas nuestras ofertas de Black Friday!</h5>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <header id="landing-page">
                        <Link to='/'>
                            <img id="logo-titre-header" src='http://localhost:5000/images/tibus-logo.png'
                                alt="titre calzados" />
                        </Link>
                        <nav>
                            <Link to='/catalogo'>Catalogo</Link>
                            <Link to='/informacion'>Informacion</Link>

                            {/* <div class="dropdown">
                            <a href="catalogo.html" class="dropbtn">Catálogo</a>
                            <div class="dropdown-content">
                                <a href="catalogo.html#Niños">Niños</a>
                                <a href="catalogo.html#Damas">Damas</a>
                                <a id="last-element" href="catalogo.html#Hombres">Hombres</a>
                            </div>
                        </div>
                        <a href="#contacto" id="cta">Pedí tu par</a> */}
                        </nav>
                    </header>
                    <div className="bf">
                        <h5>No te pierdas nuestras ofertas de Black Friday!</h5>
                    </div>
                </div>

            )
        }
    }
};

export default Header