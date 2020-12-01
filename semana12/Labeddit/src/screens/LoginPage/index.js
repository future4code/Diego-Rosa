import React from 'react';
import { LoginFlexBox, LoginContainer} from '../../CreateGLobalStyles/GlobalStyles'
const LoginPage = () => {

    return < LoginFlexBox>
         
                <LoginContainer>
                    <h1>Login</h1>
                    <input type="text" name="email" placeholder="email" required/>
                    <input type="password" name="password" placeholder="password" required/>
                    
                    <section>
                        <button>SingIn</button>
                        <button>SingUp</button>
                    </section>
                </LoginContainer>
       
        </ LoginFlexBox>
}

export default LoginPage;