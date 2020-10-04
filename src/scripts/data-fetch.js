
const dataFetch = () =>{
    /* fetch returns a promise*/ 
    return fetch('http://localhost:3000/phones')
    .then( response =>{
        return response.json()
    })
    .then( json =>{
        return json
    })
}