import React, { useState } from 'react';
import '../../stylesheets/styleComponents/Collapsible.scss'
import show from '../../assets/ic_show.svg';
import hide from '../../assets/ic_hide.svg';



const Collapsible = () => {
    const [accordion, setAccordion] = useState({
        isOpen: false,
        isRotate: true,
    });

    const handleAccordion = () => {
        console.log('me han clickado')
        // setAccordion = () => {
        //     return {
        //         isOpen: true,
        //         isRotate: false,
        //     };
        // };
    }

    return (
        <div className="collapsible">
            <i className="far fa-star collapsible__star"></i>
            <div className="collapsible__box">
                <h2 className="collapsible__box--title" onClick={handleAccordion}>
                    Frutas y Verduras
                    {/* {props.title} */}
                </h2>
                <img
                    className="collapsible__box--icon"
                    src={show}
                ></img>
            </div>
            {/* <div
                className={`${this.classcontainer} js-accordion-content ${this.state.isOpen ? "js-accordion-content-open" : ""
                    }`}
            >
                {this.props.children}
            </div> */}
        </div>
    );
}

export default Collapsible;