var jwt = require('jsonwebtoken');

function createToken(payload) {
    return jwt.sign(payload, "SomeSecretKey");
}

function verifyToken(token) {
    return jwt.verify(token, "SomeSecretKey", function(err, payload){
        if(err) throw err;
        return payload;
    });
}

module.exports = {
    createToken : createToken,
    verifyToken : verifyToken
}