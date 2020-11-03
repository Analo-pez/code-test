
import React from 'react';
import loading from '../../assets/loading.jpg';
import './loader.scss';

const Loader = () => {
    return (
        <div className="loader">
            <p className="loader__text">Loading...</p>
            <img src={loading} alt="Loader" className="loader__img"></img>
        </div>
    );
};

export default Loader;