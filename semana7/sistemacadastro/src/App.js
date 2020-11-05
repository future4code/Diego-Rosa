import React from "react";
import Cadastro from './components/Cadastro/Cadastro'
import ListaUsuario from './components/ListaUsuario/ListaUsuario'

class App  extends React.Component{
  render(){

    return (
      <div>
        <Cadastro/>
        <ListaUsuario/>
      </div>
    )
  }
  
}

export default App;