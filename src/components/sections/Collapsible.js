import React, { useState } from 'react';
import '../../stylesheets/styleComponents/Collapsible.scss'
import hide from '../../assets/ic_hide.svg';
import stick from '../../assets/ic_checked.svg';
import Product from './Product';
import { Link } from "react-router-dom";


const Collapsible = (props) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="collapsible"
                onClick={() => setOpen(!isOpen)}>
                <img className="collapsible__icon"
                    src={props.iconCategory}
                    alt={props.categoryTitle} />
                {/* <i className="far fa-star collapsible__icon"></i> */}
                <Link to="/tienda/market" className="collapsible__box">
                    <h2 className="collapsible__box--title">
                        {props.categoryTitle}
                    </h2>
                    <img
                        className={`collapsible__box--icon  ${!isOpen ? "rotate" : ""}`}
                        src={hide}
                        alt="collapsible"
                    ></img>
                </Link>
            </div>
            <div id="upperElement" className={`accordion-item ${!isOpen ? "collapsed" : ""}`} >
                <ul className="container">
                    <li className="accordion-content">
                        <a href="#upperElement" > Ver toda la sección</a >
                        <img
                            className={`accordion-content--icon 
                            ${props.isSelected ? "" : "hidden"}`}
                            src={stick} alt="checked"></img>
                    </li>
                    <Product
                        productTitle={props.productTitle}
                        productId={props.productId}
                    />
                </ul>
            </div>
        </>
    );
}

export default Collapsible;