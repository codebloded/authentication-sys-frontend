const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const authRouter = require('./routes/authRouter');
const bodyParser = require('body-parser')
const cors = require('cors');
const userRouter = require('./routes/userRouter');


const app = express();
const port = '4000';
const host = 'localhost';
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

// ==========MIDDLEWARRE========
app.get("/", (req, res)=>{
    res.json({message:"You are on the get"});
})
// ===================MONGOOSE CONECTION (MONGODB)==============
mongoose.Promise = global.Promise;
mongoose.connect(process.env.CONNECT_DB,({ useUnifiedTopology: true ,useNewUrlParser: true } ),()=>{
    console.log("connect to mongodb ")
});

app.use('/api',authRouter);
app.use('/api/user', userRouter);






// +++++++++++++Listening the server+++++++++++++++++
app.listen(port , ()=>{
    console.log(`The server is up and running http://${host}:${port}`);
});
