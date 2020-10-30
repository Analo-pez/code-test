import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/styleComponents/Landing.scss';
// import user from "../images/user.jpg";

function Landing() {
    return (
        <div className="pageLanding">
            <header>
                <h1 className="title__principal ">LolaMarket</h1>
            </header>
            <main className="sectionPrincipal">
                <section className="sectionPrincipal__box">
                    <h2 className="sectionPrincipal__box--title"> Hacemos tu compra</h2>
                    <p className="sectionPrincipal__box--subtitle"> El nuevo servicio para hacer la compra en tus supermercados de confianza </p>
                    <input placeholder="Tu código postal"></input>
                    <Link to="/tienda" className="box-button">
                        <button className="start-button">Buscar tienda</button>
                    </Link >
                </section>

            </main>
        </div>
    );
}

export default Landing;