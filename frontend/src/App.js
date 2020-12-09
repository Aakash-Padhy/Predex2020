import React,{useEffect} from 'react';
import {Router,Route,Redirect,Switch} from 'react-router-dom';
import {history} from './helpers/history';
import {useSelector,useDispatch} from 'react-redux';
import {clearErrors} from './redux/actions/errorActions';
import Auth from './components/Auth/Auth';
import Predict from './components/Predict/Predict';
import Home from './components/Home/Home';
import Symptomp from './components/Symptomp/Symptomp';
import Cost from './components/Cost/Cost';
import Doctor from './components/Doctor/Doctor';
import LoginHome from './components/LoginHome/LoginHome';
import Logout from './components/Logout/Logout'
import { useState } from 'react';
import './App.css';
 

function App() {
  let [location,setLocation] = useState('')
  const dispatch = useDispatch()
   history.listen((location, action) => {
    // clear alert on location change
    setLocation(location.pathname)
    dispatch(clearErrors())

  });
  useEffect(()=>{
    //dispatch(loadUser())
  },[location])

  console.log("rerendering")
 
 return (
    <>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' component={Auth}/>
      <Route exact path='/register' component={Auth}/>
      <Route exact path='/predict' component={Predict}/>
      <Route exact path='/cost' component={Cost}/>
      <Route exact path='/symptomp' component={Symptomp}/>
      <Route exact path='/doctor' component={Doctor}/>
      <Route exact path='/loginhome' component={LoginHome}/>
      <Route exact path='/logout' component={Logout}/>
    </Switch>
    </>
  );
}

export default App;
