import React, { useState, useEffect } from 'react';
import '../stylesheets/App.scss';
import NavBar from '../components/sections/NavBar'
import imgSuper from '../assets/ic_circled_super.png';
import { getDataFromApi, getApiPostalcode, getApiCompany } from '../services/Api'



function App() {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [products, setProducts] = useState([]);
  // const [company, setCompany] = useState([]);
  const [token, setToken] = useState("");
  const [shops, setShops] = useState([]);

  //GUARDO EL TOKEN UNA VARIABLE DE ESTADO PARA USAR
  useEffect(
    () => {
      getDataFromApi().then(data => {
        setToken(data.token);
      });
    }, [])
  console.log(token)


  //LLAMADA PARA COMPROBAR CODIGO POSTAL, PERO DA ERROR
  // getApiPostalcode(token, "28010") //para ejecutar la funcion sin hook
  useEffect(
    () => {
      getApiPostalcode(token, "28010").then(data => {
        setShops(data)
      });
    }, [])
  console.log(shops)

  //POR SI PUEDO ACCEDER A LA API, SOLICITAR LA DATA DE MERCADONA
  // useEffect(
  //   () => {
  //     getApiCompany(token).then(data => {
  //       setCompany(data)
  //     });
  //   }, [])
  // console.log(company)


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

export default App;



