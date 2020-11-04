import React from 'react';
import Product from './Product';
import Collapsible from './Collapsible';
import PropTypes from "prop-types";


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

SubcategoriesList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object),
    productTitle: PropTypes.string,
    productId: PropTypes.string,
    key: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.object),
    iconCategory: PropTypes.string,
    categoryTitle: PropTypes.string,
    content: PropTypes.arrayOf(PropTypes.object),
};

export default SubcategoriesList;