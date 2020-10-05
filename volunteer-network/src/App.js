import React, { createContext, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Auth from './Components/Authentication /Login';
import RegistationForm from './Components/RegistationForm/RegistationForm';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Volunteer from './Components/Volunteer/Volunteer';
export const UserContext = createContext()
function App() {
  const [user,setUser]=useState({isSignedUp:true})
  return (
    <UserContext.Provider value={[user,setUser]}>
      <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/login'>
          <Auth/>
        </Route>
        <PrivateRoute exact path='/registation-form'>
          <RegistationForm/>
        </PrivateRoute>
        <PrivateRoute exact path='/volunteer'>
          <Volunteer/>
        </PrivateRoute>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
      </Router>
    </UserContext.Provider>
  );
}
export default App;
