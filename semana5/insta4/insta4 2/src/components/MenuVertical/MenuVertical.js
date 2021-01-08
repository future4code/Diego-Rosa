import React from 'react'
import {MenuVerticalContainer} from './styles'

class MenuVertical extends React.Component{
  render(){
    return(
      <MenuVerticalContainer>
          <ul>
              <li >Início</li>
              <li>Em alta</li>
              <li >Inscrições</li>
              <hr />
              <li>Originais</li>
              <li >Histórico</li>
          </ul>
      </MenuVerticalContainer>
    )
  }
}
export default MenuVertical