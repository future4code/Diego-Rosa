import React from 'react';
import {useHistory} from 'react-router-dom'
import { TextField, Button } from '@material-ui/core'
import { LoginForm } from '../../styles/styles'
import {useForm} from '../../hooks/useForm'
import axios from 'axios'
import PageTitle from '../../components/PageTitle/index'



const LoginPage = () => {

    // const history = useHistory()
    // const [form, onChangeInput] = useForm({
    //   email: '',
    //   password: ''
    // })
  
    // const onSubmitLogin = (event) => {
    //   event.preventDefault()
    //   const body = {
    //     email: form.email,
    //     password: form.password
    //   }
    //   axios.post("").then((response) => {
    //     window.localStorage.setItem('token', response.data.token)
    //     history.push('/')
    //   })
    // }

    return <React.Fragment>
        <PageTitle title={'Login'}/>
        <LoginForm
        //  onSubmit={}
         >
            <TextField
                label={'Email'}
                type={'email'}
                // onChange={}
                // value={form['email']}
                name={'email'}
            />
            <TextField
                label={'Senha'}
                type={'password'}
                // onChange={}
                // value={form['password']}
                name={'password'}
            />
            <Button variant={'contained'} color={'primary'} type={'submit'}>Entrar</Button>
        </LoginForm>
        </React.Fragment>
}

export default LoginPage;