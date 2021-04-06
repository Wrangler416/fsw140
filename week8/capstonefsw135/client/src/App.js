import React, {useContext} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Navbar from "./components/Nav"
import Public from "./components/Public"
import ProtectedRoute from "./components/ProtectedRoute"
import {UserContext} from "./context/UserProvider"
import "./css/index.css"

export default function App(){

  const {token, logout} = useContext(UserContext)

  return (
    <div className="app">      
      { token &&  <Navbar logout={logout}/> }
     
      <Switch>
        <Route 
          exact path="/" 
          render={()=> token ? <Redirect to="/profile"/> : <Auth />}
        />
        <ProtectedRoute
        path="/profile"
        component={Profile}
        redirectTo="/"
        token={token}
        />
        <ProtectedRoute
        path="/public"
        component={Public}
        redirectTo="/"
        token={token}
        />
      </Switch>
    </div>
  )
}