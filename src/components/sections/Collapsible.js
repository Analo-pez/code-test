import React, { useState } from 'react';
import '../../stylesheets/styleComponents/Collapsible.scss'
import hide from '../../assets/ic_hide.svg';
import stick from '../../assets/ic_checked.svg';
import Product from './Product';



const Collapsible = (props) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="collapsible"
                onClick={() => setOpen(!isOpen)}>
                {/* <img src={props.iconCategory} alt={props.title} /> */}
                <i className="far fa-star collapsible__icon"></i>
                <div className="collapsible__box"
                >
                    <h2 className="collapsible__box--title">
                        {props.title}
                    </h2>
                    <img
                        className={`collapsible__box--icon  ${!isOpen ? "rotate" : ""}`}
                        src={hide}
                        alt="collapsible"
                    ></img>
                </div>
            </div>
            <div id="upperElement" className={`accordion-item ${!isOpen ? "collapsed" : ""}`} >
                <ul className="container">
                    <li className="accordion-content">
                        <a href="#upperElement" > Ver toda la sección</a >
                        <img
                            // className="accordion-content--icon"
                            className={`accordion-content--icon 
                            ${props.isSelected ? "" : "hidden"}`}
                            src={stick} alt="checked"></img>
                    </li>
                    <Product
                        title="Subcategoría"
                    />
                    <Product
                        title="Subcategoría"
                    />
                    <Product
                        title="Subcategoría"
                    />
                </ul>
            </div>
        </>
    );
}

export default Collapsible;