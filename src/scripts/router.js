//const { renderTable } = require("./usersTable");
import {renderTable} from './usersTable.js'

const routes = {
    "/": renderTable,
}

//const rootdiv = document.querySelector("[data-main]")

const navigation = pathname => {
    window.history.pushState({}, pathname, window.location.origin + pathname)

    //rootdiv.innerHTML = ""

    const startRoute = routes[window.location.pathname]

    startRoute()
}

export {navigation}