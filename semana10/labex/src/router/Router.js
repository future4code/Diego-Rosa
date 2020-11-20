import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TripsPage from "../screens/Trips";
import SingupPage from "../screens/SingupPage";
import LoginPage from "../screens/LoginPage";
import HomePage from "../screens/HomePage/HomePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/*Cada <Route /> tem
        como filho a página
        que deve ser aparecer
        Também recebe pelo
        parâmetro path a URL
        da página*/}
        <Route exact path="/" >
          <HomePage />
        </Route>
        <Route exact path="/login/">
          <LoginPage />
        </Route>
        <Route exact path="/singup">
          <SingupPage />
        </Route>
        {/*Componente responsável por definir uma rota
        Recebe uma prop path, que tem a URL à qual aquela
        rota corresponde
        Tudo o que estiver dentro dela será renderizado
        quando o path coincidir com a URL */}
        <Route exact path="/TripsPage">
          <TripsPage  />
        </Route>
        {/*Componente responsável por permitir que apenas
        uma rota seja renderizada por vez
        Rotas serão avaliadas de cima para baixo, e a
        primeira que corresponder será renderizada
        Comportamento semelhante ao switch/case */}
      </Switch>
      {/*Componente responsável por "abrigar"e gerenciar
      todas as rotas
      Funciona em conjunto com outros componentes
      react-router*/}
    </BrowserRouter>
  );
}

export default Router;