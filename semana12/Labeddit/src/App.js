import React from 'react'
import Router from './routes/Router';
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import styled from 'styled-components'

import { ThemeProvider } from '@material-ui/core/styles'

import theme from './constants/theme';
import MainAppBar from './components/MainAppBar'

const Container = styled.div`
  padding-top: 64px;
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Container>
          <MainAppBar />
        </Container>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
