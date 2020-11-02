import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import '../stylesheets/App.scss';
import imgSuper from '../assets/ic_circled_super.png';
import Shop from './sections/Shop';
import Collapsible from './sections/Collapsible';
import Product from './sections/Product';
import HeaderNav from './sections/HeaderNav';
import Landing from './Landing';
import { getCategories, getDataProducts, getMarketData } from '../services/Api'
import CategoriesList from './sections/CategoriesList';


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

  console.log(categories, products)

  // const renderProduct = products.map((product, index) => {
  //   if (product) {
  //     return <Product
  //       key={index}
  //       productId={product.uuid}
  //       productTitle={product.name}
  //     />
  //   }
  // })
  // const renderProduct = () => {
  //   for (const subcategory of subcategories) {
  //     return <Product
  //       productId={subcategory.uuid}
  //       productTitle={subcategory.name} />
  //   }
  // }


  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/tienda" component={Shop} />
          <Route path="/tienda/mercadona">
            <nav className="navBar">
              <HeaderNav
                logoMarket={markets.picture}
                name={markets.name}
                postalcode="Madrid"
              />
              <CategoriesList
                categories={categories} />
            </nav>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
// }
export default App;



