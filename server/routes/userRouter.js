const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
const auth = require("./verifyUser")

router.get('/',auth, (req,res) => {
   
    res.json(req.user)
    console.log(req.user)
   
})

module.exports = router;