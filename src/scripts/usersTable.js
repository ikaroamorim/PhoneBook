import {dataFetch} from './api.js'
import {renderEditForm} from './userEdit.js'
import {viewContent} from './view-content.js'

/* Function Show Table displays a table, according our data model object array */
const usersTable = (tableData)=> {
    let tablelines = ''

    tableData.forEach( item => {
        tablelines += `
        <tr>
            <th scope="row">${item.name}</th>
            <td>${item.lastName}</td>
            <td>${item.company}</td>
            <td>${item.email}</td>
            <td>${item.phone}</td>
            <td>
            <button onclick="renderEditForm(${item.id})" type="button" class="btn btn-primary"><i class="fas fa-user-edit"></i></button>
            <button onclick="userDel(${item.id})" type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
            <button onclick="mailto(${item.id})" type="button" class="btn btn-secondary"><i class="fas fa-paper-plane"></i></button>
            <td>
        </tr>
    `
    });


    const tablecontent = `
        <h1>Cadastro de Usuários</h1>
        <table class="table table-hover">
            <thead class="thead-dark">
                <th scope="col">Nome</th>
                <th scope="col">Sobrenome</th>
                <th scope="col">Empresa</th>
                <th scope="col">E-mail</th>
                <th scope="col">Número</th>
                <th scope="col">Ações</th>
                <th scope="col"><button type="button" class="btn btn-success" onclick="renderForm()"><i class="fas fa-plus"></i></button></th>
            </thead>
            <tbody>
                ${tablelines}
            </tbody>
        </table>
    `
    return tablecontent;
}

const renderTable = () =>{
    const tableData = [{
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

    /* Render the table, in case of errors render example content */
    dataFetch().then( result =>{ 
        viewContent(usersTable(result))
    })
    .catch( error =>{
        viewContent(usersTable(tableData))
        console.error(error + ' \n Using Example data')
})
}

export {renderTable}