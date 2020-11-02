import React, { useState } from 'react';
import '../../stylesheets/styleComponents/Product.scss';
import stick from '../../assets/ic_checked.svg';


const Product = (props) => {
    const [isSelected, setSelected] = useState(false);

    return (
        <li className="accordion-content"
            onClick={() => setSelected(!isSelected)} >
            <a href="#upperElement">
                {props.productTitle}
            </a>
            <img className={`accordion-content--icon
            ${isSelected ? "" : "hidden"}`}
                src={stick} alt="checked"></img>
        </li >
    );
}

export default Product;