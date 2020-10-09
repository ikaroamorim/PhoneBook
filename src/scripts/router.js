import { renderEditForm } from './userEdit.js'
import { renderForm } from './usersAdd.js'
import { renderTable } from './usersTable.js'
import {userDel} from './usersDel.js'

const routes = {
    "/": renderTable,
    "/cadastra": renderForm,
    "/edita": renderEditForm,
    "/deleta": userDel,
}

//const rootdiv = document.querySelector("[data-main]")

const navigation = pathname => {
    window.history.pushState({}, pathname, window.location.origin + pathname)

    //rootdiv.innerHTML = ""

    const startRoute = routes[window.location.pathname]

    startRoute()
}

window.navigation = navigation

window.onpopstate = () =>{
    const popRoute = routes[window.location.pathname]
    popRoute()
}

export {navigation}