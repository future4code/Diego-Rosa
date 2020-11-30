import React from 'react';
import { useForm } from '../../hooks/useForm'
import { TextField, Button} from '@material-ui/core'
import {FormContainer} from '../../styles/styles'
import PageTitle from '../../components/PageTitle/index'
import axios from 'axios'

const SignUpPage = () => {
   
        // const [form, onChangeInput] = useForm({
        //   name: '',
        //   age: 0,
        //   password: '',
        // })
      
        // const onSubmitSingUp = (e) => {
        //   e.preventDefault()
        //   console.log(form)
        //   const body = {
        //     name: form.name,
        //     age: form.age,
        //     password: form.password,
            
        //   }
      
        //   axios.post("")
        // }
      

    return <React.Fragment>
        
    {/* <PageTitle title={'Cadastre-se'} />
    <FormContainer 
    // onSubmit={onSubmitSingUp}
    >
            <TextField 
                label={'Nome'} 
                // onChange={onChangeInput}
                // value={form['name']}
                name={'name'}
            />
            <TextField 
                label={'email'} type={'email'} 
                // onChange={onChangeInput}
                // value={form['email']}
                name={'email'}
            />
            <TextField 
                label={'password'} helperText="you password here" 
                // onChange={onChangeInput}
                // value={form['password']}
                name={'password'}
            />
            
            <Button variant={'contained'} color={'primary'} type={'submit'}>Sing-Up</Button>
    </FormContainer> */}
    </React.Fragment>
}

export default SignUpPage;