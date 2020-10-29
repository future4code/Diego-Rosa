import React from 'react'
import axios from 'axios'
import styled from 'styled-components';
/*this component makes a connection to the databases API to create a user*/

    const DivContainer = styled.div `
        background-color: #f2f2f2;
        color:  #666666;
        box-shadow: 5px 10px 18px #888888;
        display: flex;
        justify-content:center;
        flex-direction: column;
        align-items:center;
        text-align: center;
        width: 400px;
        height: 300px;
    `;

    const InputContainer = styled.input `
        margin: 10px;    
    `;

    const CreateUserButton = styled.button `
        background-color:  #99ff66;
        color: #666666;
        border:none;
        border-radius: 10px;
        padding:10px;
        margin: 10px;
    `;

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const axiosConfig = {
    headers: {
        Authorization: "diego-rosa-dumont"
    }
}

class FormPage extends React.Component {
    state ={
        nameValue: "",
        emailValue: ""
    }
    
    createUser = () => {
        const body = {
            name: this.state.nameValue,
            email: this.state.emailValue
        }
        
        axios.post(baseUrl, axiosConfig, body,).then(response => {
            alert("Usuário criado com sucesso!")
            this.setState({nameValue:"", emailValue: ""})
            }).catch(err => {
            console.log(err.message)
        })
    }
    
    onChangeNameValue = (event) => {
        this.setState({nameValue: event.target.value})
    }
    
    
    onChangeEmailValue = (event) => {
        this.setState({emailValue: event.target.value})
    }
    
    render(){
        
        return (
            <DivContainer>
                <label>
                    Name:
                    <InputContainer        
                        value={this.state.nameValue}
                        onChange={this.onChangeNameValue}
                        />
                </label>
                <label>
                    E-mail:
                    <InputContainer
                        value={this.state.emailValue}
                        onChange={this.onChangeEmailValue}
                        />
                </label>

                <CreateUserButton
                 onClick={this.createUser}>
                    Create User
                </CreateUserButton>
            </DivContainer>
        );
    }
}

export default FormPage;