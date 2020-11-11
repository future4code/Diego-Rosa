import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import styled from 'styled-components'


const Header = () => {
  return (
    <div>
      <PersonIcon/>
        <img src={"./assets/astromatch-logo.jpg"} height="100px" alt="Logo da aplicação"/>
      <ForumIcon/>
    </div>
  );
}

export default Header;
