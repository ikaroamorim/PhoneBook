import {dataDelete} from './api.js'
import { navigation } from './router.js'



const userDel = () =>{
    const url = new URL(window.location)
    const id = url.searchParams.get('id')

    dataDelete(id)
    navigation('/')
}

export {userDel}