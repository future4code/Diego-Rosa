import React from "react";
import axios from "axios";
import styled from "styled-components";

const PokeSelect = styled.select `
    width: 100%;
    background-color: #4d94ff;
    padding: 10px;
    color: #ffff33;
    border: none;
`;

class App extends React.Component {
  
  state = {
    pokeList:[]
  }
 
  componentDidMount() {
    this.getPokemons();
  }

  getPokemons = () => {
    
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";
    
    axios.get(apiUrl).then((response) => {
      
      console.log('RESPOSTA', response)
      this.setState({pokeList: response.data.results})
    });
  };
 

  render() {
    console.log(this.state.pokeList)

    //transforma um array de alguma coisa, em outro array de alguma coisa
    const pokeOptionList = this.state.pokeList.map((pokemon) => {
      
      //retorna os dados para a variavel optionList
      return <option
      key={pokemon.name}>
      {pokemon.name}
      </option>
    });

    //renderiza uma lista de 151 pokemons
      return (
        <div>
          <PokeSelect>
            {pokeOptionList}
          </PokeSelect>
        </div>
      )
      
  }};

export default App;

