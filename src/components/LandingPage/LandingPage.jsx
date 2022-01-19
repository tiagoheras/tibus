import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const LandingPage = () => {
  document.title = 'Tibus Calzados'

  if (window.innerWidth < 767) {
    return (
      <div className="landing-page">
        <Header />
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src='http://localhost:5000/images/landingpage/carousel/banner bf.jpg' class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item ">
              <img src='http://localhost:5000/images/landingpage/carousel/lalo bf.jpg' class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src='http://localhost:5000/images/landingpage/carousel/camberwell bf.jpg' class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src='http://localhost:5000/images/landingpage/carousel/bota rosa bf.jpg' class="d-block w-100" alt="..." />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div className="sexo-grid">
          <Link to={{
            pathname: "/catalogo",
            hash: "#niños",
            state: 'niños'
          }}>
            <img src='http://localhost:5000/images/landingpage/niños.jpg' alt="" />
          </Link>
          <Link to={{
            pathname: "/catalogo",
            hash: "#hombres",
            state: 'hombres'
          }}>
            <img src='http://localhost:5000/images/landingpage/hombres.jpg' alt="" />
          </Link>
          <Link to={{
            pathname: "/catalogo",
            hash: "#mujeres",
            state: 'mujeres'
          }}>
            <img src='http://localhost:5000/images/landingpage/mujer.jpg' alt="" />
          </Link>
        </div>
        <div className="important-info">
          <img src="http://localhost:5000/images/landingpage/info.jpg" alt="" />
        </div>
        <Footer />
      </div>
    );
  } else if (window.innerWidth >= 767) {
    return (
      <div className="landing-page">
        <Header />
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src='http://localhost:5000/images/landingpage/carousel/banner bf desktop.jpg' class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item ">
              <img src='http://localhost:5000/images/landingpage/carousel/lalo bf desktop.jpg' class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src='http://localhost:5000/images/landingpage/carousel/camberwell bf desktop.jpg' class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src='http://localhost:5000/images/landingpage/carousel/bota rosa bf desktop.jpg' class="d-block w-100" alt="..." />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div className="sexo-grid">
          <Link className='niños-link' to={{
            pathname: "/catalogo",
            hash: "#niños",
            state: 'niños'
          }}>
            <img src='http://localhost:5000/images/landingpage/niños desktop.jpg' alt="" />
          </Link>
          <Link className='hombres-link' to={{
            pathname: "/catalogo",
            hash: "#hombres",
            state: 'hombres'
          }}>
            <img src='http://localhost:5000/images/landingpage/hombres desktop.jpg' alt="" />
          </Link>
          <Link className='mujres-link' to={{
            pathname: "/catalogo",
            hash: "#mujeres",
            state: 'mujeres'
          }}>
            <img src='http://localhost:5000/images/landingpage/mujer desktop.jpg' alt="" />
          </Link>
        </div>
        <div className="important-info">
            <img src='http://localhost:5000/images/landingpage/info.jpg' alt="" />
        </div>
        <Footer />
      </div>
    );
  }

}

export default LandingPage;