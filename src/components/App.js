import React, { useState, useEffect } from 'react';
import '../stylesheets/App.scss';
import NavBar from '../components/sections/NavBar'
import imgSuper from '../assets/ic_circled_super.png';
import { getDataFromApi, getApiPostalcode } from '../services/Api'


function App(props) {
  // const [markets, setMarkets] = useState([]);
  // const [categories, setCategories] = useState([]);
  // const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);


  useEffect(
    () => {
      getDataFromApi();
    }, [])


  const getDataFromApi = async () => {
    const URL = 'https://api.comprea.com/v7/';
    const postalcode = "28010"
    const companyID = "1"
    const categoryID = "99673"
    try {
      const firstPromise = await fetch(`${URL}user/session`)
      const result = await firstPromise.json()
      // setToken(result.json)

      const newPromise = await fetch(`${URL}user/postalcode?token=${result.token}&postalcode=${postalcode}`)
      const markets = await newPromise.json()
      // console.log(markets.services[1].markets)

      const otherPromise = await fetch(`${URL}company/categories?token=${result.token}&postalcode=${postalcode}&company_id=${companyID}`)
      const productsCategory = await otherPromise.json()
      // console.log(productsCategory.categories)

      const otherPromise2 = await fetch(`${URL}company/items?token=${result.token}&postalcode=${postalcode}&company_id=${companyID}&category_id=${categoryID}`)
      const products = await otherPromise2.json()
      // console.log(products.items)

      // setCategories(productsCategory.categories)
      // setMarkets(markets.services[1].markets)
      // setProducts(products.items)

      setData([markets.services[1].markets, productsCategory.categories, products.items])
    }
    catch (err) {
      console.error(err)
    }
  }

  console.log(data)



  //GUARDO EL TOKEN UNA VARIABLE DE ESTADO PARA USAR
  // useEffect(
  //   () => {
  //     getDataFromApi().then(data => {
  //       setToken(data.token);
  //     });
  //   }, [])
  // console.log(token)



  return (
    <div >
      <NavBar
        logoMarket={imgSuper}
        //data[1].companies.icon
        name="Mercadona"
        postalcode="28010"
      />
    </div>
  );
}

export default App;



