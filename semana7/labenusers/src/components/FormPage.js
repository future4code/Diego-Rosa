import React from 'react'



class FormPage extends React.Component {
    state ={
        nameValue: "",
        emailValue: ""
    }

    onChangeNameValue = (event) => {
        this.setState({nameValue: event.targe.value})
    }


    onChangeEmailValue = (event) => {
        this.setState({emailValue: event.targe.value})
    }

    render(){
        return (
            <div>
                <input
                 value={this.state.nameValue}
                 onChange={this.onChangeNameValue}
                 />
                
                <input
                 value={this.state.emailValue}
                onChange={this.onChangeEmailValue}
                />

                <button>Create User</button>
            </div>
        )
    }
}

export default FormPage;