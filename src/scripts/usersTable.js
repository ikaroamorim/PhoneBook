import { dataFetch } from './api.js'
import { viewContent } from './view-content.js'

/* Function Show Table displays a table, according our data model object array */
const usersTable = (tableData) => {
    let tablelines = ''

    tableData.forEach(item => {
        tablelines += `
        <tr>
            <th scope="row">${item.name}</th>
            <td>${item.lastName}</td>
            <td>${item.company}</td>
            <td>${item.email}</td>
            <td>${item.phone}</td>
            <td>
            <button onclick="navigation('/edita?id=${item.id}')" type="button" class="btn btn-primary"><i class="fas fa-user-edit"></i></button>
            <button onclick="navigation('/deleta?id=${item.id}')" type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
            <a href="mailto:${item.email}"><button type="button" class="btn btn-secondary"><i class="fas fa-paper-plane"></i></button> </a>
            <td>
        </tr>
    `
    });


    const tablecontent = `
        <h1><i class="fas fa-list"></i> Cadastro de Usuários</h1>
        <table class="table table-hover">
            <thead class="thead-dark">
                <th scope="col">Nome</th>
                <th scope="col">Sobrenome</th>
                <th scope="col">Empresa</th>
                <th scope="col">E-mail</th>
                <th scope="col">Número</th>
                <th scope="col">Ações</th>
                <th scope="col"><button type="button" class="btn btn-success" id="addItem" onclick="navigation('/cadastra'); return false;"><i class="fas fa-plus"></i></button></th>
            </thead>
            <tbody>
                ${tablelines}
            </tbody>
        </table>
    `
    return tablecontent;
}

/*    -> the button will use navigation
const addBtnEventListener = () => {
    const btn = document.getElementById('addItem')
    btn.addEventListener('click', () => {
        renderForm();
    })
}
*/

const renderTable = () => {
    //example content
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
    dataFetch().then(result => {
        viewContent(usersTable(result))
        //addBtnEventListener()   -> the button will use navigation
    })
        .catch(error => {
            viewContent(usersTable(tableData))
            console.error(error + ' \n Using Example data')
        })
}

export { renderTable }