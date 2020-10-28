import React from 'react';
import Collapsible from './Collapsible';
import '../../stylesheets/styleComponents/ProductList.scss'



const ProductList = (props) => {


    return (
        <div className="productList">
            <Collapsible
                title="Frutas y verduras"
            // iconCategory="../../assets/ic_checked.svg" 
            />
            <Collapsible title="Carne" />
            <Collapsible title="Pescado" />
            <Collapsible title="Hogar" />
        </div>
    );
}

export default ProductList;