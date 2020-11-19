import React from "react";
import { useHistory } from "react-router-dom";
import {HeaderContainer, MainContainer, FooterContainer} from "../../components/MainStyle"
import {SubTittle} from '../HomePage/HomeStyle'

const Home = () => {
    const history = useHistory();
    const goToLogin = () => {
        history.push("/login");
    };
    const goToSingup = () => {
        history.push("/singup");
    };
    /*const goToCriarViagem = () => {
        history.push("/criarViagem");
    }; */
  return (
    <div>
      <HeaderContainer>
        <SubTittle><strong>LabeX</strong></SubTittle>
      </HeaderContainer>
      <MainContainer>
        <div>
          <h3>Encontre as melhores viagens espaciais!</h3>
        </div>
        <div>
          <button onClick={goToLogin}>Admin area</button>
          <button onClick={goToSingup}>Candidare area</button>
        </div>

      </MainContainer>
        <FooterContainer>
          Footer
        </FooterContainer>
     </div>
  );
};
export default Home;