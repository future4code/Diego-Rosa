import React from 'react'

import Button from '@material-ui/core/Button'
import {FlexNavBar}  from '../CreateGLobalStyles/GlobalStyles'
import PageTitle from '../components/PageTitle'
import { useHistory } from 'react-router-dom'
import {  goToLogin, goToSignUp } from '../routes/coordinator'

const NavBar = () => {
    const history = useHistory()

    return (
  
                    <FlexNavBar>
                        <PageTitle title={"Labeddit"} />                           
                            <div>
                                <Button onClick={() => goToSignUp(history)}>SingUp</Button>
                                <Button onClick={() => goToLogin(history)}>Login</Button>
                            </div>
                    </FlexNavBar> 

    )
}

export default NavBar