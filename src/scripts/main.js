/*
    To start Json server json-server --watch db.json
*/
//import {renderTable} from './usersTable.js'
import {navigation} from './router.js'

/* Necessário importar os estilos no ponto de entrada*/
import "../styles/style.css"
import "../styles/addform.css"

//renderTable()
navigation( window.location.pathname)
