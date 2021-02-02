import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";
import styled from "styled-components";

const PokeContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  color: blue;
  font-size: 20px;
  padding: 80px;
`;

const PokeCardContainer = styled.div`
  background-color: yellow;
  border-radius: 20px;
  min-width: 370px;
  border: 2px solid blue;
`;

const PokeTitle = styled.h2`
  color: red;
`;

const PokeSelect = styled.select`
  border: 2px dotted blue;
  background-color: yellow;
  color: blue;
  padding: 10px;
  border-radius: 10px;
  font-size: 25px;
`;

const App = () => {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  // método que roda ao montar o componente
  useEffect(() => {
    getPokeList();
  }, []);

  const getPokeList = () => {
    // função axios que está batendo na API e buscando 151 pokemons
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        // função que está setando no estado os 151 pokemons
        setPokeList(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  return (
    <PokeContainer>
      <PokeCardContainer>
        <PokeTitle>Selecione seu pokemon</PokeTitle>
        <PokeSelect onChange={changePokeName}>
          <option value={""}>Poke Card</option>
          {pokeList.map((pokemon) => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </PokeSelect>
        {pokeName && <PokeCard pokemon={pokeName} />}
      </PokeCardContainer>
    </PokeContainer>
  );
};

export default App;
