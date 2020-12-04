import React from 'react';
import {useForm} from "../../hooks/useForm"
import { login } from '../../services/user';
import {TextField, Button} from '@material-ui/core'
import logo from '../../assets/logo.png'
import { FormContainer, LoginPageContainer } from './styles';
import { useHistory } from 'react-router-dom';
import { useUnprotectPage } from '../../hooks/useUnprotectPage';

const LoginPage = () => {
    useUnprotectPage()
    const history = useHistory()
    const {form, onChange} = useForm({email: "", password: ""})

    const handleInputChange = (event) => {
        const {value, name} = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        login(form, history)
    }

    return(
        <LoginPageContainer>
            <FormContainer onSubmit={handleSubmission} >
            <img src={logo} />
                <TextField 
                    label="E-mail"
                    variant="outlined"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                />
                <TextField  
                    label="Senha"
                    variant="outlined"                
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleInputChange}
                />
                <Button
                    variant="contained"
                    color="secundary"
                    type="submit"
                >
                    Login
                </Button>
            </FormContainer>
            <Button
                color="primary"
            >
                Não tem Login? Clique aqui
            </Button>
        </LoginPageContainer>
    )
}

export default LoginPage;