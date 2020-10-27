import React from 'react';
import Collapsible from './Collapsible';
import Product from './Product';
import '../../stylesheets/styleComponents/ProductList.scss'



const ProductList = () => {


    return (
        <div>
            <Collapsible>
                <Product />
            </Collapsible>
            <Collapsible>
                <Product />
            </Collapsible>
        </div>
    );
}

export default ProductList;