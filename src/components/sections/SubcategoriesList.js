import React from 'react';
import Product from './Product';
import Collapsible from './Collapsible';


const SubcategoriesList = props => {
    const products = props.products.map((product) => {
        return (
            <Product
                key={product.uuid}
                productId={product.uuid}
                productTitle={product.name} />
        );
    });

    const items = props.categories.map((category) => {
        return (
            <li key={category.id}>
                <Collapsible
                    iconCategory={category.icon}
                    categoryTitle={category.name}
                    content={products}
                >   </Collapsible>
            </li>);
    });


    return <ul >{items}</ul>
};

export default SubcategoriesList;