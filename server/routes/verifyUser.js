const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
        const authHeader = req.headers['authorization'];
        const token  = authHeader && authHeader.split(' ')[1];
        console.log(token)
        if(!token) return res.status(401).send("Access Denied");
        try{
            const userVerification = jwt.verify(token , process.env.TOKEN_SECRET);
            console.log("token matched")
            req.user = userVerification;
            next();

        }catch(err){
            console.log("Invalid Token")
            res.status(400).send("Invalid Token");
        }
}