import React, { useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import ResetPassword from './components/Auth/ResetPassword';
import { verifyToken } from './actions/auth';

function App() {

  const dispatch = useDispatch();
  // verify jwt token 
  useEffect(() => {
    dispatch(verifyToken());
  }, [dispatch])
  // user data
  const state = useSelector(state => state.authReducer);
  const user = state.user;
  const isLogged = state.isLogged;

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar user={user} isLogged={isLogged}/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/account/auth' component={() => (!isLogged ? <Auth /> : <Redirect to='/' />)} />
            <Route exact path='/account/reset/password' component={() => (!isLogged ? <ResetPassword /> : <Redirect to='/' />)} />
            <Redirect to='/' />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App;