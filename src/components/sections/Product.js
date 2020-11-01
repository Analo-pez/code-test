import React, { useState } from 'react';
import '../../stylesheets/styleComponents/Product.scss';
import stick from '../../assets/ic_checked.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    NavLink
} from "react-router-dom";


const Product = (props) => {
    const [isSelected, setSelected] = useState(false);

    return (
        <>
            <Link to="/tienda/market/category/subcategory">
                <li className="accordion-content"
                    onClick={() => setSelected(!isSelected)} >
                    <a href="#">
                        {props.title}
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