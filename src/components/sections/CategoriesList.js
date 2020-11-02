import React from 'react';
import Collapsible from './Collapsible';


const CategoriesList = props => {
    const items = props.categories.map((category) => {
        return (
            <li key={category.id} className="App-card">
                <Collapsible
                    key={category.id}
                    iconCategory={category.icon}
                    categoryTitle={category.name} />
            </li>);
    });


    return <ul className="App-List">{items}</ul>;
};

export default CategoriesList;