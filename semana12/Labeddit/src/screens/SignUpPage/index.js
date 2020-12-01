import React from 'react';

import { SingUpFlexBox, SingUpContainer} from '../../CreateGLobalStyles/GlobalStyles'

const SignUpPage = () => {
   
        // const [form, onChangeInput] = useForm({
        //   name: '',
        //   age: 0,
        //   password: '',
        // })
      
        // const onSubmitSingUp = (e) => {
        //   e.preventDefault()
        //   console.log(form)
        //   const body = {
        //     name: form.name,
        //     age: form.age,
        //     password: form.password,
            
        //   }
      
        //   axios.post("")
        // }
      

    return (
    <React.Fragment>
        
                    < SingUpFlexBox>
                
                            <SingUpContainer>
                                <h1>SingUp</h1>
                                <input type="text" name="name" placeholder="name" required/>
                                <input type="text" name="email" placeholder="email" required/>
                                <input type="password" name="password" placeholder="password" required/>
                                
                                <section>
                                    <button>SingUp</button>
                                </section>
                            </SingUpContainer>

                    </ SingUpFlexBox>
    </React.Fragment>
    )
}

export default SignUpPage;