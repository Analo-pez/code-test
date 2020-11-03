import React from 'react';
import Collapsible from './Collapsible';


const CategoriesList = props => {
    const items = props.categories.map((category) => {
        return (
            <li>
                <Collapsible
                    key={category.id}
                    iconCategory={category.icon}
                    categoryTitle={category.name} />
            </li>);
    });


    return <ul>{items}</ul>;
};

export default CategoriesList;