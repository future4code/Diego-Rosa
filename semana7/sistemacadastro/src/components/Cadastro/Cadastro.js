import React from "react";
import styled from "styled-components";

const CadastroContainer = styled.div`
  display: flex;
  width: 23%;
  flex-direction: column;
  margin: 0 auto;
  padding: 30px;
  border: 2px solid black;

  div {
    margin-bottom: 15px;
  }
`;

const CadastroBotao = styled.button`
  color: white;
  color: white;
  background-color: grey;
  outline: none;
  border: none;
  border: none;
  margin: 0 auto;
  font-family: inherit;
  font-size: inherit;
  position: relative;
  padding: 0.5em 1em;

  overflow: hidden;
  cursor: pointer;

`;

class Cadastro extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      name: ""
    };
  }

  mudaInput = event => {
    
  };

  saveUser = () => {
    
  };

  render() {
    return (
      <CadastroContainer>
        <div>
          <label forHtml="name">Nome:</label>
          <input
            required
            id="name"
            name="name"
            type="text"
            onChange={}
            value={}
          />
        </div>
        <div>
          <label forHtml="email">E-mail:</label>
          <input
            required
            id="email"
            name="email"
            type="email"
            onChange={}
            value={}
          />
        </div>
        <CadastroBotao onClick={}>Salvar</CadastroBotao>
      </CadastroContainer>
    );
  }
}
export default Cadastro;