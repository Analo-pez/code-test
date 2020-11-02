import React, { useState } from 'react';
import '../../stylesheets/styleComponents/Product.scss';
import stick from '../../assets/ic_checked.svg';
import { Link } from "react-router-dom";


const Product = (props) => {
    const [isSelected, setSelected] = useState(false);

    return (
        <>
            <Link to={`/character/${props.productId}`}>
                <li className="accordion-content"
                    onClick={() => setSelected(!isSelected)} >
                    <a href="#">
                        {props.productTitle}
                    </a>
                    <img className={`accordion-content--icon
            ${isSelected ? "" : "hidden"}`}
                        src={stick} alt="checked"></img>
                </li >
            </Link>
        </>
    );
}

export default Product;