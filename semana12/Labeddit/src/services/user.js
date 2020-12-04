import axios from "axios"
import {BASE_URL} from "../constants/apiConstants"
import { goToFeedPage } from "../routes/coordinator.js"

export const login = (body, history) => {
    
    axios.post(`${BASE_URL}/user/login`, body).then(response => {
        localStorage.setItem("token", response.data.token)
        goToFeedPage(history)
    }).catch(error => {
        alert("Email ou senha inválidos!")
        console.log(error.message)
    })
}

export const signup = (body, history) => {
    
    axios.post(`${BASE_URL}/user/signup`, body).then(response => {
        localStorage.setItem("token", response.data.token)
        goToFeedPage(history)
    }).catch(error => {
        console.log(error.message)
    })
}

