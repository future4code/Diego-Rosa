import { useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { goToLoginPage, goToFeedPage } from '../routes/coordinator.js';


export const useUnprotectPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (token) {
            goToFeedPage(history)
        }
    }, [history])

}