import Axios from 'axios';
import React, { useLayoutEffect } from 'react'
import styled from 'styled-components'
import axios from "axios"

/*this component get list of users in databases*/

const DeleteButton = styled.button `
    background-color: red;
    color:#fff;
    padding: 10px;
    margin-left: 10px;
    border: none;
    border-radius: 4px;
`;

const patternUrl = " https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const axiosConfig =  { 
    headers: {
        Authorization: "diego-rosa-dumont"
        }
    }

    class UserListPage extends React.Component {
    state ={
        userList: [] 
    }

    componentDidMount = () => {
        this.getAllUsers()
    }

    getAllUsers = async () => {
        try {
            const response = await axios.get(patternUrl, axiosConfig)
            console.log(response.data)
        }catch(err) {
            console.log(err.message)
        }
        /*
        axios.get(patternUrl, axiosConfig).then(response => {
            this.setState({userList: response.data})
            console.log(response.data)
        }).catch(err => {
            console.log(err.message)
        })*/
    }

    deleteUser = (userId) => {
        axios.delete(`${patternUrl}/${userId} `, axiosConfig).then(response => {
            alert('Usuário deletado com sucesso!')
            this.getAllUsers()
        }).catch(err => {
            console.log(err.message)
        })
    }

    render(){
    /*renders a array on the screen*/
        const renderUserList = this.state.userList.map(user => {
        return (

            <ul>
            <li
                key={user.id}>
                {user.name}
                <DeleteButton
                onCLick={ () => this.deleteUser(user.Id)}
                >
                    Delete
                </DeleteButton>
                    
            </li>
        </ul>
        
        );
    });

        return (
            <div>
                <h2>Registered users:</h2>
               {renderUserList}

            </div>
        )
    }
}

export default UserListPage;