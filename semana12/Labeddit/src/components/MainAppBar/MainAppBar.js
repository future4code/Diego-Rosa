import React from 'react'

import {ButtonsContainer} from "./styles"

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'


import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import {goToFeedPage, goToLoginPage } from '../../routes/coordinator.js'

const MainAppBar = () => {
    const history = useHistory()
    return (
    
      <AppBar className={'appbar'}>
        <Toolbar>
            <ButtonsContainer>
              <Button color="inherit"
               onClick={() => goToFeedPage(history)}>
                 Labeddit
                 </Button>

              <Button color="inherit" 
              onClick={() => goToLoginPage(history)}>
                Logout
                </Button>
            </ButtonsContainer>
      </Toolbar>
    </AppBar>
  
    )
}

export default MainAppBar