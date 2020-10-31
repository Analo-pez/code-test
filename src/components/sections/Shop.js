import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../../stylesheets/styleComponents/Shop.scss';
import mercadona from '../../assets/mercadona.jpg'

function Shop() {
    return (
        <div className="pageShop">
            <header className="headerLanding">
                <h1 className="headerLanding__title ">LolaMarket</h1>
            </header>
            <h1 className="pageShop__title">
                Resultados de la búsqueda
            </h1>
            <img className="pageShop__img" src={mercadona}></img>

            <Link to="/tienda/market" className="pageShop__button">
                <button className="start-button">Empezar compra</button>
            </Link >

        </div>
    );
}

export default Shop;