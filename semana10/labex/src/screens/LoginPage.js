import React from 'react'
import {useHistory} from 'react-router-dom'
import {HeaderContainer, MainContainer, FooterContainer} from "../components/MainStyle"

const Login = () => {
  const history = useHistory();
  const goToHome = () => {
    history.push("/");
  };

  const goToSingup = () => {
    history.push("/singup");
  };

  return (
    <div className="Login">
      <HeaderContainer>
        <h1><strong>LabeX</strong></h1>
      </HeaderContainer>
      <MainContainer>

         <p>Login</p> 
     
      <input placeholder="E-mail"></input>             
      <input placeholder="Password"></input>
      
      <button onClick={goToHome}>Back to home</button>
      <button onClick={goToSingup}>Singup</button>
      </MainContainer>
      <FooterContainer>
        Footer
      </FooterContainer>
    </div>
  );
};
export default Login;