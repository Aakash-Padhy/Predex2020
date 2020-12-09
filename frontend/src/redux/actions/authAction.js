import axios from 'axios'
import {REGISTER_SUCCESS,REGISTER_FAIL,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT_SUCCESS,USER_LOADED,USER_LOADING,AUTH_ERROR,PREDICT_SUCCESS,PREDICT_FAIL} from './types'
import {history} from '../../helpers/history'
import {returnErrors} from './errorActions'
import {useHistory} from 'react-router-dom';
import { message, Button, Space } from 'antd';
//action creator for register

export const register = ({username,email,password})=> async (dispatch,getState) =>{
    
    const registerSuccess = (data) => ({type:REGISTER_SUCCESS,payload:data})
    const registerFail = () =>({type:REGISTER_FAIL})
    
     
    //setting up header on body for register http request
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':"true",
        }
    }
    
    const body = JSON.stringify({username,email,password})
    const success = () => {
       message.success('Account created successfully');
      };

    const error = (value) => {
        message.error(value);
      };

    axios.post(' http://127.0.0.1:5000/register',body,config)
        .then(res =>{
        if(res.data.message=="1")
            error("Please enter all the details.");
        else if(res.data.message=="2"){
            error("Username already registered.")
        }
        else if(res.data.message=="3"){
            error("Problem in creating token")
        }
        else{
            success()
            dispatch(registerSuccess(res.data))
             history.push('/login')
             history.go()
        }
        })
        .catch(err =>{

           // dispatch(returnErrors(err.response.status,'REGISTER_FAIL'))
            dispatch(registerFail())
        })
}

export const login = ({email,password}) => async (dispatch,getState) =>{

    const loginSuccess = (data) =>({type:LOGIN_SUCCESS,payload:data})
    const loginFail = () => ({type:REGISTER_FAIL})
    const success = () => {
       message.success('Logged In successfully');
      };

    const error = (value) => {
        message.error(value);
      };

    const config = {
        headers:{
            "Content-Type" : "application/json",
            'Access-Control-Allow-Origin':"true",
        }
    }

    const body = JSON.stringify({email,password})

    axios.post('http://127.0.0.1:5000/login',body,config)
        .then(res => {
        
        if(res.data.message=="1")
            error("Please enter all the details.");
        else if(res.data.message=="2"){
            error("Username not registered.")
        }
        else if(res.data.message=="3"){
            error("Problem in creating token")
        }
        else if(res.data.message=="4"){
            error("Incorrect password!!")
        }else{
            success()
            dispatch(loginSuccess(res.data))
             history.push('/loginhome')
             history.go()
        }
        })
        .catch(err=>{
            error()
            //dispatch(returnErrors(err.response.data,err.response.status,'LOGIN_FAIL'))
            //dispatch(loginFail())
        })
}


// export const loadUser = ()=>async (dispatch,getState)=>{
    
//     const userLoading = () => ({type:USER_LOADING})
//     dispatch(userLoading)
//     const token = getState().auth.token;

//     const config ={
       
//         headers:{
//             "Content-Type" : "application/json"
//         }
//     }

//     if(token){
//         config.headers['x-auth-token'] = token;

//     }

//     axios.get(' http://127.0.0.1:5000/login',config)
//         .then(user=>{
//             dispatch({
//                 type:USER_LOADED,
//                 payload:user.data
//             })
//         })
//         .catch(err=>{
//             // dispatch(returnErrors(err.response.data,err.response.status))
//             dispatch({
//                 type:AUTH_ERROR
//             })
//         })
// }


export const logout = ()=>(dispatch) =>{

    const logoutcreator = ()=>({type:LOGOUT_SUCCESS})
    dispatch(logoutcreator())

    history.push('/login')
    history.go()
}