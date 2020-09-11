import React,{useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Redirect } from 'react-router-dom';



function Login() {
    const [data , setData] = useState({

        email: undefined,
        password : undefined
    })
    const [isLoggedIn , setLog] = useState(false);
    const [error ,setErr] = useState()

    const styles = {

        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",

    }
    const submitHandler =async (e) =>{
            e.preventDefault();
            console.log(data)
            const token = await axios.post("http://localhost:4000/api/login", data)
            try{

                localStorage.setItem("token", `"Bearer ${token.data}"`);
                console.log(token);
                setLog(true);

            }catch(err){
                setErr(err.message)
                console.log(error);
            }
        
    }

    const changeHandler = (e) => {
    
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
       
    }
 
        if(isLoggedIn === true){
            return <Redirect to="/logout"/>
        }
   
    return (

        <div className="App boxLogin">
            <h1>Login</h1>
            <form onSubmit={submitHandler}>

            <div className="" style={styles}>
                <TextField autoComplete="false" id="standard-basic" name="email" value={data.email} onChange={changeHandler} label="Email" style={{ marginBottom: "5px" }} ></TextField>
                <Divider></Divider>

                <TextField id="standard-basic" autoComplete="false" name="password" value={data.password} onChange={changeHandler} autoFocus="false" label="Password" type="Password" style={{ marginBottom: "5px" }} ></TextField>
                <Button variant="contained" type="submit" color="primary" style={{ margin: "8px" }}>Login</Button>

            </div>
            </form>
        </div>
    )
}


export default Login;