/*
    To start Json server json-server --watch db.json
*/

let tableData = [{
    "id": 1,
    "name": "Ikaro",
    "lastName": "Silva",
    "company": "Contoso",
    "phone": "12123451234",
    "email": "ikaro.amorim@gmail.com"
},
{
    "id": 2,
    "name": "João",
    "lastName": "Oliveira",
    "company": "Contoso",
    "phone": "12123451234",
    "email": "joliveira@gmail.com"
},
{
    "id": 3,
    "name": "Pedro",
    "lastName": "Silvestre",
    "company": "Fabrikam",
    "phone": "12123451234",
    "email": "psilvestre@gmail.com"
},
{
    "id": 1,
    "name": "Ikaro",
    "lastName": "Silva",
    "company": "Contoso",
    "phone": "12123451234",
    "email": "ikaro.amorim@gmail.com"
},
{
    "id": 2,
    "name": "João",
    "lastName": "Oliveira",
    "company": "Contoso",
    "phone": "12123451234",
    "email": "joliveira@gmail.com"
},
{
    "id": 3,
    "name": "Pedro",
    "lastName": "Silvestre",
    "company": "Fabrikam",
    "phone": "12123451234",
    "email": "psilvestre@gmail.com"
}]

var dados = dataFetch().then( result =>{ 
    console.log(usersTable(result))
    viewContent(usersTable(result))
    return usersTable(result)
})

console.log(dados)
