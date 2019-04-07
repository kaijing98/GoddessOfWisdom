import Axios from 'axios'
const userToken =
  'v^1.1#i^1#I^3#p^1#f^0#r^0#t^H4sIAAAAAAAAAOVXfWwURRTvXb9SS0FFgSDqdRENmt2b3dv72vTOHG2BE2hL76zQSHBvd7a37d7uujNHe4ZoUyJGC5gQDcJfDTUKJkL4wxiIJsaooIZgJBjFRBMxkfhRidWiBoKze0e5VgIUDiHxcsndvnnz5v1+v/dmdkB/Vc2DG5duPF3nqnYP9YN+t8vF1oKaqsqHppe751aWgSIH11D/ff0VA+UnG5CY0UyhHSLT0BH09GU0HQmOMUJlLV0wRKQiQRczEAlYEhKxFcsFjgGCaRnYkAyN8sSbIpSsBPx8EAb4gOwPgpBErPr5mEkjQrFBCYowALkQz0MgBcg4QlkY1xEWdRyhOMCGacDTIJhkeYEnX44Jcf5OytMBLaQaOnFhABV10hWcuVZRrpdOVUQIWpgEoaLx2OJEayze1NySbPAWxYoWeEhgEWfRxKdGQ4aeDlHLwksvgxxvIZGVJIgQ5Y3mV5gYVIidT+Yq0neoVkAqzIWUlKSAoN+XkkpC5WLDyoj40nnYFlWmFcdVgDpWce5yjBI2Ut1QwoWnFhIi3uSxf1ZmRU1VVGhFqOZFsdWxtjYqmhalHgylND3+p629iVbYgAz9gVSADvlF0ReWlMJC+WgFmiet1GjosmqThjwtBl4ESdZwMje+Im6IU6veasUUbGdU7BcY5xB02qLmVczitG7rCjOECI/zeHkFxmdjbKmpLIbjESYPOBRFKNE0VZmaPOjUYqF8+lCESmNsCl5vb28v0+tjDKvLywHAeletWJ6Q0jAjUsTX7vW8v3r5CbTqQJEgmYlUAedMkksfqVWSgN5FRX0hPxvmCrxPTCs62fovQxFm78SOKFWHBMNkGwKKn+MVOcSHgqXokGihSL12HjAl5uiMaPVAbGqiBGmJ1Fk2Ay1VFnx+hfOFFEjLgbBC82FFoVN+OUCzCoQAwlRKCof+T41ypaWekAwTthmaKuVKUvClK3ZLbhMtnEtATSOGK636i4JENsjrDs/u9SlBtGMgEkQ0VcaubUYyMl5DJJuabVrrZH1NuGOmGc9kslhMaTBemg3tBm1mF4WnkuP+psJE9MsLqcr5c5px1GTQOomxIDKyFnlFYVrtYytp9ECdbALYMjQNWh3sNQt9k+k7xb3y6nCX7qCeIm7S69x1rW1JU0kJrb0x6G6wqqqIby7UrN/PB/gQF7o2TRsdTZO5/+AsmhK8pQbCUL4O75XeibfcaJnzYQdcb4EB1z5yUQZesICdD+qryh+tKJ82F6kYMqqoMEjt0snlzYJMD8yZomq5q1zq1s+fO1Z0rx5aA+aM36xrytnaoms2mHdhpJKdMbuODQMeBFmefLhOMP/CaAU7q+KOOatqj31ouvd/VbuLavm07njlQv+boG7cyeWqLKsYcJXp2+l13Vu55Pp7lz8jnXAt3Hb2/elzdu05oaXdg0e7X/nRd/hrT1x6YTC9e+TuHcuS3V2jR6mtjyjb9+5TF362f93jZ+7xhVqHa19qPTX7tbnKhsGH53882rB7dOfSsQ9GVsaf+vKuyp+E4yeXBJ7//ofN1Wdb3uAOKuoT99/u3fTXL5lpdw6XyZuH/t5LZ06PmPSWc2d2s2+/x+z8nZ6xXqBqPjr057aZv63c/+4y+deR40zLEXbmwB97njaXdAZvO+QqP9cRebX+m59vne45OGQOjTW++HLzyW93Vm/6ItI8b+zwO/WD044scD+w57H219dsWf1d1bGxgQ23fNK3o719GDWfevbAgcSs0YNPNuTl+wcDICCJ8RAAAA=='

// This obtains the user consent

export const axiosConfig = () => {
  return Axios.create({
    baseURL: 'https://api.ebay.com/buy/browse/v1',
    headers: {
      Authorization: `Bearer ${userToken}`,
      'Access-Control-Allow-Origin': '*',
    },
  })
}

export const getItems = async query => {
  const api = await axiosConfig()

  const splitQuery = query.split(' ')
  let joinedQuery = splitQuery.slice(0, 5).join(' ')
  console.log(query)
  return api
    .get('item_summary/search', {
      params: {
        q: `Sustainable ${query}`,
      },
    })
    .then(r => r.data)
}
