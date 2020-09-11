import React,{useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import {Link, Redirect} from 'react-router-dom';
import Axios from 'axios';

function User(){
    const [apiData , setApiData] = useState();
    useEffect(async ()=>{
        const Token = JSON.parse(localStorage.getItem('token'));
        console.log(Token);
        const response = await Axios.get('http://localhost:4000/api/user',{
            headers:{

                'Authorization': Token
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
        <Link to="/logout" style={{textDecoration:"none", color:"white"}}><Button variant = "contained" color="primary">Logout</Button></Link>

        </div>
    )
}

export default User;