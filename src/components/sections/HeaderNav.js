import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


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

HeaderNav.propTypes = {
    logoMarket: PropTypes.string,
    name: PropTypes.string,
    postalcode: PropTypes.string,
};



export default HeaderNav;