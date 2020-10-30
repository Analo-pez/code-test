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


function App() {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch('http://api.comprea.com/')
  //     .then(response => response.json())
  //     .then(
  //       (data) => {
  //         console.log(data);
  //         setIsLoaded(true);
  //         setProducts(data);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     )
  // }, [])

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>;
  // } else {

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



