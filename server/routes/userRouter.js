const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
const auth = require("./verifyToken")

router.get('/',auth, (req,res) => {
    console.log("heyyyys")
    res.json(req.user)
    console.log(req.user)
    console.log("heyyyys")
})

module.exports = router;