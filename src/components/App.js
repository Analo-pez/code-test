import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  NavLink
} from "react-router-dom";
import '../stylesheets/App.scss';
import NavBar from '../components/sections/NavBar'
import imgSuper from '../assets/ic_circled_super.png';
import Shop from './sections/Shop';
import Collapsible from './sections/Collapsible';
import Product from './sections/Product';
import Landing from './Landing';
import { getApiData, getDataFromApi } from '../services/Api'
import ProductList from './sections/ProductList';

function App(props) {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(
    () => {
      getDataFromApi().then(data => {
        setCategories(data.categories);
      });
    }, []);

  console.log(categories)

  return (
    <Router>
      <div >
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/tienda" component={Shop} />
          <Route exact path="/tienda/market" component={NavBar} />
          <Route exact path="/tienda/market/category" component={NavBar} />
          <Route exact path="/tienda/market/category/subcategory" component={NavBar} />
        </Switch>
      </div>
    </Router>
  );
}
// }
export default App;



