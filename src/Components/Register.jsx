import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
function Register() {

    const [data, setData] = useState(
        {
            name: undefined,
            email: undefined,
            password: undefined
        });
    const [sent, setSent] = useState()
    const [isSubmit, setSubmit] = useState(false);

    const submithandler = (e) => {
        console.log(e.target)
        e.preventDefault();
        axios.post("http://localhost:4000/register", data).then((res => {
            console.log(res.data);
        })).catch(err => {
            console.log(err);
        })

        setSent(data);
        setSubmit(true)
       




    }
 
        

    const styles = {

        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",

    }
    if (isSubmit === true) {
        return (<Redirect to='/' />)
    }



    const clickHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

   

    return(

        <div className="App boxLogin">
            <h1>Register</h1>
            <form method="POST" autoComplete="false" autoCorrect="false" action="/register" onSubmit={submithandler} >

                <div className="" style={styles}>
                    <TextField id="standard-basic" value={data.name} name="name" onChange={clickHandler} label="Full Name" style={{ marginBottom: "5px" }} ></TextField>
                    <TextField id="standard-basic" label="Email" value={data.email} name="email" onChange={clickHandler} style={{ marginBottom: "5px" }} ></TextField>
                    <Divider></Divider>

                    <TextField id="standard-basic" label="Password" name="password" onChange={clickHandler} value={data.password} type="Password" style={{ marginBottom: "5px" }} ></TextField>
                    <Button variant="contained" color="primary" type="submit" style={{ margin: "8px" }}>Register</Button>

                </div>
            </form>
        </div>
    )
}

export default Register;