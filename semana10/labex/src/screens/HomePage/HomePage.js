import React from "react";
import { useHistory } from "react-router-dom";
import {HeaderContainer, MainContainer, FooterContainer} from "../../components/MainStyle"
import  {SubTitle, FlexBox, SectionArea, Button} from '../HomePage/HomeStyle'
import LockOpenIcon from '@material-ui/icons/LockOpen';

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
        <SubTitle><strong>LabeX</strong></SubTitle>
      </HeaderContainer>
      <MainContainer>
        <div>
          <h3>Seja adiministrador ou candidato</h3>
        </div>
        <FlexBox>
          <SectionArea>
            
              <Button onClick={goToLogin}>Admin area</Button>
          </SectionArea>
          <SectionArea>
              <Button onClick={goToSingup}>Candidare area</Button>  
          </SectionArea>
        </FlexBox>

      </MainContainer>
        <FooterContainer>
          Footer
        </FooterContainer>
     </div>
  );
};
export default Home;