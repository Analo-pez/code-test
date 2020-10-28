function getDataFromApi(json) {
    return fetch(
        'http://api.comprea.com/',
        {
            method: 'GET',
            body: JSON.stringify(json),
            headers: {
                'content-type': 'application/json',
            },
        }
    ).then((resp) => {
        return resp.json();
    });
}

export default getDataFromApi;