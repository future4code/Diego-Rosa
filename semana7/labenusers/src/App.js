import React from 'react';
import FormPage from './components/FormPage';
import UserListPage from './components/UserListPage';
import styled from 'styled-components'

  const ContainerApp = styled.div `
    display:flex;
    flex-direction:column;
    align-content:center;
    text-align:center;
  `;

  const ChangePageButton = styled.button `
      background-color:#99ff66;
      border-radius: 10px;
      border:none;
      padding: 10px;
      margin:10px;
      width: 200px;
      color: #666666;
  `;

class App extends React.Component {
  state ={
    formPage: true
  }

  changePage = () => {
    this.setState({formPage: !this.state.formPage})
  }

  render () {

      const currentPage = this.state.formPage ? (<FormPage/>): (<UserListPage/>) 

      return (
        
        <ContainerApp className="App">
          {currentPage}
        <ChangePageButton 
        onClick={this.changePage}>
          Change Page
        </ChangePageButton>
      </ContainerApp>
    );
  }
}

export default App;
