import React from 'react';
import LoginPage from './Login';
import RegisterPage from './Register';
import MainPage from './MainPage';
import { Switch, Route } from 'react-router-dom';

function Main() {
    return (
        <Switch>
            <Route exact path="/">
                <LoginPage />
            </Route>
            <Route path="/register">
                <RegisterPage />
            </Route>
            <Route path="/main">
                <MainPage />
            </Route>
        </Switch>
    )
};

export default Main;