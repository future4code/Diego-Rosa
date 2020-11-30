import React from 'react';
import {  Switch, Route } from 'react-router-dom';
import LoginPage from '../screens/LoginPage/index.js'
import SignUpPage from '../screens/SignUpPage/index'
import FeedPage from '../screens/FeedPage/index'
import PostPage from '../screens/PostPage/index'
import ErrorPage from '../screens/ErrorPage/index'


const Router = () => {
    return (

            <Switch>
               
                <Route exact path={'/login'} component={LoginPage}/>
                    
                <Route exact path={'/singUp'} component={SignUpPage}/>
                    
                <Route exact path={'/feedPage'} component={FeedPage} />
                            
                <Route exact path={'/postPage'} component={PostPage}/>
                   
                <Route exact path={'/errorPage'} component={ErrorPage}/>
                     
            </Switch>
    )
}

export default Router;