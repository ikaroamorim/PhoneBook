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
            <button onclick="edit(${item.id})" type="button" class="btn btn-primary"><i class="fas fa-user-edit"></i></button>
            <button onclick="del(${item.id})" type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
            <button onclick="mailto(${item.id})" type="button" class="btn btn-secondary"><i class="fas fa-paper-plane"></i></button>
            <td>
        </tr>
    `
    });


    const tablecontent = `
        <table class="table table-hover">
            <thead class="thead-dark">
                <th scope="col">Nome</th>
                <th scope="col">Sobrenome</th>
                <th scope="col">Empresa</th>
                <th scope="col">E-mail</th>
                <th scope="col">Número</th>
                <th scope="col">Ações</th>
            </thead>
            <tbody>
                ${tablelines}
            </tbody>
        </table>
    `
    return tablecontent;
}