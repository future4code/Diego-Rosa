import React from 'react'
import {HeaderContainer}from '../Header/styles'

class Header extends React.Component {
  render() {
    return (
   
         <HeaderContainer>
                <h1>Lab Tube</h1>
                <input type="text" placeholder="Busca" id="campoDeBusca" />
            </HeaderContainer>
      
    );
  }
}

export default Header;