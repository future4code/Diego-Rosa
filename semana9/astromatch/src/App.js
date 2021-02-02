import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { AstroHomeContainer , AstroBtnContainer , AstroAppIcons , AstromatcheLogo } from './components/AstroMetches/MestheStyles';

import Profiles from './components/AstroProfiles/AstroProfiles'
import Matches from './components/AstroMatches/Metches'

import matchesIcon from './images/matchesicon.png'
import reset from './images/reset.svg'
import AstrometcheLogo from './images/astrometchelogo.png'

const  App = () => {
  
  const  [ page, setPage ] = useState('profiles')

  //muda da pagina profiles pra metches
  const changePage = () => {
    if (page  ===  'profiles') {
      setPage('matches')
    } else {
      setPage('profiles')
    }
  }
  
  //variavel de estado e função que altera o valor da variavel de estado
  const [ profile, setProfile ] = useState()
    
  //bate na API e pegar os profiles
  const getProfiles = () => {
    axios
    .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches
    `)
    .then(response => {
      setProfile(response.data.profile)
    })
    .catch (err => {
      alert(err)
    })
  }

  //
  useEffect(() => {
    getProfiles()
  }, [])

  //Pra resetar a lista de metches
  const resetMetches = () => {
    axios
    .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches`)
    .then(() =>
      getProfiles(),
      alert("Lista de metches resetada com sucesso"))
    .catch(err =>{
      alert(err)
    })
  }

  //Faz a renderização condicional de profiels pra metches
  const actualPage = page === 'profiles' ? (<AstroProfiles profile={profile} getProfiles={getProfiles}  /> ) : (<AstroMatches />)

  return (
      <AstroHomeContainer>
        <AstroBtnContainer>
          <AstroAppIcons src={resetIcon} onClick={resetMetches} />  
          <AstromatcheLogo src={AstrometcheLogo} />
          <AstroAppIcons src={matchesIcon} onClick={changePage} />
        </AstroBtnContainer>  
        {actualPage}
      </AstroHomeContainer>
  );
}

export default App;
