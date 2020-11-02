import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import '../stylesheets/App.scss';
import NavBar from '../components/sections/NavBar'
import imgSuper from '../assets/ic_circled_super.png';
import Shop from './sections/Shop';
import Collapsible from './sections/Collapsible';
import Product from './sections/Product';
import Landing from './Landing';
import { getCategories, getDataProducts, getMarketData } from '../services/Api'


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

  // console.log(markets, categories, products)

  const renderProduct = products.map((product, index) => {
    return <Product
      key={index}
      productId={product.uuid}
      productTitle={product.name}
    />
  })


  const renderCategory = categories.map((cat, index) => {
    return <Collapsible
      key={index}
      iconCategory={categories.icon}
      categoryTitle={categories.name}
    />
  })
  console.log(renderCategory)

  return (
    <Router>
      <div >
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/tienda" component={Shop} />
          <Route exact path="/tienda/market">
            <NavBar
              logoMarket={markets.picture}
              name={markets.name}
              postalcode="28010"

              categoryTitle="Higiene"
              iconCategory={imgSuper}
              productTitle="Maquinillas"
              productId="2"

            // categoryTitle={categories.name}
            // iconCategory={categories.icon}
            // productTitle={products.name}
            // productId={products.uuid}
            // render={renderProduct}
            />

          </Route>
          {/* <Route exact path="/tienda/market/category" component={NavBar} /> */}
          <Route exact path="/tienda/market/category/subcategory" component={NavBar} />
        </Switch>
      </div>
    </Router>
  );
}
// }
export default App;



