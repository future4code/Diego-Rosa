import React from "react";
import { useHistory, useParams } from "react-router-dom";

const AboutPage = () => {
  const history = useHistory();
  const pathParams = useParams();

  const goToHomePage = () => {
    history.push("/");
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <p>{pathParams.linguagem === "portugues" ? "Sobre" : "About the LabeX"}</p>
      <button onClick={goToHomePage}>
        {pathParams.linguagem === "portugues"
          ? "Ir para página inicial"
          : "Go to home page"}
      </button>
      <button onClick={goBack}>
        {pathParams.linguagem === "portugues" ? "Voltar" : "Go back"}
      </button>
    </div>
  );
};

export default AboutPage;
