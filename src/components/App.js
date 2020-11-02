import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.scss';
import NavBar from '../components/sections/NavBar'
import Collapsible from '../components/sections/Collapsible'
import imgSuper from '../assets/ic_circled_super.png';
import { getCategories, getDataProducts, getMarketData } from '../services/Api'
import ProductList from './sections/ProductList';


function App(props) {
  const [markets, setMarkets] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(
    () => {
      getMarketData().then(data => {
        setMarkets(data.services[1].markets[2])
      })
      getCategories().then(data => {
        setCategories(data.categories);
      });
      getDataProducts().then(data => {
        setProducts(data.items)
      })
    }, []);

  console.log(markets, categories, products)

  // const renderCategories = props => {
  //   const category = categories.map((cat, index) => {
  //     return <Collapsible
  //       key={index}
  //       categoryTitle={cat.name}
  //       iconCategory={cat.icon}
  //     />

  //   })
  // }





  return (
    <div >
      <Switch>
        <Route exact path="/tienda/">
          <NavBar
            logoMarket={markets.picture}
            name={markets.name}
            postalcode="28010"
          />
        </Route>
        <Route exact path="/tienda/categories/" >
          <Collapsible
            categoryTitle={categories.name} />
        </Route>
        {/* <Route exact path="/tienda/categories/example"
          render={renderCategories} /> */}
      </Switch>
    </div >
  );
}

export default App;



