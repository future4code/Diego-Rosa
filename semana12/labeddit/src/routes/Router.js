import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import FeedPage from '../screens/FeedPage/FeedPage'
import LoginPage from '../screens/LoginPage/LoginPage'
import PostPage from '../screens/PostPage/PostPage'
import SingUpPage from '../screens/SingUpPage/SingUpPage'

const Router = () => {
  return(
      <BrowserRouter>
          <Switch>
                <Route exact path={"/login"} component={LoginPage}/>
                <Route exact path={"/singup"} component={SingUpPage}/>
                <Route exact path={"/feed"} component={FeedPage}/>
                <Route exact path={"/post/:postId"} component={PostPage}/>
          </Switch>
      </BrowserRouter>
  )
}
export  default Router