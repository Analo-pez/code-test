import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import '../stylesheets/App.scss';
import Shop from './sections/Shop';
import HeaderNav from './sections/HeaderNav';
import Landing from './Landing';
import { getCategories, getDataProducts, getMarketData } from '../services/Api'
import CategoriesList from './sections/CategoriesList';
import Loader from '../components/complements/Loader';
import SubcategoriesList from './sections/SubcategoriesList';



function App(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [markets, setMarkets] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(
    () => {
      setIsLoading(true);
      getMarketData().then(data => {
        setMarkets(data.services[1].markets[2]);
        setIsLoading(false);
      })
      getCategories().then(data => {
        setCategories(data.categories);
        setIsLoading(false);
      });
      getDataProducts().then(data => {
        setProducts(data.items);
        setIsLoading(false);
      })
    }, []);

  console.log(markets)

  if (isLoading) return <Loader />;

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/tienda" component={Shop} />
          <Route path="/tienda/mercadona">
            {/* <img className="pageBkg" src={markets.logotype_background} /> */}
            <nav className="navBar">
              <HeaderNav
                logoMarket={markets.picture}
                name={markets.name}
                postalcode="Madrid"
              />
              <SubcategoriesList
                categories={categories}
                products={products} />
            </nav>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;



