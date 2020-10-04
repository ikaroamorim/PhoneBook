
const usersEdit = (data) =>{
    const contentmain = `
               <h1>Edite o  Contato ${data.id}</h1>
                <form action="" method="post" data-form>
                    <div class="form-group name">
                        <i class="fas fa-user-circle"></i>
                        <input type="text" placeholder="Nome" id="editname" value="${data.name}">
                        <input type="text" placeholder="Sobrenome" id="editlastname" value="${data.lastName}">
                    </div>
                    <div class="form-group">
                        <i class="fas fa-building"></i>
                        <input type="text" placeholder="Empresa" id="editcompany" value="${data.company}">
                    </div>
                    <div class="form-group">
                        <i class="fas fa-phone"></i>
                        <input type="tel" name="" placeholder="Telefone" id="editphone" value="${data.phone}">
                    </div>
                    <div class="form-group">
                        <i class="fas fa-envelope"></i>
                        <input type="email" name="" placeholder="E-mail" id="editmail" value="${data.email}">
                    </div>
                        <div class="form-group">
                        <input type="submit" value="Voltar"id="editformcancel">
                        <input type="submit" value="Cadastrar" id="editformsend">
                    </div>
                </form>`
    return contentmain
}

const eventsEditForm = (id) =>{
    const edtbtncancel = document.getElementById('editformcancel')
    const edtbtnsend = document.getElementById('editformsend')

    edtbtncancel.addEventListener("click", event =>{
        event.preventDefault()
        renderTable()
    })

    edtbtnsend.addEventListener("click", event =>{
        event.preventDefault()
        const datasend ={
            "name": document.getElementById('editname').value,
            "lastName": document.getElementById('editlastname').value,
            "company": document.getElementById('editcompany').value,
            "phone": parseInt(document.getElementById('editphone').value),
            "email": document.getElementById('editmail').value
        }
        dataEdit(id,datasend)
        renderTable()
    })
}

const renderEditForm = (id) =>{
    dataGet(id)
    .then(response =>{
        viewContent(usersEdit(response))
        eventsEditForm(id)
    })
    
    
}