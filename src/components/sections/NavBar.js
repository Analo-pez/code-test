import React from 'react'
import Collapsible from './Collapsible';
import ProductList from './ProductList';


const NavBar = (props) => {
    return (
        <nav className="navBar">
            <div className="navBar__header">
                <img className="navBar__header--img" src={props.logoMarket} alt="logo supermercado" title={props.name}></img>
                <div className="navBar__header--box">
                    <h3 className="navBar__header--box--title">{props.name}</h3>
                    <p className="navBar__header--box--text">Comprando en {props.postalcode}</p>
                </div>
                <span className="navBar__header--change">cambiar</span>
            </div>
        </nav>
    )
}

export default NavBar;