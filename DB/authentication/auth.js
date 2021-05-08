const jsonwebtoken = require ('jsonwebtoken')
require('dotenv').config()

const schh = process.env.SCHH

exports.token = (id) => {
    return jsonwebtoken.sign({id:id}, schh, {expiresIn:'1h'}) //gör att vi bara kan vara inloggade 1 h, sen måste vi logga in igen.
}

exports.verifyToken = (request, response, next) => { //next är en middleware som vi använder om vi lyckas verifiera och sen vill komma till nästa steg
try {
const TOKEN = request.headers.authorization.split(" ")[1]
request.userData = jsonwebtoken.verify(TOKEN, schh)
next()
}
catch{
return response.status(401).json({
    statusCode: 401,
    status: false,
    message: 'to access please login'
})
}
}