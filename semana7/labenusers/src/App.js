import React from 'react';
import FormPage from './components/FormPage';
import UserListPage from './components/UserListPage';
  
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
        
        <div className="App">
        {currentPage}
        <button onClick={this.changePage}>Change Page</button>
      </div>
    );
  }
}

export default App;
