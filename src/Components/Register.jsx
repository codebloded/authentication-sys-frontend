import React from 'react'
import TextField from '@material-ui/core/TextField';
import Divider from "@material-ui/core/Divider";
import Button from '@material-ui/core/Button';

function Register() {
    const styles = {

        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",

    }
    return (

        <div className="App boxLogin">
            <h1>Register</h1>
            <div className="" style={styles}>
                <TextField id="standard-basic" label="Full Name" style={{ marginBottom: "5px" }} ></TextField>
                <TextField id="standard-basic" label="Email" style={{ marginBottom: "5px" }} ></TextField>
                <Divider></Divider>

                <TextField id="standard-basic" label="Password" type="Password" style={{ marginBottom: "5px" }} ></TextField>
                <Button variant="contained" color="primary" style={{ margin: "8px" }}>Login</Button>

            </div>
        </div>
    )
}

export default Register;