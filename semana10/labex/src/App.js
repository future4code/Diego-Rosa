import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from "./screens/HomePage";
import ApplicationPage from "./screens/ApplicationPage";
import CreateTripPage from "./screens/CreateTripPage";
import TripDetailPage from "./screens/TripDetailPage";
import TripsListPage from "./screens/TripsListPage";
import LoginPage from "./screens/LoginPage";
import styled from "styled-components";
import { CssBaseline } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`

const App = () => {
  return (
    <Router>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>

      <CssBaseline/>
      <AppContainer>
        <Switch>
          <Route path="/login" component={LoginPage}/>
            
          <Route path="/trips/detail/:tripId" component ={TripDetailPage}/>

          <Route path="/trips/create" component={CreateTripPage}/>

          <Route path="/trips" component={TripsListPage}/>
            
          <Route path="/application" component={ApplicationPage}/>
            
          <Route path="/" component={HomePage}/>
            
        </Switch>
      </AppContainer>
      </MuiPickersUtilsProvider>

    </Router>
  );
}

export default App