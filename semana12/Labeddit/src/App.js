import React from 'react'
import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import styled from 'styled-components'

import { ThemeProvider } from '@material-ui/core/styles'

import theme from './constants/theme';
import NavBar from './components/NavBar'


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        
          <NavBar />
        
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
