import React, { useState } from 'react';
import '../../stylesheets/styleComponents/Collapsible.scss'
import hide from '../../assets/ic_hide.svg';
import stick from '../../assets/ic_checked.svg';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const Collapsible = (props) => {
    const [isOpen, setOpen] = useState(false);


    return (
        <>
            <div className="collapsible"
                onClick={() => setOpen(!isOpen)}>
                <img className="collapsible__icon"
                    src={props.iconCategory}
                    alt={props.categoryTitle} />
                <Link to={`/tienda/mercadona/${props.categoryTitle}`} className="collapsible__box">
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
                        <a className="container__title" href={`/tienda/mercadona/${props.categoryTitle}`} > Ver toda la sección</a >
                        <img
                            className={`accordion-content--icon 
                            ${props.isSelected ? "" : "hidden"}`}
                            src={stick} alt="checked"></img>
                    </li>
                    {props.content}
                </ul>
            </div>
        </>
    );
}

Collapsible.propTypes = {
    iconCategory: PropTypes.string,
    categoryTitle: PropTypes.string,
    content: PropTypes.arrayOf(PropTypes.object),
};



export default Collapsible;