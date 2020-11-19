import React from 'react'
import {useHistory} from 'react-router-dom'
import {HeaderContainer, MainContainer, FooterContainer} from "../components/MainStyle"
const SingupPage = () => {
  const history = useHistory();
  const goToHome = () => {
    history.push("/");
  };

  const goToSingup = () => {
    history.push("/login");
  };
  
  return (
    <div className="SingupPage">
           <HeaderContainer>
           <h1><strong>LabeX</strong></h1>
           </HeaderContainer>
           <MainContainer>
           <p>Singup</p>
            <input placeholder="Name"></input>             
            <input placeholder="Age"></input>
            <button onClick={goToHome}>Back to home</button>
            <button onClick={goToSingup}>Login</button>
           </MainContainer>
           <FooterContainer>
             Footer
           </FooterContainer>
          </div>
          )
     }

    export default SingupPage;