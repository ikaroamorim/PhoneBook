import {renderTable} from './usersTable.js'
import {dataPost} from './api.js'
import {viewContent} from './view-content.js'

const usersAdd = () =>{
    const contentmain = `
               <h1>Cadastre um novo Contato</h1>
                <form action="" method="post" data-form>
                    <div class="form-group name">
                        <i class="fas fa-user-circle"></i>
                        <input type="text" placeholder="Nome" id="addname">
                        <input type="text" placeholder="Sobrenome" id="addlastname">
                    </div>
                    <div class="form-group">
                        <i class="fas fa-building"></i>
                        <input type="text" placeholder="Empresa" id="addcompany">
                    </div>
                    <div class="form-group">
                        <i class="fas fa-phone"></i>
                        <input type="tel" name="" placeholder="Telefone" id="addphone">
                    </div>
                    <div class="form-group">
                        <i class="fas fa-envelope"></i>
                        <input type="email" name="" placeholder="E-mail" id="addmail">
                    </div>
                        <div class="form-group">
                        <input type="submit" value="Voltar"id="addformcancel">
                        <input type="submit" value="Cadastrar" id="addformsend">
                    </div>
                </form>`
    return contentmain
}

const eventsAddForm = () =>{
    const form = document.querySelector('[data-form]')
    const btncancel = document.getElementById('addformcancel')
    const btnsend = document.getElementById('addformsend')

    btncancel.addEventListener("click", event =>{
        event.preventDefault()
        renderTable()
    })

    btnsend.addEventListener("click", event =>{
        event.preventDefault()
        const datasend ={
            "name": document.getElementById('addname').value,
            "lastName": document.getElementById('addlastname').value,
            "company": document.getElementById('addcompany').value,
            "phone": parseInt(document.getElementById('addphone').value),
            "email": document.getElementById('addmail').value
        }
        dataPost(datasend)
        renderTable()
    })
}

const renderForm = () =>{
    viewContent(usersAdd())
    eventsAddForm()
}

export {renderForm}