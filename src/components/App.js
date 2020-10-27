import React from 'react';
import { fetchReasons } from '../services/ReasonsService';
import '../stylesheets/App.scss';
import ProductList from './sections/ProductList';
import logoMarket from '../assets/ic_circled_super.png';

function App() {
  return (
    <nav className="navBar">
      <div className="navBar__header">
        <img className="navBar__header--img" src={logoMarket} alt="logo supermercado" title='Mercadona'></img>
        <div className="navBar__header--box">
          <h3 className="navBar__header--box--title">Mercadona</h3>
          <p className="navBar__header--box--text">Comprando en 28010</p>
        </div>
        <p className="navBar__header--change">cambiar</p>
      </div>

      <ProductList />
    </nav>
  );
}

export default App;



