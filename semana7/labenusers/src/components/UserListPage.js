import React, { useLayoutEffect } from 'react'
import styled from 'styled-components'

/*this component get list of users in databases*/

const DeleteButton = styled.button `
    background-color: red;
    color:#fff;
    padding: 10px;
    margin-left: 10px;
    border: none;
    border-radius: 4px;

    /*
    li {
        box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        background-color:red;
    } 
    */
`;

class UserListPage extends React.Component {
    state ={
        userList: [
            {
                id:"23",
                name: "Diego dos Santos "
            },
            {
                id:"18",
                name: "Alice Fernanda"
            }
        ] 
    }


    render(){
    /*renders a array on the screen*/
        const renderUserList = this.state.userList.map(user => {
        return (

            <ul>
            <li
                key={user.id}>
                {user.name}
                <DeleteButton>
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