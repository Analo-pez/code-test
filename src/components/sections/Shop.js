import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../../stylesheets/styleComponents/Shop.scss';

function Shop() {
    return (
        <div className="pageLanding">

            <Link to="/tienda/market" className="box-button">
                <button className="start-button">Empezar compra</button>
            </Link >

        </div>
    );
}

export default Shop;