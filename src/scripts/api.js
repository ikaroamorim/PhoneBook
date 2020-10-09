/*This file Keeps all code related to the API to persist data*/

/* Get all items */
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

/* Create a entrie*/
const dataPost = (data) =>{
    const Json = JSON.stringify(data)

    return fetch('http://localhost:3000/phones',{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: Json
    })
    .then(response => {
        return response.body
    })
}

/* Delete a Entrie*/
const dataDelete = (id) =>{
    return fetch(`http://localhost:3000/phones/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(response => {
        return response.body
    })
}

/* Seleciona um usuário */
const dataGet = (id) => {
    return fetch(`http://localhost:3000/phones/${id}`)
    .then( response =>{
        return response.json()
    })
    .then( json =>{
        return json
    })
}

/* Atualiza um usuário*/
const dataEdit = (id, data) =>{
    const Json = JSON.stringify(data)

    return fetch(`http://localhost:3000/phones/${id}`,{
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: Json
    })
    .then(response => {
        return response.body
    })

}

export {
    dataFetch, 
    dataPost,
    dataDelete,
    dataGet,
    dataEdit
}
