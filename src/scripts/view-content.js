
tabledata = [{
    "id": 1,
    "name": "Ikaro",
    "lastName": "Silva",
    "company": "Contoso",
    "phone": "12123451234",
    "email": "ikaro.amorim@gmail.com"
}]

const tablelines = `
                        <tr>
                            <th scope="row">${tabledata[0].name}</th>
                            <td>${tabledata[0].lastName}</td>
                            <td>${tabledata[0].company}</td>
                            <td>${tabledata[0].email}</td>
                            <td>${tabledata[0].phone}</td>
                            <td>
                            <button onclick="edit()"><i class="fas fa-user-edit"></i></button>
                            <button onclick="del()"><i class="fas fa-trash-alt"></i></button>
                            <button onclick="mailto()"><i class="fas fa-paper-plane"></i></button>
                            <td>
                        </tr>
`

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

const container = document.querySelector("[data-main]")

container.innerHTML = tablecontent

console.log("content"+ tablecontent)
console.log("lines"+ tablelines)