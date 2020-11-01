export function getDataFromApi(json) {
    const URL = 'https://api.comprea.com/v7/';
    const postalcode = "28010"
    const companyID = "1"
    const categoryID = "99673"
    return fetch(`${URL}user/session`)
        .then(resp => resp.json())
        .then(result => {
            const token = result.token;
            return fetch(`${URL}company/categories?token=${token}&postalcode=${postalcode}&company_id=${companyID}`)
        })

        .then((resp) => {
            return resp.json()

        })

    // .then(data => {
    //     console.log(data)

    //     console.log(categories)
    //     return fetch(`${URL}company/items?token=${result.token}&postalcode=${postalcode}&company_id=${companyID}&category_id=${categoryID}`)
    // })
    // .then(resp => resp.json())
    // .then(result => {
    //     const products = result.items;
    //     console.log(products)
}

//         )
// }

//     return fetch(
//         'http://api.comprea.com/',
//         {
//             method: 'GET',
//             body: JSON.stringify(json),
//             headers: {
//                 'content-type': 'application/json',
//             },
//         }
//     ).then((resp) => {
//         return resp.json();
//     });
// }

// export default getDataFromApi;


