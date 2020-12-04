import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LoginPage from '../screens/LoginPage/LoginPage';
import SingUpPage from '../screens/SignUpPage/SignUpPage';
import FeedPage from '../screens/FeedPage/FeedPage';
import PostPage from '../screens/PostPage/PostPage';
import ErrorPage from '../screens/ErrorPage/ErrorPage';


const Router = () =>{
  return(
    <Switch>
        <Route exact path={'/login'} component={LoginPage}/>
        <Route exact path={'/singup'}  component={SingUpPage}/>
        <Route exact path={'/postPage'} component={PostPage}/>
        <Route exact path={'/feedPage'} component={FeedPage}/>
        <Route exact path={'/errorPage'} component={ErrorPage}/>
    </Switch>
  )
}
export default Router;