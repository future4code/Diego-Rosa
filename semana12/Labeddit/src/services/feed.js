import axios from "axios"
import {BASE_URL} from "../constants/apiConstants"
import { goToFeedPage } from "../routes/coordinator"

export const createPost = (body, history) => {
    const token = localStorage.getItem("token")
    
    axios.post(`${BASE_URL}/recipe`, body, {
        headers: {
            Authorization: token
        }
    }).then((response) => {
        console.log(response)
        goToFeedPage(history)
    }).catch(error => {
        alert("Email ou senha inválidos!")
        console.log(error.message)
    })
}