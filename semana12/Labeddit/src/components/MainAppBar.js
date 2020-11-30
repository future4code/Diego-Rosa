import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

import { useHistory } from 'react-router-dom'
import {  goToLogin, goToSignUp } from '../routes/coordinator'

const MainAppBar = () => {
    const history = useHistory()
    return (
        <AppBar className={'appbar'}>
            <Toolbar>
                <Button onClick={() => goToSignUp(history)}>SingUp</Button>
                <Button onClick={() => goToLogin(history)}>Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default MainAppBar