const URL = 'https://api.comprea.com/v7/';
const postalcode = "28010"
const companyID = "1"
const categoryID = "99673"


export function getMarketData(json) {
    return fetch(`${URL}user/session`)
        .then(resp => resp.json())
        .then(result => {
            const token = result.token;
            return fetch(`${URL}user/postalcode?token=${token}&postalcode=${postalcode}`)
        })
        .then((resp) => {
            return resp.json()
        })
}

export function getCategories(json) {
    return fetch(`${URL}user/session`)
        .then(resp => resp.json())
        .then(result => {
            const token = result.token;
            return fetch(`${URL}company/categories?token=${token}&postalcode=${postalcode}&company_id=${companyID}`)
        })
        .then((resp) => {
            return resp.json()
        })
}



export function getDataProducts(json) {
    return fetch(`${URL}user/session`)
        .then(resp => resp.json())
        .then(result => {
            const token = result.token;
            return fetch(`${URL}company/items?token=${token}&postalcode=${postalcode}&company_id=${companyID}&category_id=${categoryID}`)
        })
        .then((resp) => {
            return resp.json()
        })
}


