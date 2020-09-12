const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
const auth = require("./verifyUser");
const { useState } = require("react");
const User = require('../models/User');
const mongoose = require("mongoose");


router.get('/',auth,  (req,res) => {
    
    const idInfo =   User.findById({_id:req.user._id}).then(datax=>{
        res.json(datax);
        console.log(datax)
    }).catch(err=>{
        res.json(err);
    })
  
   

})

module.exports = router;