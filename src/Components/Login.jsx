import React from 'react'
import TextField from '@material-ui/core/TextField';
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button';


function Login() {
    const styles = {

        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",

    }
    return (

        <div className="App boxLogin">
            <h1>Login</h1>
            <div className="" style={styles}>
                <TextField autoComplete="false" id="standard-basic" label="Email" style={{ marginBottom: "5px" }} ></TextField>
                <Divider></Divider>

                <TextField id="standard-basic" autoComplete="false" autoFocus="false" label="Password" type="Password" style={{ marginBottom: "5px" }} ></TextField>
                <Button variant="contained" color="primary" style={{ margin: "8px" }}>Login</Button>

            </div>
        </div>
    )
}


export default Login;