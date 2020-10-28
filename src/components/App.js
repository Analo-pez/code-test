import React, { useState, useEffect } from 'react';
import '../stylesheets/App.scss';
import NavBar from '../components/sections/NavBar'
import imgSuper from '../assets/ic_circled_super.png';


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
    <div >
      <NavBar
        logoMarket={imgSuper}
        name="Mercadona"
        postalcode="28010"
      />
    </div>
  );
}
// }
export default App;



