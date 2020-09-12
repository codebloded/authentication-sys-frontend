import React, { useState } from 'react';
import {Link , Button} from '@material-ui/core';
import { Redirect } from 'react-router-dom';

function Logout(){
    const [loggedIn, setLoggedIn] = useState(true);
    const handler = () => {
        setLoggedIn(false)
        const removeToken = localStorage.removeItem('token');
        if(removeToken===undefined){
            console.log("logged out")
        }
       

    } 
    if(loggedIn === false){
        return <Redirect to="/login"/>
    }

    return(
        <div className = "App">
            <h1>Logged out</h1>
            <Link to="/logout" style={{textDecoration:"none", color:"white"}}><Button  onClick={handler} variant = "contained" color="primary">Logout</Button></Link>

            
        </div>
    )
}

export default Logout;