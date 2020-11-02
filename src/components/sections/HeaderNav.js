import React from 'react'
import { Link } from "react-router-dom";


const HeaderNav = (props) => {
    return (
        <div className="navBar__header">
            <img className="navBar__header--img" src={props.logoMarket} alt="logo supermercado" title={props.name}></img>
            <Link to="/tienda/mercadona">
                <div className="navBar__header--box">
                    <h3 className="navBar__header--box--title">{props.name}</h3>
                    <p className="navBar__header--box--text">Comprando en {props.postalcode}</p>
                </div>
            </Link>
            <Link to="/" >
                <p className="navBar__header--change" onClick={localStorage.removeItem('postalcode')}>cambiar</p>
            </Link>
        </div>
    )
}

export default HeaderNav;