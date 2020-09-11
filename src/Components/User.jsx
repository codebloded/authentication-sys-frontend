import React,{useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import {Link, Redirect} from 'react-router-dom';
import Axios from 'axios';

function User(){
    const [apiData , setApiData] = useState();
    useEffect(async ()=>{
        const token = localStorage.getItem('token');
        console.log(token);
        const response = await Axios.get('http://localhost:4000/user',{
            headers:{

                'auth-token':token
            }
        })
        try {
            console.log(response);
        } catch (err) {
            console.log(err.message)     
        }
       
        
    },)
    
    return(
        <div className='App'>
         
        <h1>Sucessfully logged in </h1>
        <h2>You are on the user page </h2>
        <Link to="/logoutt" style={{textDecoration:"none", color:"white"}}><Button variant = "contained" color="primary">Logout</Button></Link>

        </div>
    )
}

export default User;