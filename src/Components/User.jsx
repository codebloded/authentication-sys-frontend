import React,{useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import {Link, Redirect} from 'react-router-dom';
import Axios from 'axios';
import { Container } from '@material-ui/core';

function User(){
    const [apiData , setApiData] = useState({});
    useEffect( ()=>{
        const Token = JSON.parse(localStorage.getItem('token'));
        console.log(Token);
        const response =  Axios.get('http://localhost:4000/api/user',{
            
            headers:{

                'Authorization': Token,
                'Content-Type': 'application/json',

            }
        }).then(dataR=>{
            console.log(dataR.data)
            setApiData(dataR.data)
        }).catch(err=>{
            console.log(err);
        })
       
        
    },[setApiData])
    
    return(
        <div className='App'>
         

        <h1>Users</h1>
        <Container>
            <div className='App'>
                <h3>Name {apiData.name}</h3>
                <h3>Email {apiData.email}</h3>
        
            </div>
        </Container>
        <Link to="/logout" style={{textDecoration:"none", color:"white"}}><Button variant = "contained" color="primary">Logout</Button></Link>

        </div>
    )
}

export default User;