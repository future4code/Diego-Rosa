import React from "react";
//Para facilitar, foi criado o hook useHistory que nos
//permite acessar o histórico dentro de qualquer componente funcional
import { useHistory } from "react-router-dom";
//import {Header} from './components/Header/Header'

const HomePage = () => {
  //O objeto history no react-router nos permite trocar A página atual
  const history = useHistory();

  const goToAboutPage = (linguagem) => {
    //troca de página permitindo que o usuário volte
    history.push(`/sobre/${linguagem}`);
  };

  const goToContactsPage = () => {
    history.push("/contatos");
  };

  return (
    <div>
      <p>LabeX Home</p>
      <button onClick={() => goToAboutPage("portugues")}>
        Ir para infos do site PT
      </button>
      <button onClick={() => goToAboutPage("ingles")}>
        Ir para infos do site EN
      </button>
      <button onClick={goToContactsPage}>Go to contact page</button>
      <button>TripsCreate</button>
      <button>TripsDetails</button>
      <button>TripsList</button>
      <button>Login</button>
      <button>Register</button>
    </div>
  );
};

export default HomePage;
