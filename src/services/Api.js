

// const URL = 'https://api.comprea.com/v7/';
// const postalcode = "28010"
// const companyID = "1"
// const categoryID = "99673"


// const getDataFromApi = async () => {
//     try {
//         const firstPromise = await fetch(`${URL}user/session`)
//         const result = await firstPromise.json()

//         const newPromise = await fetch(`${URL}user/postalcode?token=${result.token}&postalcode=${postalcode}`)

//         const markets = await newPromise.json()
//         console.log(markets.services[1].markets)

//         const otherPromise = await fetch(`${URL}company/categories?token=${result.token}&postalcode=${postalcode}&company_id=${companyID}`)

//         const productsCategory = await otherPromise.json()
//         console.log(productsCategory.categories)

//         const otherPromise2 = await fetch(`${URL}company/items?token=${result.token}&postalcode=${postalcode}&company_id=${companyID}&category_id=${categoryID}`)

//         const products = await otherPromise2.json()
//         console.log(products.items)

//     }
//     catch (err) {
//         console.error(err)
//     }
// }

// getDataFromApi()





// //LLAMADA PARA OBTENER TOKEN VALIDO
// export const getDataFromApi = () => {
//     return fetch(
//         `${URL}user/session`
//     ).then((resp) => {
//         return resp.json();
//     });
// }


// // // //LLAMADA PARA ACCEDER A CODIGO POSTAL
// export const getApiPostalcode = (token, postalcode) => {
//     return fetch(`${URL}user/postalcode?token=${token}&postalcode=${postalcode}`
//     ).then((response) => {
//         return response.json()
//     }
//     )
//     //LO COMENTO PARA PODER TERMINAR LA LLAMADA EN APP CON HOOK USEEFFECT
//     // .then(data => {
//     //     console.log(data)
//     //     return data
//     // }
//     // )

// }








//LLAMADA PARA ACCEDER A SUPERMERCADO Y CATEGORIAS

// export const getApiCompany = async (token, postalcode) => {
//     return fetch(`./apiResults/categories.json`
//         , {
//             method: 'GET',
//             mode: 'cors',
//             body: JSON.stringify(),
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//             redirect: 'follow',
//             referrerPolicy: 'no-referrer',
//             credentials: 'include'

//         }
//     ).then((response) => {
//         console.log(response)
//         return response.text()
//     }
//     )
//         .then(data => {
//             console.log(data)
//             return data
//         }
//         )

// }





// export const getDataTotal = async (postalcode) => {
//     const promise1 = fetch(
//         'https://api.comprea.com/v7/user/session',
//     )
//     const resp1 = promise1.respone.json();
//     const result1 = resp1.token
//     console.log(result1);

//     const promise2 = await fetch(`https://api.comprea.com/v7/user/${postalcode}`
//     )
//     const resp2 = promise2.resp.json();
//     const result2 = resp2
//     console.log(result2);

//     const promise3 = await fetch(`https://api.comprea.com/v7/user/${postalcode}/company/category`
//         , {
//             method: 'GET',
//             mode: 'cors',
//             headers: {
//                 "Authorization": `Bearer ${result1}`,
//             },
//         })
//     const resp3 = promise3.resp.json();
//     const result3 = resp3
//     console.log(result3);


// }

// getDataTotal()