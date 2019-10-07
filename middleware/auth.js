const jwt = require('jsonwebtoken');
const config = require('config');
const dotenv = require('dotenv');

module.exports = function(req, res, next){
    const token = req.header('x-auth-token');

    if(!token){
        return res.status(401).json({msg: 'no token, access denied'})
    }
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.user = decoded.user;
        next()
    }
    catch(err){
        res.status(401).json({msg:'token not valid'});
    }
}