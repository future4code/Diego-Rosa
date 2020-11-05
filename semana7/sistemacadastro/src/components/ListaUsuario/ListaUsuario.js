import React from "react";
import styled from "styled-components";

const UsuarioLista = styled.ul`
  list-style: none;
`;

const UsuarioListaItem = styled.li`
  display: flex;
  min-width: 60px;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 10px 0;
`;

const BotaoDelete = styled.span`
  color: red;
  cursor: pointer;
`;

export default class ListaUsuario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <UsuarioLista>
        <h2>Usuários Cadastrados:</h2>
        {this.props.users.map(user => (
          <UsuarioListaItem key={user.id}>
            {user.name}{" "}
            <BotaoDelete onClick={() => this.props.onDeleteUser(user.id)}>
              X
            </BotaoDelete>
          </UsuarioListaItem>
        ))}
      </UsuarioLista>
    );
  }
}
